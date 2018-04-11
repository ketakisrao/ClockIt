document.addEventListener("DOMContentLoaded", function(event) {
	updateTime();
	function updateTime(){
		var date = new Date();
		var seconds = date.getSeconds();
		var mins = date.getMinutes();
		var hours = date.getHours();
		var secDeg = seconds * 6 + 90;
		var minDeg = mins * 6 + seconds * 0.1 + 90;
		var hourDeg = (hours * 30 + mins * 0.5 + seconds/120 + 90) % 360;

		document.getElementById("sh").style.transform = "rotate(" + secDeg + "deg)";
		document.getElementById("mh").style.transform = "rotate(" + minDeg + "deg)";
		document.getElementById("hh").style.transform = "rotate(" + hourDeg + "deg)";
		setTimeout(updateTime, 1000);
	}
});

function changeBackgroundColor(){
	var selectedColor = document.getElementById("changeBackColor").value;
	switch(selectedColor){
		case "Blue":
			document.body.style.backgroundColor = "#4183D7";
			break;
		case "Orange":
			document.body.style.backgroundColor = "#e67e22";
			break;
		case "Red":
			document.body.style.backgroundColor = "#e74c3c";
			break;
		case "Teal":
			document.body.style.backgroundColor = "#008080";
			break;
		case "Yellow":
			document.body.style.backgroundColor = "#f1c40f";
			break;
		case "Silver":
			document.body.style.backgroundColor = "#bdc3c7";
			break;
		case "Purple":
			document.body.style.backgroundColor = "#BF55EC";
			break;
		case "Pink":
			document.body.style.backgroundColor = "#F62459";
			break;
	}
}