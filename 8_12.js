let i = 5;

let timerId = setInterval(function() {
	console.log(++i);
	
	if (i >= 15) {
		clearInterval(timerId);
	}
}, 1000);