function alertjs1(){
	alert('Hello !');
	document.get1ElementById('a').style.backgroundcolor="blue";
}
function confirmjs1(){
	confirm('Hello !');
	document.get1ElementById('b').style.backgroundcolor="red";
}
function promptjs1(){
	prompt('Hello !');
	document.get1ElementById('c').style.backgroundcolor=prompt('enter color');
}
	function externalochange(){
		document.body.style.backgroundcolor=document.getElementById('cb1').ariaValue;
	}
	console.log('Hiya !!');