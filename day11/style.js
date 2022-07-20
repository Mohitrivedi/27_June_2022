$(document).ready(function(){
	$("#t1").focus(function(){
		$(this).css("background-color","lightblue");
	});
	
	$("#t2").blur(function(){
		$(this).css("background-color","yellow");
	});

	$("#t3").keypress(function(){
		alert($(this).val());
	});

	$("#t4").keyup(function(){
		alert($(this).val());
	});
});
