---
title: "Blockly2Java & BlueJBlocklyExtension"
excerpt: "A BlueJ extension for translating blocks to java including a library for simple game development."
header:
  image: B2J/banner.png
  teaser: B2J/overview.png
---


# Block-based programming with simultaneous translation to Java



## The core of all version of the app:
A [Blockly](https://developers.google.com/blockly) window with preconfigured toolbox and real-time translation engine into java. Which is then integrated into two version of the app.

<img src="/B2J/Blockly.png" alt="Blockly" style="border-radius:10px; width:75%;" />


## Blockly2Java: [b2j.valentin-herrmann.com](https://b2j.valentin-herrmann.com)

A web-app which uses a slighlty modified version of Martin Pabst's [OnlineIDE](https://github.com/martin-pabst/Online-IDE-new-compiler) together with Blockly to provide a feature-rich, OS-independant, dual-language Online Workspace. 

### Core-Features:
- **Free!** and open-source. Very happy to get contributions, just open a Pull Request on [Github](https://github.com/ValentinHerrmann/Blockly2Java).
- **Multiple classes**
- **Debugger** (with pop-out option)
- **UML class diagram** generation
- **Main method** automatically detected and prepared to execute
- **Markdown files** a displayed in read-only mode and can e.g. contain exercise statements.
- **Blocks, Java or both**: Start coding a class with Blockly and optionally continue with Java or code in either language only.
- **Git integration** with reduced feature-set (Clone, Pull, Commit+Push) for public and private repositories.
- **Toolbox configuration**: Either using the integrated visual editor or *.json files. Defines which blocks or categories are available and comes with template configurations. Stored as .json and can be shipped with tempates via Git.
- **Local import/export** as *.b2j file (internally a *.zip, can be accessed as such after renaming).
- **Client-Side data only**: No data is stored on servers, only in the user's web browser which supports data privacy. For technical security reasons the IP adress which accesses the page is stored.
- In the future the it's planned to support the full [OnlineIDE graphics library](https://www.learnj.de/doku.php?id=api:documentation:grafik:start) also from Blockly (not just from Java-Code).


<img src="/B2J/B2J.png" alt="B2J" style="border-radius:10px; width:90%;" />


## BlueJ Blockly Extension (BBE)

The BlueJ Blockly Extension is an extension for the educational IDE [BlueJ](https://www.bluej.org/) which can be installed on any system which has BlueJ installed. For Windows an msi-Installer is compiled for every Release.

### Core-Features:
- **Free!** and open-source. Very happy to get contributions, just open a Pull Request on [Github](https://github.com/ValentinHerrmann/BlueJBlocklyExtension).
- Block-Code is fully translated to java and has no dependencies on Blockly during compilation and execution. Therefore the full BlueJ feature set for java is available.
- Reduced java set suiting the needs of 9th graders.
- In templates, classes can be exlicitly locked to prohibit opening them with Blockly.
- Is installed with a [Gameboard library](https://github.com/ValentinHerrmann/Gameboard) for easy game creation which comes with an online [documentation](https://gameboard.valentin-herrmann.com) and a [set of graphics](https://gameboard.valentin-herrmann.com/resources/images.html) which can of course be extended by the user. 


BBE is currently not actively maintained and does not support the latest translation features!


<img src="/B2J/BBE.png" alt="BBE" style="border-radius:10px; width:90%;" />



