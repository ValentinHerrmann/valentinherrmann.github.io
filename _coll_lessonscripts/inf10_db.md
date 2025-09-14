---
title: "Inf 10: Datenbanken"
excerpt: "Komplett-Skript für den bayerischen G9-Lehrplan mit Lückentext-Hefteinträgen und Aufgaben, ausgerichtet auf Artemis."
header:
  image: /inf10_db/banner.png
  teaser: /inf10_db/overview.png
---


Das Skript für das Fach Informatik in der 10. Jahrgangsstufe am Gymnasium (G9) in Bayern deckt das [Lehrplan](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/9/informatik)-Thema Datenbank **(noch nicht!)** komplett ab. Das Skript ist auf die Nutzung mit der Lernplattform [Artemis](https://artemisapp.github.io/) ausgelegt. Alle Aufgaben sind so gestaltet, dass sie auch ohne Artemis bearbeitet werden können.

Das Skript besteht aus einem DIN A4 Teil für die Lernenden zum Ausdrucken und einem Präsentations-Teil für die Lehrkraft. Beide Teile sind als PDF-Dateien mit vielen technischen Features umgesetzt.

**Bisher gibt es nur Teil 1. Ein zweiter Teil mit den fehlenden Themen m:n-Beziehungen und Anomalien (etc.) ist in Arbeit.**







### PDF Dateien zum Download
#### Skript zum Ausdrucken bzw. Ausfüllen am Tablet
<details>
<summary>Für Lernende: mit Dateianhängen und QR-Codes</summary>
<iframe src="/inf10_db/print_students.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/print_students.pdf">Download PDF</a>.
</iframe>
</details>

<!-- <details>
<summary>Für Lernende: Minimal ohne technische Spezialfeatures</summary>
<iframe src="/inf10_db/print_students-minimal.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/print_students-minimal.pdf">Download PDF</a>.
</iframe>
</details> -->

<details>
<summary>Für Lehrkraft: mit Dateianhängen, QR-Codes und Lösungen</summary>
<iframe src="/inf10_db/print_solution.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/print_solution.pdf">Download PDF</a>.
</iframe>
</details>

<!-- <details>
<summary>Für Lehrkraft: Mit Lösung, ansonsten minimal ohne technische Spezialfeatures</summary>
<iframe src="/inf10_db/print_solution-minimal.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/print_solution-minimal.pdf">Download PDF</a>.
</iframe>
</details> -->







#### Präsentation für die Lehrkraft

Präsentation immer in Acrobat oder Foxit Reader im Präsentationsmodus (Vollbild) starten, da sonst die Animationen, eingebetteten Dateien und Links nicht funktionieren.

<details>
<summary>mit allen Features</summary>
<iframe src="/inf10_db/presentation_all.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/presentation_all.pdf">Download PDF</a>.
</iframe>
</details>

<!-- <details>
<summary>ohne Doppelstundeneinteilung</summary>
<iframe src="/inf10_db/presentation_nosession.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/presentation_nosession.pdf">Download PDF</a>.
</iframe>
</details> -->

<!-- <details>
<summary>ohne Arbeitszeiten-Timer</summary>
<iframe src="/inf10_db/presentation_notimer.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/presentation_notimer.pdf">Download PDF</a>.
</iframe>
</details>

<details>
<summary>ohne animierte "Bitte aufräumen" Folie</summary>
<iframe src="/inf10_db/presentation_noaufraeumen.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/presentation_noaufraeumen.pdf">Download PDF</a>.
</iframe>
</details>



<details>
<summary>minimal = ohne technische Spezialfeatures</summary>
<iframe src="/inf10_db/presentation_minimal.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/presentation_minimal.pdf">Download PDF</a>.
</iframe>
</details>


-->
<details>
<summary>minimal, mit Doppelstundeneinteilung</summary>
<iframe src="/inf10_db/presentation_minimal-session.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/presentation_minimal-session.pdf">Download PDF</a>.
</iframe>
</details>


<!--
<details>
<summary>minimal mit Dateianhängen</summary>
<iframe src="/inf10_db/presentation_minimal-attachments.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/inf10_db/presentation_minimal-attachments.pdf">Download PDF</a>.
</iframe>
</details> -->













#### Latex Source-Code
<a href="/inf10_db/inf10_db_Lualatex.zip">Download Latex Source Code</a>.






### (Technische) Features
- Farbliche Kodierung für Hefteinträge und Aufgaben.
- In der Präsentation in ihrer Reihenfolge nacheinander auftauchende Lösungen für Lücken und Aufgaben.
- Arbeitszeit Timer für Aufgaben (nur Adobe Acrobat und Foxit Readers) zeigt verbleibende Zeit in Minutenschritten an. Timer startet nachdem auf der Folie 1x weiter geklickt wurde (Leiste am unteren Rand ändert ihre Farbe).
- Ins PDF eingebettete Vorlage- und Lösungsdateien (z.B. Excel, PDF, ...) zum Öffnen per Doppelklick auch während der Präsentation.
- "Bitte Aufräumen" Abschlussfolie mit Animation und diskretem Link zu ihr auf jeder Seite
- Übersichtfolie am Anfang jeder Doppelstunde mit Hyperlink-Thumbnails der Folien der Vor- und aktuellen Stunde (ähnlich PPT Summary Zoom)
- QR Codes zu Hyperlinks (nur im Skript)
- Gesamt-Inhaltsverzeichnis mit Hyperlinks vor jeder Doppelstunde für schnelle Navigation und automatische Doppelstunden Erkennung durch Artemis.
- Alle Versionen sind PDF Dateien, die auf jedem Gerät und Betriebssystem funktionieren. Manche Features erzeugen dafür zusätzlich PDF-Seiten, die Präsentationsdateien sind daher manchmal etwas umfangreicher. 



### Impressionen

![alt text](/inf10_db/presentation_toc.png)

![alt text](/inf10_db/aufgabe_skript.png)

![alt text](/inf10_db/summaryzoom.png)

![alt text](/inf10_db/hefteintrag.png)

![alt text](/inf10_db/hefteintrag.gif)

![alt text](/inf10_db/aufgabe.gif)

![alt text](/inf10_db/aufgabe.png)

![alt text](/inf10_db/attachments_skript.png)
![alt text](/inf10_db/attach_pres.png)

![alt text](/inf10_db/aufraeumen.gif)