#!/bin/csh -f

set root=https://hg-edge.mozilla.org/releases/mozilla-esr140/raw-file/558705980ca9db16de0564b5a6031b5d6e0a7efe/intl/icu/source/data/misc

set verbose
cd intl/icu/source/data/misc || exit

curl -L ${root}/metaZones.txt > metaZones.txt
curl -L ${root}/timezoneTypes.txt > timezoneTypes.txt
curl -L ${root}/windowsZones.txt > windowsZones.txt
curl -L ${root}/zoneinfo64.txt > zoneinfo64.txt


