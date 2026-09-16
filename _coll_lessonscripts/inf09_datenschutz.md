---
title: "Inf 09: Datenschutz"
excerpt: "Teil-Skript für den bayerischen G9-Lehrplan mit Lückentext-Hefteinträgen und Aufgaben."
header:
  image: /inf09_datenschutz/banner.png
  teaser: /inf09_datenschutz/overview.png
---


Das Skript für das Fach Informatik in der 9. Jahrgangsstufe am Gymnasium (G9) in Bayern deckt das [Lehrplan](https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/9/informatik) teilweise ab.

Das Skript besteht aus einem DIN A4 Teil für die Lernenden zum Ausdrucken und einem Präsentations-Teil für die Lehrkraft. Beide Teile sind als PDF-Dateien mit vielen technischen Features umgesetzt. Die Präsentation hierbei immer in Acrobat, Foxit Reader oder Okular im Präsentationsmodus (Vollbild) starten, da sonst die Animationen, eingebetteten Dateien und Links nicht funktionieren.







### PDF Dateien zum Download

<script>
const baseUrl = ''; // Basis-URL für die PDF-Dateien, hier im selben Verzeichnis
const variants = ['', '_mtg', '_derksen'];
const variantNames = ['Standard-Theme', 'MTG', 'Derksen'];
const files = [
  { label: 'Skript Lernende (alle Features, Coverseite)', name: 'print_students-cover' },
  { label: 'Skript Lernende (alle Features)', name: 'print_students' },
  { label: 'Skript Lernende (minimal)', name: 'print_students-minimal' },
  { label: 'Skript Lehrkraft (Lösung, alle Features, Coverseite)', name: 'print_solution-cover' },
  { label: 'Skript Lehrkraft (Lösung, alle Features)', name: 'print_solution' },
  { label: 'Skript Lehrkraft (Lösung, minimal)', name: 'print_solution-minimal' },
  { label: 'Präsentation (alle Features)', name: 'presentation_full', bright: true },
  { label: 'Präsentation (o. Doppelstd.)', name: 'presentation_nosession', bright: true },
  { label: 'Präsentation (o. Timer)', name: 'presentation_notimer', bright: true },
  { label: 'Präsentation (o. Aufräumen)', name: 'presentation_noaufraeumen', bright: true },
  { label: 'Präsentation (minimal)', name: 'presentation_minimal', bright: true },
  { label: 'Präsentation (min. + Doppelstd.)', name: 'presentation_minimal-session', bright: true },
  { label: 'Präsentation (min. + Anhänge)', name: 'presentation_minimal-attachments', bright: true }
];

document.write('<table>');
document.write('<thead><tr><th></th>');
variantNames.forEach(name => document.write('<th>' + name + '</th>'));
document.write('</tr></thead><tbody>');

files.forEach(file => {
  document.write('<tr><td><strong>' + file.label + '</strong></td>');
  variants.forEach((variant, idx) => {
    const url = baseUrl + file.name + variant + '.pdf';
    const linkText = idx === 0 && !file.bright ? file.name + '.pdf' : variantNames[idx];
    document.write('<td>');
    if (file.bright) {
      document.write('<a href="' + url + '">&#9790; Dark</a><br>');
      const brightUrl = baseUrl + file.name + '-bright' + variant + '.pdf';
      document.write('<a href="' + brightUrl + '">&#9728; Bright</a>');
    } else {
      document.write('<a href="' + url + '">' + linkText + '</a>');
    }
    document.write('</td>');
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
<iframe src="/inf09_oop/print_students.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="print_students-cover.pdf">Download PDF</a>.
</iframe>
</details>

<details>
<summary>Für Lehrkraft: Skript mit Dateianhängen, QR-Codes und Lösungen</summary>
<iframe src="print_solution.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="print_solution.pdf">Download PDF</a>.
</iframe>
</details>

<details>
<summary>Präsentation mit allen Features</summary>
<iframe src="presentation_full.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="presentation_full.pdf">Download PDF</a>.
</iframe>
</details>




#### Latex Source-Code
- auf Github: [github.com/FancyTeachingScripts](https://github.com/FancyTeachingScripts/)
- hier bitte auch Änderungswünsche als Issue eintragen



### (Technische) Features
- `Farbliche Kodierung` für Hefteinträge und Aufgaben.
- `Nacheinander eingeblendete Lösungen` in der Präsentation für Lücken und Aufgaben.
- `Arbeitszeit Timer` für Aufgaben (getestet mit BeamerPresenter, Acrobat, Foxit, Okular, pdfpc) zeigt verbleibende Zeit als Ladebalken in Minutenschritten an. Timer startet nachdem auf der Folie 1x weiter geklickt wurde (Leiste am unteren Rand ändert ihre Farbe).
- `Eingebettete Vorlage- und Lösungsdateien` (z.B. Excel, PDF, ...) zum Öffnen per Doppelklick auch während der Präsentation.
- `"Bitte Aufräumen"` Abschlussfolie mit Animation und diskretem Link zu ihr auf jeder Seite (funktioniert in BeamerPresenter nicht)
- `Übersichtfolie am Anfang` jeder Doppelstunde mit `Hyperlink-Thumbnails` der Folien der Vor- und aktuellen Stunde (ähnlich PPT Summary Zoom)
- `QR Codes` zu Hyperlinks (nur im Skript)
- Gesamt-Inhaltsverzeichnis mit Hyperlinks vor jeder Doppelstunde für schnelle Navigation und automatische Doppelstunden Erkennung durch Artemis.
- `Alle Versionen sind PDF Dateien`, die auf jedem Gerät und Betriebssystem funktionieren. Manche Features erzeugen dafür zusätzlich PDF-Seiten, die Präsentationsdateien sind daher manchmal etwas umfangreicher. 



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