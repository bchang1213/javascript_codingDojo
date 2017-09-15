
// TO CALCULATE AMOUNT AFTER NUM AMOUNT OF DAYS
function billion(num){
	var sum = 0.01;
	for(var i = 1; i <= num; i++){
		sum = sum * 2;
	}
	console.log(sum);
}

