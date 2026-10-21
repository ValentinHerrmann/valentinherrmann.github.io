---
title: "Doubletake UI"
excerpt: "AirPlay screen mirroring from Linux to an Apple TV, with a simple desktop app"
header:
  image: doubletake-ui/banner.jpg
  teaser: doubletake-ui/overview.jpg
---

# Mirror a Linux desktop to an Apple TV

Many classrooms have an Apple TV at the projector, but no easy way to cast from a Linux laptop. Doubletake streams the desktop, or a single window, to any AirPlay receiver.

**Code at Github:** [ValentinHerrmann/doubletake-ui](https://github.com/ValentinHerrmann/doubletake-ui)

## A fork

This is a fork of [omarroth/doubletake](https://github.com/omarroth/doubletake) by Omar Roth. The AirPlay streaming itself is his work. My fork adds a graphical front end, so you do not need the command line.

### My contribution

<img src="/doubletake-ui/screenshot.png" alt="Doubletake desktop app" class="align-right" style="width:260px; border-radius:10px;" />

- **Desktop app** `doubletake-ui` (GTK 4): lists the AirPlay receivers on the network, asks for the PIN, starts and stops mirroring with one click.
- **System tray** and **start on login**. Closing the window keeps the cast running.
- **Capture source choice:** Screen, Window or Ask, in the app and as `-source any|monitor|window` on the command line.
- **One-line install, update and uninstall** from the fork's releases (no root needed).

<div style="clear:both;"></div>

## Install

```sh
curl -fsSL https://raw.githubusercontent.com/ValentinHerrmann/doubletake-ui/main/scripts/install.sh | sh
```

<small style="opacity:0.75;">Requires (not installed by the script): GStreamer 1.0 with the base, good, bad, ugly and libav plugins, PulseAudio utilities (<code>pactl</code>), PipeWire and xdg-desktop-portal (Wayland) or X11, and GTK 4.14 or newer.<br>
Arch: <code>sudo pacman -S gstreamer gst-plugins-base gst-plugins-good gst-plugins-bad gst-plugins-ugly gst-libav libpulse gtk4</code><br>
Ubuntu/Debian: <code>sudo apt install gstreamer1.0-plugins-base gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gstreamer1.0-libav pulseaudio-utils libgtk-4-1</code></small>
