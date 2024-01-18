//your code here
document.getElementById("swap").addEventListener('click',()=>{
	swapTheme();
})
function swapTheme(){
	if(document.getElementById("app").style.backgroundColor == "black"){
		document.getElementById("app").style.backgroundColor = "white"
	}else if(document.getElementById("app").style.backgroundColor = "white"){
		document.getElementById("app").style.backgroundColor = "black"
	}	
}