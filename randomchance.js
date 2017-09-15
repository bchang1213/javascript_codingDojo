function lotto(quarters){
	var pay = Math.floor(Math.random() * 50)+50;
	var chance = Math.floor(Math.random() * 101) + 1;
	for(var i = 1; i <= quarters; i++){
		if(chance === 42){
		  console.log("You entered " + quarters + " coins to gamble.");
		  console.log("You used " + i + " coins.");
		  var winnings = pay;
		  console.log("You win " + winnings + " coins profit.");
		  var payout = winnings + (quarters - i);
			return(console.log("You win " + payout + " total."));
		}
		if(chance !==42){
			return (0);
		}
	}
}