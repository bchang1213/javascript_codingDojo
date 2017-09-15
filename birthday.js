function birthday(num){
	for(var i = num; i >= 0; i--){
		if (i >= 10){
			console.log("It's", i, "days until my birthday, wubba lubba dub dub.");
		}
		else if (i >= 5){
			console.log("It's", i, "days until my birthday, so close!");
		}
		else if (i >= 1){
			console.log("It's", i, "days until my birthday!!");
		}
		else if (i === 0){
			console.log("It's my birthday!");
		}
	}
}
