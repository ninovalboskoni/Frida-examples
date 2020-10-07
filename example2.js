//Only can be used with empty function/ No overload//



setTimeout(function() 
{
Java.perform ( function() 
   {  
      var App = Java.use("classname");
       App.methodname.overload().implementation = function ()
   {    
       return true; 
   }
 }
  )
  },3000)