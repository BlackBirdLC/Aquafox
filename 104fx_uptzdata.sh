#!/bin/csh -f

set root=https://hg-edge.mozilla.org/releases/mozilla-esr140/raw-file/21285e5fdf030ee5df4e371b921ba4d985477aff/intl/icu/source/data/misc

set verbose
cd intl/icu/source/data/misc || exit

curl -L ${root}/metaZones.txt > metaZones.txt
curl -L ${root}/timezoneTypes.txt > timezoneTypes.txt
curl -L ${root}/windowsZones.txt > windowsZones.txt
curl -L ${root}/zoneinfo64.txt > zoneinfo64.txt


