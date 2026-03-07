---
title: "Blockly2Java"
excerpt: "Dual-language coding with Blockly and Java as an OS-independent web app or BlueJ extension"
header:
  image: B2J/banner.png
  teaser: B2J/overview.png
---


# Block-based programming with simultaneous translation to Java



## The core of all versions of the app
A [Blockly](https://developers.google.com/blockly) window with a preconfigured toolbox and a real-time translation engine into Java, which is then integrated into two versions of the app.

### Currently supported Language Features using Blockly (constantly grwoing)
(Coding directly in Java supports all language features that are available in the OnlineIDE)

**Object-Oriented Programming**
- Classes & Constructors: Supported — one class per .java-file, instantiation in the same and other classes (`new`).
- Inheritance & `super()`: Partly Supported — single inheritance, overwriting methods and `super(...)` as call inside constructor. No `super.method(...)` calls, no `instanceof`.
- Instance vs. Static: Supported — instance/static methods and fields.
- Methods: Supported — methods with/without returns and parameters.
- Method/Constructor Overloading: NOT supported

**Variables & Scope**
- Local variables: Supported — first assignment can emit typed declaration; subsequent assignments reassigned.
- Instance (object) fields: Supported.
- Static (class) fields: Supported.
- Method parameters: Supported (read-only inside bodies).

**Types & Type System**
- Primitive types: Supported — `int`, `double`, `boolean`, and `String` (string-like).
- Reference types: Supported — `Object`, user-defined classes.
- Type inference: Best-effort from block connections; cross-class call-site hints improve inference.
- Fallback: `Object` used when type unknown; LCA used for mixed-class cases.
- Explicit typing: Supported — explicit type prefixes (e.g., "int count") override inference.

**Control Flow**
- Conditionals: Supported — `if` / `else if` / `else`
- Loops: Partly Supported — `while`, repeat N (count), `for` (range), NO for-each
- Flow control: Supported — `break`, `continue`.

**Methods & Calls**
- Method declaration: Supported — define/call methods with/without returns and arbitrary number of parameters
- Method calls: Supported — call own methods or such of specific objects and static calls for methods of any class in the project.

**Collections & Arrays**
- NOT supported (but planned in near future)

**Strings & Text**
- Literals & concatenation: Supported.
- Common ops: Supported — length, substring, charAt, indexOf/lastIndexOf, case, trim, replace, reverse, count.
- I/O for demos: Partly supported: Console print; NO input (but planned in near future)

**Math & Random**
- Arithmetic & math functions: Supported — + - * /, pow, sqrt, trig, logs, rounding.
- Random & helpers: Supported — random int/float, more planned in near future

**Colours & Utilities**
- NOT supported (but planned in near future)

**Standard Library**
- Uses common Java classes suitable for student exercises: `Math`, `StringBuilder`, `Random`, more is planned

**Limitations / Pedagogical Notes**
- Exceptions / try-catch: Not provided — not suitable for exception-handling lessons.
- File I/O & filesystem: Not available.
- Concurrency / threads: Not supported.
- Advanced generics: No supported; generics teaching is constrained.
- Deep Java APIs (graphics, networking, advanced collections): Not exposed by default.
- Generated helpers: Some operations use helper methods (e.g., median, prime), which differ from minimal hand-written implementations.

**Toolbox**
- The toolbox can be configured to reduce supported features to lower the floors of the App.

**Quick teacher decision guide**
- Basic OOP, control flow, collections, strings, and typing: Yes.
- Exception handling, file I/O, concurrency, advanced generics, or deep API topics: No / Limited.



<img src="/B2J/Blockly.png" alt="Blockly" style="border-radius:10px;" />


## Blockly2Java: [b2j.valentin-herrmann.com](https://b2j.valentin-herrmann.com)

A web app which uses a slightly modified version of Martin Pabst's [OnlineIDE](https://github.com/martin-pabst/Online-IDE-new-compiler) together with Blockly to provide a feature-rich, OS-independent, dual-language online workspace.

### Core features
- **Free and open-source.** Contributions welcome — open a pull request on [GitHub](https://github.com/ValentinHerrmann/Blockly2Java).
- **Multiple classes**
- **Debugger** (with pop-out option)
- **UML class diagram generation**
- **Main method**: automatically detected and prepared for execution
- **Markdown files** are displayed in read-only mode and can, for example, contain exercise statements.
- **Blocks, Java, or both**: Start coding a class with Blockly and optionally continue with Java, or work exclusively in either language.
- **Git integration** with a reduced feature set (clone, pull, commit + push) for public and private repositories.
- **Toolbox configuration**: Use the integrated visual editor or JSON files to define available blocks and categories. Comes with template configurations stored as .json and can be shipped via Git.
- **Local import/export** as *.b2j files (internally a *.zip; rename to access contents).
- **Client-side data only**: No user data is stored on servers; data remains in the user's browser to support privacy. For technical security reasons, the visitor's IP address is logged.
- In the future, it's planned to support the full [OnlineIDE graphics library](https://www.learnj.de/doku.php?id=api:documentation:grafik:start) also from Blockly (not just from Java code).


<img src="/B2J/B2J.png" alt="B2J" style="border-radius:10px;" />


## BlueJ Blockly Extension (BBE)

The BlueJ Blockly Extension is an add-on for the educational IDE [BlueJ](https://www.bluej.org/) and can be installed on any system with BlueJ. For Windows, an MSI installer is compiled for each release.


### Core features
- **Free and open-source.** Contributions welcome — open a pull request on [GitHub](https://github.com/ValentinHerrmann/BlueJBlocklyExtension).
- **Block code** is fully translated to Java and has no runtime dependency on Blockly; the full BlueJ feature set for Java remains available.
- **Reduced Java subset** suited to the needs of 9th graders.
- In templates, classes can be explicitly locked to prevent opening them with Blockly.
- The extension is installed with a [Gameboard library](https://github.com/ValentinHerrmann/Gameboard) for easy game creation, with online [documentation](https://gameboard.valentin-herrmann.com) and a [set of graphics](https://gameboard.valentin-herrmann.com/resources/images.html) that can be extended by users.

BBE is currently not actively maintained and does not support the latest translation features.


<img src="/B2J/BBE.png" alt="BBE" style="border-radius:10px;" />



