/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// get release notes and vendor URL from prefs
var formatter = Components.classes["@mozilla.org/toolkit/URLFormatterService;1"]
                          .getService(Components.interfaces.nsIURLFormatter);
var releaseNotesURL = formatter.formatURLPref("app.releaseNotesURL");
if (releaseNotesURL != "about:blank") {
  var relnotes = document.getElementById("releaseNotesURL");
  relnotes.setAttribute("href", releaseNotesURL);
  relnotes.parentNode.removeAttribute("hidden");
}

var vendorURL = formatter.formatURLPref("app.vendorURL");
if (vendorURL != "about:blank") {
  var vendor = document.getElementById("vendorURL");
  vendor.setAttribute("href", vendorURL);
}

// insert the version of the XUL application (!= XULRunner platform version)
var versionNum = Components.classes["@mozilla.org/xre/app-info;1"]
                           .getService(Components.interfaces.nsIXULAppInfo)
                           .version;
var version = document.getElementById("version");

if (versionNum.substr(0,3) == "45.") {
  // Extract the major and minor version numbers
  var majorMinor = versionNum.substr(3).split('.');
  var major = parseInt(majorMinor[0]) - 40; // Major version (e.g., 42)
  var minor = parseInt(majorMinor[1]); // Minor version (e.g., 0 or 1)

  version.textContent = major + "." + minor + " (" + versionNum + ")";
} else {
  version.textContent += " " + versionNum;
}

// append user agent
var ua = navigator.userAgent;
if (ua) {
  document.getElementById("buildID").textContent += " " + ua;
}
