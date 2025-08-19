---
title: "Latex Summary Zoom"
excerpt: "A small Latex library working similar to power points summary zoom."
header:
  image: summaryzoom/banner.png
  teaser: summaryzoom/overview.png
---

### Latex Summary Zoom

A small Latex library working similar to power points summary zoom based on an answer by Steven B. Segletes in this TexExchange thread.

For a defined set of slides, it creates a summary slide with clickable previews to each slide. The summary slide can be used to quickly navigate to any of the slides in the set and offer a quick overview of the content. Preview sizes and gaps are automatically adjusted to fit the page.

It offers options to show the summary at the beginning of a defined set of slides or both before and after the set. Additionally it is possible to show all slides since the last summary zoom in the first line and the slides of the upcoming section in the second line. This is e.g. helpful for multiple seminar sessions or lectures. A summary slide can either define a latex section or work independently of the section structure.

Besides the sample code in the main.tex of this repository, the following code snippet shows how to use the library in a beamer document.

### Demo

The code and demo can be found at Github: [github.com/ValentinHerrmann/Latex_SummaryZoom](https://github.com/ValentinHerrmann/Latex_SummaryZoom)

<iframe src="/summaryzoom/demo.pdf" width="100%" height="600px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="/summaryzoom/demo.pdf">Download PDF</a>.
</iframe>