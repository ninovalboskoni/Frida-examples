//overload needed//


setTimeout(function() 
{
   Java.perform ( function() 
   {  
      var App = Java.use("classname");
       App["Methodname"].overload('boolean').implementation = function (boool)
	  {    
	      return true; 
	  }
	}
  )
},3000)