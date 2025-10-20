---
title: "Fancy Teaching Scripts - Demo"
excerpt: "Latex Projekt zur Erzeugung von Unterrichtsskripten und Präsentationen aus dem gleichen Sourcecode mit vielen technischen Features."
header:
  image: /demo/banner.png
  teaser: /demo/overview.png
---

Das Skript besteht aus einem DIN A4 Teil für die Lernenden zum Ausdrucken und einem Präsentations-Teil für die Lehrkraft. Beide Teile sind als PDF-Dateien mit vielen technischen Features umgesetzt. Die Präsentation hierbei immer in Acrobat, Foxit Reader oder Okular im Präsentationsmodus (Vollbild) starten, da sonst die Animationen, eingebetteten Dateien und Links nicht funktionieren.

Dieses Projekt zeigt und erklärt die technischen Features, die in den Unterrichtsskripten verwendet werden. Es ist kein vollständiges Unterrichtsskript, sondern eine Demo mit Beispielinhalten. Der SourceCode ist auf Github verfügbar und bestmöglich kommentiert, sodass das Repository als Vorlage für eigene Skripte verwendet werden kann.


### PDF Dateien zum Download

<script>
const baseUrl = '/demo/';
const variants = [''];
const variantNames = ['Standard-Theme'];
const files = [
  { label: 'Skript Lernende (alle Features, Coverseite)', name: 'print_students-cover' },
  { label: 'Skript Lernende (alle Features)', name: 'print_students' },
  { label: 'Skript Lernende (minimal)', name: 'print_students-minimal' },
  { label: 'Skript Lehrkraft (Lösung, alle Features, Coverseite)', name: 'print_solution-cover' },
  { label: 'Skript Lehrkraft (Lösung, alle Features)', name: 'print_solution' },
  { label: 'Skript Lehrkraft (Lösung, minimal)', name: 'print_solution-minimal' },
  { label: 'Präsentation (alle Features)', name: 'presentation_full' },
  { label: 'Präsentation (o. Doppelstd.)', name: 'presentation_nosession' },
  { label: 'Präsentation (o. Timer)', name: 'presentation_notimer' },
  { label: 'Präsentation (o. Aufräumen)', name: 'presentation_noaufraeumen' },
  { label: 'Präsentation (minimal)', name: 'presentation_minimal' },
  { label: 'Präsentation (min. + Doppelstd.)', name: 'presentation_minimal-session' },
  { label: 'Präsentation (min. + Anhänge)', name: 'presentation_minimal-attachments' }
];

document.write('<table>');
document.write('<thead><tr><th></th>');
variantNames.forEach(name => document.write('<th>' + name + '</th>'));
document.write('</tr></thead><tbody>');

files.forEach(file => {
  document.write('<tr><td><strong>' + file.label + '</strong></td>');
  variants.forEach((variant, idx) => {
    const url = baseUrl + file.name + variant + '.pdf';
    const linkText = idx === 0 ? file.name + '.pdf' : variantNames[idx];
    document.write('<td><a href="' + url + '">' + linkText + '</a></td>');
  });
  document.write('</tr>');
});

document.write('</tbody></table>');
</script>

<noscript>
<em>Bitte aktivieren Sie JavaScript, um die Download-Tabelle anzuzeigen.</em>
</noscript>


### Beispiel-PDFs

<details>
<summary>Für Lernende: Skript mit Dateianhängen, QR-Codes und Coverseite</summary>
<iframe src="/demo/print_students.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/demo/print_students-cover.pdf">Download PDF</a>.
</iframe>
</details>

<details>
<summary>Für Lehrkraft: Skript mit Dateianhängen, QR-Codes und Lösungen</summary>
<iframe src="/demo/print_solution.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/demo/print_solution.pdf">Download PDF</a>.
</iframe>
</details>

<details>
<summary>Präsentation mit allen Features</summary>
<iframe src="/demo/presentation_full.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/demo/presentation_full.pdf">Download PDF</a>.
</iframe>
</details>




#### Latex Source-Code
auf Github: [github.com/FancyTeachingScripts/FancyScript](https://github.com/FancyTeachingScripts/FancyScript)






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



### Impressionen aus dem Skript Tabellenkalkulation 09

![alt text](/inf09_tabkalk/presentation_toc.png)

![alt text](/inf09_tabkalk/aufgabe_skript.png)

![alt text](/inf09_tabkalk/summaryzoom.png)

![alt text](/inf09_tabkalk/hefteintrag.png)

![alt text](/inf09_tabkalk/hefteintrag.gif)

![alt text](/inf09_tabkalk/aufgabe.gif)

![alt text](/inf09_tabkalk/aufgabe.png)

![alt text](/inf09_tabkalk/attachments_skript.png)
![alt text](/inf09_tabkalk/attach_pres.png)

![alt text](/inf09_tabkalk/aufraeumen.gif)