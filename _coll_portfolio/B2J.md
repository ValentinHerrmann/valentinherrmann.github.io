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

### Currently supported Language Features using Blockly (constantly growing)

(Coding directly in Java supports all language features that are available in the OnlineIDE)

<details>
<summary>Object-Oriented Programming</summary>

<ul>
  <li>Classes &amp; Constructors: Supported — one class per .java-file, instantiation in the same and other classes (<code>new</code>).</li>
  <li>Inheritance &amp; <code>super()</code>: Partly Supported — single inheritance, overwriting methods and <code>super(...)</code> as call inside constructor. No <code>super.method(...)</code> calls, no <code>instanceof</code>.</li>
  <li>Instance vs. Static: Supported — instance/static methods and fields.</li>
  <li>Methods: Supported — methods with/without returns and parameters.</li>
  <li>Method/Constructor Overloading: NOT supported</li>
</ul>

</details>

<details>
<summary>Variables &amp; Scope</summary>

<ul>
  <li>Local variables: Supported — first assignment can emit typed declaration; subsequent assignments reassigned.</li>
  <li>Instance (object) fields: Supported.</li>
  <li>Static (class) fields: Supported.</li>
  <li>Method parameters: Supported (read-only inside bodies).</li>
</ul>

</details>

<details>
<summary>Types &amp; Type System</summary>

<ul>
  <li>Primitive types: Supported — <code>int</code>, <code>double</code>, <code>boolean</code>, and <code>String</code> (string-like).</li>
  <li>Reference types: Supported — <code>Object</code>, user-defined classes.</li>
  <li>Type inference: Best-effort from block connections; cross-class call-site hints improve inference.</li>
  <li>Fallback: <code>Object</code> used when type unknown; LCA used for mixed-class cases.</li>
  <li>Explicit typing: Supported — explicit type prefixes (e.g., "int count") override inference.</li>
</ul>

</details>

<details>
<summary>Control Flow</summary>

<ul>
  <li>Conditionals: Supported — <code>if</code> / <code>else if</code> / <code>else</code></li>
  <li>Loops: Partly Supported — <code>while</code>, repeat N (count), <code>for</code> (range), NO for-each</li>
  <li>Flow control: Supported — <code>break</code>, <code>continue</code>.</li>
</ul>

</details>

<details>
<summary>Methods &amp; Calls</summary>

<ul>
  <li>Method declaration: Supported — define/call methods with/without returns and arbitrary number of parameters</li>
  <li>Method calls: Supported — call own methods or such of specific objects and static calls for methods of any class in the project.</li>
</ul>

</details>

<details>
<summary>Collections &amp; Arrays</summary>

<ul>
  <li>NOT supported (but planned in near future)</li>
</ul>

</details>

<details>
<summary>Strings &amp; Text</summary>

<ul>
  <li>Literals &amp; concatenation: Supported.</li>
  <li>Common ops: Supported — length, substring, charAt, indexOf/lastIndexOf, case, trim, replace, reverse, count.</li>
  <li>I/O for demos: Partly supported: Console print; NO input (but planned in near future)</li>
</ul>

</details>

<details>
<summary>Math &amp; Random</summary>

<ul>
  <li>Arithmetic &amp; math functions: Supported — + - * /, pow, sqrt, trig, logs, rounding.</li>
  <li>Random &amp; helpers: Supported — random int/float, more planned in near future</li>
</ul>

</details>

<details>
<summary>Colours &amp; Utilities</summary>

<ul>
  <li>NOT supported (but planned in near future)</li>
</ul>

</details>

<details>
<summary>Standard Library</summary>

<ul>
  <li>Uses common Java classes suitable for student exercises: <code>Math</code>, <code>StringBuilder</code>, <code>Random</code>, more is planned</li>
</ul>

</details>

<details>
<summary>Limitations / Pedagogical Notes</summary>

<ul>
  <li>Exceptions / try-catch: Not provided — not suitable for exception-handling lessons.</li>
  <li>File I/O &amp; filesystem: Not available.</li>
  <li>Concurrency / threads: Not supported.</li>
  <li>Advanced generics: No supported; generics teaching is constrained.</li>
  <li>Deep Java APIs (graphics, networking, advanced collections): Not exposed by default.</li>
  <li>Generated helpers: Some operations use helper methods (e.g., median, prime), which differ from minimal hand-written implementations.</li>
</ul>

</details>

<details>
<summary>Toolbox</summary>

<ul>
  <li>The toolbox can be configured to reduce supported features to lower the floors of the App.</li>
  <li> The toolbox config is part of the project and can be distributed via Git or local import/export.</li>
</ul>

</details>

<details>
<summary>Quick teacher decision guide</summary>

<ul>
  <li>Basic OOP, control flow, collections, strings, and typing: Yes.</li>
  <li>Exception handling, file I/O, concurrency, advanced generics, or deep API topics: No / Limited.</li>
</ul>

</details>

<img src="/B2J/Blockly.png" alt="Blockly" style="border-radius:10px;" />


## Blockly2Java: [blockly2java.de](https://blockly2java.de)

A web app which uses a slightly modified version of Martin Pabst's [OnlineIDE](https://github.com/martin-pabst/Online-IDE-new-compiler) together with Blockly to provide a feature-rich, OS-independent, dual-language online workspace.

### Exercises (in German)
Exercise templates can be found here: [github.com/Blockly2Java](https://github.com/Blockly2Java). Feel free to contribute!

Each exercise consists of:
- a B2J-template for the students to clone (the Github URL can be used to clone by everyone, no login required)
- a B2J-solution for teachers to use as a reference and to generate test cases from (not public, only for teachers)
- a README.md file with the exercise statement, which is displayed in read-only mode in the app
- a set of test cases for use with autograders like [Artemis](https://artemis.tum.de/)

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
- **Basic graphics**: A simple graphics library is integrated, which can be used from both Java and Blockly. It supports drawing and modifying and moving shapes. Images, Keyboard and Mouse input are planned for the near future.
- A turtle-like graphics template is included.
- In the future, it's planned to support the full [OnlineIDE graphics library](https://www.learnj.de/doku.php?id=api:documentation:grafik:start) also from Blockly (not just from Java code).

- **Client-side data only**: No user data is stored on servers; data remains in the user's browser to support privacy. For technical security reasons, the visitor's IP address is logged.
  
#### Exercise Collection

A constantly growing collection of exercises including test cases is available on [GitHub](https://github.com/Blockly2Java).


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



