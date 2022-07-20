$(document).ready(function(){
	$("#one").draggable();

	$("#two span").draggable({
		containment:"#two"
	});

	$("#three span").draggable({
		axis:"x"
	});

	$("#four span").draggable({
		axis:"y"
	});

	$("#five span").draggable({
		delay:500
	});

	$("#six span").draggable({
		distance:550
	});
});