#!/bin/csh -f

set root=https://hg-edge.mozilla.org/releases/mozilla-esr140/raw-file/7df86525c2c876c7c92320e49c3e0771f7a605c0/intl/icu/source/data/misc

set verbose
cd intl/icu/source/data/misc || exit

curl -L ${root}/metaZones.txt > metaZones.txt
curl -L ${root}/timezoneTypes.txt > timezoneTypes.txt
curl -L ${root}/windowsZones.txt > windowsZones.txt
curl -L ${root}/zoneinfo64.txt > zoneinfo64.txt


