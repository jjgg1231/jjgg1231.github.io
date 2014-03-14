function changeColor(newColor)  
	{  
		var elem = document.getElementById("container");  
		elem.style.color = newColor;  
		var elem = document.getElementById("slogan");  
		elem.style.color = newColor;  
		var elem = document.getElementById("introduction");  
		elem.style.color = newColor;  

	}  
	
function resizeText(multiplier) 
	{ 
		if (document.getElementById("container").style.fontSize == "") 
		{ 
			document.getElementById("container").style.fontSize = "1.0em"; 
		}	 
		document.getElementById("container").style.fontSize = parseFloat(document.getElementById("container").style.fontSize) + (multiplier * 0.2) + "em"; 
				
	}
			
function resetToDefaultFontSize() 
	{     
		document.getElementById("container").style.fontSize = "1.0em";
	} 	

function changeBcgColor(newColor)  
	{  
		var elem2 = document.getElementById("body");  
		elem2.style.backgroundColor = newColor;  
	}  
	
function msg (form) {
    var name = form.firstname.value;
    alert ("Thank You, " + name + ", for signing up to the Tunes Newsletter!");
}
