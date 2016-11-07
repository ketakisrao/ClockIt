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