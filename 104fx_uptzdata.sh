#!/bin/csh -f

set root=https://hg-edge.mozilla.org/releases/mozilla-esr140/raw-file/c2cc55e4c6ab5f0b8d99ec3e60fdf742c4d8ff65/intl/icu/source/data/misc

set verbose
cd intl/icu/source/data/misc || exit

curl -L ${root}/metaZones.txt > metaZones.txt
curl -L ${root}/timezoneTypes.txt > timezoneTypes.txt
curl -L ${root}/windowsZones.txt > windowsZones.txt
curl -L ${root}/zoneinfo64.txt > zoneinfo64.txt


