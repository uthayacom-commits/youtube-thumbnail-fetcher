# YouTube Thumbnail Fetcher

A zero-dependency JavaScript utility to parse YouTube URLs and fetch high-resolution thumbnails (1080p, 720p, 480p, 360p) for regular videos, YouTube Shorts, and live streams.

> 🌐 **Need a no-code web tool?** Use the free online version at [ThumbHD - YouTube Thumbnail Downloader](https://thumbhd.com).

---

## Features

- **Zero dependencies:** Ultra-lightweight and fast.
- **Full coverage:** Handles standard YouTube URLs, `youtu.be`, Shorts (`/shorts/`), Live streams (`/live/`), and embedded links.
- **All resolutions:** Returns direct CDN URLs for `maxresdefault` (1280x720), `sddefault` (640x480), `hqdefault` (480x360), and lower sizes.

---

## Installation

```bash
npm install youtube-thumbnail-fetcher