var timePiece = document.getElementById("timePiece");
var body = document.getElementsByTagName("body")[0];

function currentTime(){

	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	if(hours > 12){
		hours -= 12;
	
	}

 	if(hours < 10){
		hours = "0" + hours;

	}

	if(minutes < 10){
		minutes = "0" + minutes;

	}

	if(seconds < 10){
		seconds = "0" + seconds;

	}
	//forces what did not go through the if statements to become a string
	var hoursToString = hours.toString();
	var minutesToString = minutes.toString();
	var secondsToString = seconds.toString(); 

	var clock = hoursToString + minutesToString + secondsToString;
	var colorChoser = "#" + clock;
	timePiece.innerHTML =  clock;

	//The color changes slowly, so I logged it so you can see it changes. 
	console.log(colorChoser);
	
	body.style.backgroundColor = colorChoser;
	
};

setInterval("currentTime()", 1000);








