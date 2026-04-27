#!/bin/csh -f

set root=https://hg-edge.mozilla.org/releases/mozilla-esr140/raw-file/a1c8c4081ea0e227dbde64c95ec6942fa71edb28/intl/icu/source/data/misc

set verbose
cd intl/icu/source/data/misc || exit

curl -L ${root}/metaZones.txt > metaZones.txt
curl -L ${root}/timezoneTypes.txt > timezoneTypes.txt
curl -L ${root}/windowsZones.txt > windowsZones.txt
curl -L ${root}/zoneinfo64.txt > zoneinfo64.txt


