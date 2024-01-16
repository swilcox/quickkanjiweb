# Quick Kanji Web
A simple Kanji Web lookup site

## Components
This is a zero build setup with static .html and javascript files.

* [KanjiAPI](https://github.com/onlyskin/kanjiapi.dev) for access to the Kanji definitions (rather than accessing the Kanji dictionary XML)
* [Sakura](https://github.com/oxalorg/sakura) for the css style
* [Petite Vue](https://github.com/vuejs/petite-vue) for the Vue / JS components
  * a future version should probably pin the CDN import to a specific version.
* self-hosted pre-generated svg's via [kanji_colorize](https://github.com/cayennes/kanji-colorize) for the svg's
  * see the embedded licensing information in the svg's for more detail.
  * also note: the program removes the obnoxiously long XML comment to provide just the svg detail since it's assumed it's going to be used for embedding in a Anki deck or some other personal purpose.

## TO-DO Items

* update web page display with attributions for all components used (e.g. KanjiAPI and the svg source information and licensing).
* cleanup the display of the fields and values.
* fix the hardcoded leading zero on svg filename computation which will break for some kanji values (need to use fixed length buffering).
