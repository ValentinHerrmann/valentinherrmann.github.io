---
title: "SQL Testing libraries"
excerpt: "Python libraries for automatically checking students' SQL queries, e.g. in Artemis"
header:
  image: sql_testing/banner.png
  teaser: sql_testing/overview.png
---

# Automatic feedback for school SQL exercises

Students write a SQL query, a unit test compares it with the teacher's solution and answers with a German hint like "the WHERE part is not correct". Built for K-12 database lessons on [Artemis](https://artemisapp.github.io/), but it works with any Python `unittest` runner.

**Code at Github:** [sql_testing_tools](https://github.com/ValentinHerrmann/sql_testing_tools) ([PyPI](https://pypi.org/project/sql-testing-tools/)) · [dbiu_databases](https://github.com/ValentinHerrmann/dbiu_databases) ([PyPI](https://pypi.org/project/dbiu-databases/))

## How it works

Two queries can be equal but look different. So both are **normalized** first, then compared as strings:

- **Upper/lower case, whitespace, line breaks** and the trailing `;` are ignored.
- **Table aliases** are resolved and every column gets its table prefix, looked up in the database schema.
- **Order does not matter** where SQL does not care: columns in `SELECT`, tables in `FROM`, columns in `GROUP BY`, and the operands of `AND` and `OR`. In `ORDER BY` the order is kept.
- **Same meaning, same form:** `<>`, `!=` and `NOT LIKE` become one form; `=` on strings is case-insensitive like `LIKE`; `ORDER BY x` equals `ORDER BY x ASC`.

The query also runs against a real SQLite database, so syntax errors and unknown columns are reported. Optionally the [Cosette](https://cosette.cs.washington.edu/) prover checks semantic equality (no longer maintained).

## Supported SQL

`SELECT` (with or without table prefix) · `COUNT(*)`, `COUNT(column)` and other aggregate functions · `FROM` with one or more tables (joins via `WHERE`) · `WHERE` with `=`, `<`, `>`, `<=`, `>=`, `<>`, `!=`, `LIKE`, `NOT` and nested `AND`/`OR` in parentheses · `GROUP BY` · `ORDER BY` with `ASC`/`DESC` on several columns · `LIMIT`

Not supported: subqueries, `JOIN ... ON` syntax.

## Writing a test

```python
import unittest
import sql_testing_tools.BaseAccess as Ba
import sql_testing_tools.Helper as He

class TestClass(unittest.TestCase):
    Ba.setDBName("dbiu.bayern")   # or a path to your own .db file

    def test_query(self):
        He.setup("sqlfile.sql", "solution.sql")
        for check in (He.checkColumns, He.checkTables, He.checkCondition,
                      He.checkGroup, He.checkOrder):
            res = check()
            if res: self.fail(res)   # German message, e.g. "Der 'WHERE' Teil ... ist nicht korrekt"
```

Each `check...()` compares one part of the query (`SELECT`, `FROM`, `WHERE`, `GROUP BY`, `ORDER BY`), so students learn *which* part is wrong without seeing the solution. `checkEquality()` compares the whole query, `check_keywords(start, ends)` any custom part.

## DBIU databases

[dbiu_databases](https://github.com/ValentinHerrmann/dbiu_databases) packs 19 SQLite databases for `Ba.setDBName("dbiu.<name>")`: 18 from [datenbanken-im-unterricht.de](https://www.dbiu.de/) (Bahn, Bayern, Bundestag, Film und Fernsehen, Kunstsammlung, Ladepunkte, Länderspiele, Lebensmittel, Schulstatistik, Wetterdaten, ...) plus the classic Terra database. Each comes with a schema diagram. They also work without the test library, via `importlib.resources`.

<figure class="half">
  <a href="/sql_testing/schema-bayern.png"><img src="/sql_testing/schema-bayern.png" alt="Schema of the Bayern database" style="border-radius:10px;"></a>
  <a href="/sql_testing/schema-kunstsammlung.png"><img src="/sql_testing/schema-kunstsammlung.png" alt="Schema of the Kunstsammlung database" style="border-radius:10px;"></a>
  <figcaption>Two of the included schemas: <code>dbiu.bayern</code> (left) and <code>dbiu.kunstsammlung</code> (right).</figcaption>
</figure>

Bugs and feature requests: issues in the respective GitHub repository.
