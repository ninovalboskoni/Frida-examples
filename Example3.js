// Same as example2.js but with more lines//
//This script can only be used if overload is empty//

setTimeout(function() 
{
 java.perform(function()
 {
 var clazz = ("class.name");
 var App = Java.use(clazz);
 App.methodname.overload().implementation = function()
 {
 return true;
 }
 }
 )
 },3000)