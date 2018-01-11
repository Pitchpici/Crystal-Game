$(document).ready(function(){

var num, crystal1, crystal2, crystal3, crystal4;

var wins = 0;
$("#wins").html("<h4>" + wins + "</h4>");
var losses = 0;
$("#losses").html("<h4>" + losses + "</h4>");
var playerScore = 0;
$("#score").html("<h4>" + playerScore + "</h4>");

function start() {
	//generate number
	//generate values for each button
	//give value attribute the number was generated


	num = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$("#number").html("<h4>" + num + "</h4>");

	crystal1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	$("#c1").attr("value", crystal1);

	crystal2=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	$("#c2").attr("value", crystal2);

	crystal3=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	$("#c3").attr("value", crystal3);

	crystal4=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	$("#c4").attr("value", crystal4);

};


//when player clicks a button
$(".btn").on("click", function(){

 	var internal = $(this);

 	//take a variable and save the value of the value attribute in it (it will be a string)
 	var val = internal.attr("value");

 	//transform that string into a integer (we know it's a integer because we generated it with math.random())
 	//and add it 
 	playerScore += parseInt(val);
 	$("#score").html("<h4>"+ playerScore+ "</h4>");
	

	if (num === playerScore) {
		
		wins++;
		$("#wins").html("<h4>" + wins + "</h4>"); 
		
		playerScore = 0;
		$("#score").html("<h4>"+ playerScore+ "</h4>");
		
		start();

	}
	else if (num < playerScore) {
		
		losses++;
		$("#losses").html("<h4>" + losses + "</h4>");
		
		playerScore = 0;
		$("#score").html("<h4>"+ playerScore+ "</h4>");
		
		start();
	}

});


start();


});//closing document load function