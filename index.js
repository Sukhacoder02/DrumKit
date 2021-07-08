var buttons = document.getElementsByClassName("drum");
 
var len = buttons.length;

function playSound(key)
{
	var audio = null;
	switch(key)
	{
		case "w" :  audio = new Audio("sounds/crash.mp3"); audio.play();break;
		case "a" :  audio = new Audio("sounds/abc.mp3"); audio.play();break;
		case "s" :  audio = new Audio("sounds/snare.mp3"); audio.play();break;
		case "d" :  audio = new Audio("sounds/tom-1.mp3"); audio.play();break;
		case "j" :  audio = new Audio("sounds/tom-2.mp3"); audio.play();break;
		case "k" : 	 audio = new Audio("sounds/tom-3.mp3"); audio.play();break;
		case "l" :  audio = new Audio("sounds/tom-4.mp3"); audio.play();break;
		default : break;
	}
}

for(var i=0;i<len;i++)
{
	buttons[i].addEventListener("click", function () {
		playSound(this.innerHTML);
	});
	
}

document.addEventListener("keydown",function(){
	playSound(event.key);
})