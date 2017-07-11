# quran-cli

[![quran-cli](https://nodei.co/npm/quran-cli.png)](https://nodei.co/npm/quran-cli)

## Installation

Just download, go to the folder then do `npm install`
```
npm install -g quran-cli
quran-cli <command>
```
## Examples

Here're the working examples

#### Show chapter/surah
```
quran-cli 112
[112:1] Katakanlah: "Dialah Allah, Yang Maha Esa.
[112:2] Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu.
[112:3] Dia tiada beranak dan tidak pula diperanakkan,
[112:4] dan tidak ada seorangpun yang setara dengan Dia".
```

#### Search for word text
```
quran-cli search kursi
Result of keyword "kursi" (1):                                                                                                                                                              
[2:255] Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya? Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar.                                                                                                                       
```

## Changelog
* 0.0.12: Available only Indonesian text

## config.json (Planned)
Configuration file for quran-cli

## Concept (Planned)
Conceptual how it works
```
Example:
quran-cli 71               Show surah no. 71
quran-cli 2:255            Show surah & ayah 2:255
quran-cli 2:255 -t id      Show surah & ayah 2:255 from Indonesia text
quran-cli search kursi     Show search result of text "surga"
quran-cli help             Show help
quran-cli download id      Download Quran Indonesian text from http://tanzil.net
quran-cli sura             List of downloaded Quranic text files
quran-cli config           Show configuration
```

(c) July 2017 by Stardigits (aka Ciwidey Mengaji)
