

document.querySelectorAll("button")[0].addEventListener("click", handCli1);
function handCli1() {
    
	var audio1 = new Audio("Music/EM1.wav");
	audio1.play();
}

document.querySelectorAll("button")[1].addEventListener("click", handCli2);
function handCli2() {
    
	var audio2 = new Audio("Music/EM2.wav");
	audio2.play();
}


document.querySelectorAll("button")[2].addEventListener("click", handCli3);
function handCli3() {
    
	var audio3 = new Audio("Music/EM3.wav");
	audio3.play();
}


document.querySelectorAll("button")[3].addEventListener("click", handCli4);
function handCli4() {
    
	var audio4 = new Audio("Music/EM4.wav");
	audio4.play();
}

document.querySelectorAll("button")[4].addEventListener("click", handCli5);
function handCli5() {
    
	var audio5 = new Audio("Music/EM5.wav");
	audio5.play();
}

document.querySelectorAll("button")[5].addEventListener("click", handCli6);
function handCli6() {
    
	var audio6 = new Audio("Music/EM6.wav");
	audio6.play();
}

document.querySelectorAll("button")[6].addEventListener("click", handCli7);
function handCli7() {
    
	var audio7 = new Audio("Music/EM7.wav");
	audio7.play();
}

document.querySelectorAll("button")[7].addEventListener("click", handCli8);
function handCli8() {
    
	var audio8 = new Audio("Music/EM8.wav");
	audio8.play();
}

document.querySelectorAll("button")[8].addEventListener("click", handCli9);
function handCli9() {
    
	var audio9 = new Audio("Music/EM9.wav");
	audio9.play();
}

document.querySelectorAll("button")[9].addEventListener("click", handCli10);
function handCli10() {
    
	var audio10 = new Audio("Music/EM10.wav");
	audio10.play();
}

document.querySelectorAll("button")[10].addEventListener("click", handCli11);
function handCli11() {
    
	var audio11 = new Audio("Music/EM11.wav");
	audio11.play();
}

document.querySelectorAll("button")[11].addEventListener("click", handCli12);
function handCli12() {
    
	var audio12 = new Audio("Music/EM12.wav");
	audio12.play();
}

document.querySelectorAll("button")[12].addEventListener("click", handCli13);
function handCli13() {
    
	var audio13 = new Audio("Music/EM13.wav");
	audio13.play();
}

document.querySelectorAll("button")[13].addEventListener("click", handCli14);
function handCli14() {
    
	var audio14 = new Audio("Music/EM14.wav");
	audio14.play();


}

document.querySelectorAll("button")[14].addEventListener("click", handCli15);
function handCli15() {
    
	var audio15 = new Audio("Music/EM15.wav");
	audio15.play();
}

document.querySelectorAll("button")[15].addEventListener("click", handCli16);
function handCli16() {
    
	var audio16 = new Audio("Music/EM16.wav");
	audio16.play();
}

//keyboard event
document.addEventListener("keypress", handCli17);
function handCli17(event){
    makeSound(event.key);
   
}
function makeSound(key){
	switch(key) {
		case "a":
		    var audiok1 = new Audio("Music/EM1.wav");
		    audiok1.play();
		break;
		 

		case "s":
		    var audiok2 = new Audio("Music/EM2.wav");
		    audiok2.play();
		break;
		
		case "d":
		    var audiok3 = new Audio("Music/EM3.wav");
		    audiok3.play();
		break; 

		case "f":
		    var audiok4 = new Audio("Music/EM4.wav");
		    audiok4.play();
		break; 

		case "g":
		    var audiok5 = new Audio("Music/EM5.wav");
		    audiok5.play();
		break;        

		case "h":
		    var audiok6 = new Audio("Music/EM6.wav");
		    audiok6.play();
		break; 

		case "j":
		    var audiok7 = new Audio("Music/EM7.wav");
		    audiok7.play();
		break;
        
        case "k":
		    var audiok8 = new Audio("Music/EM8.wav");
		    audiok8.play();
		break;
		 
		case "l":
		    var audiok9 = new Audio("Music/EM9.wav");
		    audiok9.play();
		break;
		
		case "z":
		    var audiok10 = new Audio("Music/EM10.wav");
		    audiok10.play();
		break; 

		case "x":
		    var audiok11 = new Audio("Music/EM11.wav");
		    audiok11.play();
		break; 

		case "c":
		    var audiok12 = new Audio("Music/EM12.wav");
		    audiok12.play();
		break;        

		case "v":
	
		    var audiok13 = new Audio("Music/EM13.wav");
		    audiok13.play();
		break;
		 
		case "b":
		    var audiok14 = new Audio("Music/EM14.wav");
		    audiok14.play();
		break;
		
		case "n":
		    var audiok15 = new Audio("Music/EM15.wav");
		    audiok15.play();
		break; 

		case "m":
		    var audiok16 = new Audio("Music/EM16.wav");
		    audiok16.play();
		break;

		

		
		


}
}