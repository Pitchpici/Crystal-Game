$(document).ready(function(){

var num, j1, j2, j3, j4;
var wins=0;
$("#wins").html("<h4>" + wins + "</h4>");
var losses=0;
$("#losses").html("<h4>" + losses + "</h4>");
var playerScore=0;
$("#score").html("<h4>" + playerScore + "</h4>");

function start() {
	//generate number
	//generate values for each button
	//give value attribute the number was generated


	num=Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$("#number").html("<h4>" + num + "</h4>");
	console.log(num);
	j1=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	$("#j1").attr("value", j1);
	j2=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	$("#j2").attr("value", j2);
	j3=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	$("#j3").attr("value", j3);
	j4=Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	$("#j4").attr("value", j4);
	console.log(j1, j2, j3, j4);
};

$(".btn").on("click", function(){

 	var internal=$(this);
 	var val=internal.attr("value");

 	playerScore+=parseInt(val);
 	$("#score").html(playerScore);
	
	if (num===playerScore) {
		
		wins++;
		$("#wins").html("<h4>" + wins + "</h4>"); 
		
		playerScore=0;
		$("#score").html(playerScore);
		
		start();

	}
	else if (num<playerScore) {
		
		losses++;
		$("#losses").html("<h4>" + losses + "</h4>");
		
		playerScore=0;
		$("#score").html(playerScore);
		
		start();
	}

});


start();


});//closing document load function