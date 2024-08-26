//
//  iWeb - WidgetCommon.js
//  Copyright (c) 2007 Apple Inc. All rights reserved.
//

var widgets=[];var identifiersToStringLocalizations=[];function Widget(instanceID,widgetPath,sharedPath,sitePath,preferences,runningInApp)
{if(instanceID)
{this.instanceID=instanceID;this.widgetPath=widgetPath;this.sharedPath=sharedPath;this.sitePath=sitePath;this.preferences=preferences;this.runningInApp=(runningInApp===undefined)?false:runningInApp;this.onloadReceived=false;if(this.preferences&&this.runningInApp==true)
{this.preferences.widget=this;setTransparentGifURL(this.sharedPath.stringByAppendingPathComponent("None.gif"));}
this.div().widget=this;window[instanceID]=this;widgets.push(this);widgets[instanceID]=this;if(!this.constructor.instances)
{this.constructor.instances=new Array();}
this.constructor.instances.push(this);}}
Widget.prototype.div=function()
{var divID=this.instanceID;if(arguments.length==1)
{divID=this.instanceID+"-"+arguments[0];}
return $(divID);}
Widget.prototype.onload=function()
{this.onloadReceived=true;}
Widget.prototype.onunload=function()
{}
Widget.prototype.didBecomeSelected=function()
{}
Widget.prototype.didBecomeDeselected=function()
{}
Widget.prototype.didBeginEditing=function()
{}
Widget.prototype.didEndEditing=function()
{}
Widget.prototype.setNeedsDisplay=function()
{}
Widget.prototype.preferenceForKey=function(key)
{var value;if(this.preferences)
value=this.preferences[key];return value;}
Widget.prototype.initializeDefaultPreferences=function(prefs)
{var self=this;Object.keys(prefs).forEach(function(pref)
{if(self.preferenceForKey(pref)===undefined)
{self.setPreferenceForKey(prefs[pref],pref);}});}
Widget.prototype.setPreferenceForKey=function(preference,key,registerUndo)
{if(this.runningInApp)
{if(registerUndo===undefined)
registerUndo=true;if((registerUndo==false)&&this.preferences.disableUndoRegistration)
this.preferences.disableUndoRegistration();this.preferences[key]=preference;if((registerUndo==false)&&this.preferences.enableUndoRegistration)
this.preferences.enableUndoRegistration();}
else
{this.preferences[key]=preference;this.changedPreferenceForKey(key);}}
Widget.prototype.changedPreferenceForKey=function(key)
{}
Widget.prototype.postNotificationWithNameAndUserInfo=function(name,userInfo)
{if(window.NotificationCenter!==undefined)
{NotificationCenter.postNotification(new IWNotification(name,null,userInfo));}}
Widget.prototype.sizeWillChange=function()
{}
Widget.prototype.sizeDidChange=function()
{}
Widget.prototype.widgetWidth=function()
{var enclosingDiv=this.div();if(enclosingDiv)
return enclosingDiv.offsetWidth;else
return null;}
Widget.prototype.widgetHeight=function()
{var enclosingDiv=this.div();if(enclosingDiv)
return enclosingDiv.offsetHeight;else
return null;}
Widget.prototype.getInstanceId=function(id)
{var fullId=this.instanceID+"-"+id;if(arguments.length==2)
{fullId+=("$"+arguments[1]);}
return fullId;}
Widget.prototype.getElementById=function(id)
{var fullId=this.getInstanceId.apply(this,arguments);return $(fullId);}
Widget.prototype.localizedString=function(string)
{return LocalizedString(this.widgetIdentifier,string);}
Widget.onload=function()
{for(var i=0;i<widgets.length;i++)
{widgets[i].onload();}}
Widget.onunload=function()
{for(var i=0;i<widgets.length;i++)
{widgets[i].onunload();}}
function RegisterWidgetStrings(identifier,strings)
{identifiersToStringLocalizations[identifier]=strings;}
function LocalizedString(identifier,string)
{var localized=undefined;var localizations=identifiersToStringLocalizations[identifier];if(localizations===undefined)
{iWLog("warning: no localizations for widget "+identifier+", (key:"+string+")");}
else
{localized=localizations[string];}
if(localized===undefined)
{iWLog("warning: couldn't find a localization for '"+string+"' for widget "+identifier);localized=string;}
return localized;}
function WriteLocalizedString(identifier,string)
{document.write(LocalizedString(identifier,string));}
