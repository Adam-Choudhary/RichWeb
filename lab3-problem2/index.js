window.onload = function() {
	let quantityHours = document.getElementById("enter-hours");
	let quantityMinutes = document.getElementById("enter-minutes");
	let quantitySeconds = document.getElementById("enter-seconds");
	let countdownButton = document.getElementById('start-countdown');
	let countdownDisplay = document.getElementById("countdown");
	let countdown;

	let countdownEventListener = Rx.Observable.fromEvent(countdownButton, 'click');
	countdownEventListener.subscribe(() => {
		let hours = isNaN(quantityHours.value) ? 0 : parseInt(quantityHours.value*60*60);
		let minutes = isNaN(parseInt(quantityMinutes.value)) ? 0 : parseInt(quantityMinutes.value*60);
		let seconds = isNaN(parseInt(quantitySeconds.value)) ? 0 : parseInt(quantitySeconds.value);
		let startingPoint = hours + minutes + seconds;

		countdown = Rx.Observable.timer(startingPoint, 1000).map(i => startingPoint - i).takeUntil(countdownEventListener).takeWhile(i => i >= 0);

		countdown.subscribe((counter) => {
			let hours = Math.floor(counter / 3600)
			let minutes = Math.floor((counter - (hours * 3600)) / 60)
			let seconds = counter - (hours * 3600) - (minutes * 60);

			hours = hours < 10 ? "0" + hours : hours;
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;

			countdownDisplay.innerHTML = hours + ": "+ minutes + ": " + seconds;
		});
	});
}