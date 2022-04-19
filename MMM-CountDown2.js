Module.register("MMM-CountDown2",{
	// Default module config.
	defaults: {
		event: "New Millenium:",
		date: "3000-01-01",
		showHours: true,
		showMinutes: true,
		showSeconds: true,
		customInterval: 1000,
		daysLabel: 'd',
		hoursLabel: 'h',
		minutesLabel: 'm',
		secondsLabel: 's',
	},

	// set update interval
	start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, this.config.customInterval); 
	},

	// Update function
	getDom: function() {
		var wrapper = document.createElement("div");

		var timeWrapper = document.createElement("div");
		var textWrapper = document.createElement("div");

		textWrapper.className = "align-center week dimmed medium";
		timeWrapper.className = "time bright medium";
		textWrapper.innerHTML=this.config.event;

		var today = new Date(Date.now());
		var target = new Date(this.config.date);
		var timeDiff = target - today;
		if(timeDiff < 0) timeDiff = 0;

		// Set days, hours, minutes and seconds
		var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		var diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		if(diffHours < 10) diffHours = "0"+diffHours;
		var diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		if(diffMinutes < 10) diffMinutes = "0"+diffMinutes;
		var diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
		if(diffSeconds < 10) diffSeconds = "0"+diffSeconds; 

		// Build the output
		var hrs = '';
		var mins = '';
		var secs = '';
		var days = diffDays + this.config.daysLabel;
		if(this.config.showHours == true) hrs = diffHours + this.config.hoursLabel;
		if(this.config.showMinutes == true) mins = diffMinutes + this.config.minutesLabel;
		if(this.config.showSeconds == true) secs = diffSeconds + this.config.secondsLabel;

		timeWrapper.innerHTML = days + hrs + mins + secs;

		wrapper.appendChild(textWrapper);
		wrapper.appendChild(timeWrapper);

		return wrapper;
	}
});
