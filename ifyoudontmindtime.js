function tellTime(hour,minute,period){
	if(minute < 30 && period == "AM"){
		console.log("It's just after", hour, "in the morning.");
	}
	else if (minute > 30 && period == "AM"){
		console.log("It's almost", hour, "in the morning.");
	}
	else if(minute < 30 && period == "PM"){
		console.log("It's almost", hour, "in the evening." );
	}
	else if (minute > 30 && period == "PM"){
		console.log("It's almost", hour, "in the evening.");
	}
}