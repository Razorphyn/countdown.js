/*!jQuery Professional Countdown*/
/**
 * Simple COuntdown with callback and Time Zone Support
 *
 * Where applicable: Copyright (c) 2013 Luca Grandi
 * Under MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
(function (b) {

	function isCanvasSupported(){
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	}

	b.fn.countdown = function (d) {
		
		var a = {
			skin: "countdown_default", //First Loaded Skin, use knob to use the knob Plugin
			fallbackSkin: "countdown_default", //Use this if the first one is not supported
			option: {
				day: {max: null,eClass: "days"}, //Option for Days label
				hour: {max: 23,eClass: "hours"}, //Option for Hours label
				minute: {max: 59,eClass: "minutes"}, //Option Minutes Day label
				second: {max: 59,eClass: "seconds"} //Option for Seconds label
			},
			dateStart: null, 	//Starting date; Fomat: string -> mm/dd/yyyy hh:mm:ss OR Array (Month,Day,Year(yyyy),Hour,Minute,Second)
			dateEnd: null, 		//Ending date; Fomat: string -> mm/dd/yyyy hh:mm:ss OR Array (Month,Day,Year(yyyy),Hour,Minute,Second)
			format: !0,			//Add zero to single digit 01 03 05...12 15 48..
			callback: null,		//Called function once the countdown id finished
			timezone: false,	//Use offset
			offset: 0			//Check UTC.txt to choose your UTC
		};

		d && b.extend(true, a, d);
		
		function draw_clock() {
			if("knob" == a.skin.toLowerCase() && isCanvasSupported()){
				a.skin = a.skin.toLowerCase(), 
				thisEl.append('<input class="' + a.option.day.eClass + '" type="text" value="0" data-readonly="true" /><input class="' + a.option.hour.eClass + '" type="text" value="0" data-readonly="true" /><input class="' + a.option.minute.eClass + '" type="text" value="0" data-readonly="true" /><input class="' + a.option.second.eClass + '" type="text" value="0" data-readonly="true" />'), 
				a.option.day.eClass = "." + a.option.day.eClass.split(" ").join("."), 
				a.option.hour.eClass = "." + a.option.hour.eClass.split(" ").join("."), 
				a.option.minute.eClass = "." + a.option.minute.eClass.split(" ").join("."),
				a.option.second.eClass = "." + a.option.second.eClass.split(" ").join("."),
				a.option.day.max = Math.floor((endDate - startDate) / 86400),

				a.option.day.draw = function () {b(this.i).val(this.cv)}, 
				a.option.hour.draw = function () {b(this.i).val(this.cv)},
				a.option.minute.draw = function () {b(this.i).val(this.cv)},
				a.option.second.draw = function () {b(this.i).val(this.cv)}, 

				thisEl.find(a.option.day.eClass).knob(a.option.day), 
				thisEl.find(a.option.hour.eClass).knob(a.option.hour),
				thisEl.find(a.option.minute.eClass).knob(a.option.minute),
				thisEl.find(a.option.second.eClass).knob(a.option.second)
			}
			else if("knob" == a.skin.toLowerCase() && !isCanvasSupported()){
				a.skin = a.fallbackSkin,
				thisEl.append('<ul class="' + a.skin + '" ><li><span class="' + a.option.day.eClass + '">00</span><p class="timeRefDays">Days</p></li><li><span class="' + a.option.hour.eClass + '">00</span><p class="timeRefHours">Hours</p></li><li><span class="' + a.option.minute.eClass + '">00</span><p class="timeRefMinutes">Minutes</p></li><li><span class="' + a.option.second.eClass + '">00</span><p class="timeRefSeconds">Seconds</p></li></ul>')
				a.option.day.eClass = "." + a.option.day.eClass.split(" ").join("."), 
				a.option.hour.eClass = "." + a.option.hour.eClass.split(" ").join("."), 
				a.option.minute.eClass = "." + a.option.minute.eClass.split(" ").join("."), 
				a.option.second.eClass = "." + a.option.second.eClass.split(" ").join(".");
			}
			else{
				thisEl.html('<ul class="' + a.skin + '"><li><span class="' + a.option.day.eClass + '">00</span><p class="timeRefDays">Days</p></li><li><span class="' + a.option.hour.eClass + '">00</span><p class="timeRefHours">Hours</p></li><li><span class="' + a.option.minute.eClass + '">00</span><p class="timeRefMinutes">Minutes</p></li><li><span class="' + a.option.second.eClass + '">00</span><p class="timeRefSeconds">Seconds</p></li></ul>')
				
				a.option.day.eClass = "." + a.option.day.eClass.split(" ").join("."), 
				a.option.hour.eClass = "." + a.option.hour.eClass.split(" ").join("."), 
				a.option.minute.eClass = "." + a.option.minute.eClass.split(" ").join("."), 
				a.option.second.eClass = "." + a.option.second.eClass.split(" ").join(".");
			}
			
			input_day = thisEl.find(a.option.day.eClass),
			input_hour = thisEl.find(a.option.hour.eClass),
			input_minute = thisEl.find(a.option.minute.eClass),
			input_second = thisEl.find(a.option.second.eClass)
		}

		function r() {
			currentDate = ((new Date).getTime() - a.offset) / 1E3;
			if(endDate < currentDate){
				null != a.callback && a.callback.call(this), 
				"undefined" != typeof q && clearInterval(q), 
				seconds = minutes = hours = days = 0
			}
			else{
				seconds = Math.floor(endDate - currentDate), 
				days = Math.floor(seconds / 86400), 
				seconds -= 86400 * days, 
				hours = Math.floor(seconds / 3600), 
				seconds -= 3600 * hours, 
				minutes = Math.floor(seconds / 60), 
				seconds -= 60 * minutes
			}
			if("knob" != a.skin){
				days = (a.format=true && 2 <= String(days).length) ? days : "0" + days, 
				hours = (a.format=true && 2 <= String(hours).length) ? hours : "0" + hours, 
				minutes = (a.format=true && 2 <= String(minutes).length) ? minutes : "0" + minutes, 
				seconds = (a.format=true && 2 <= String(seconds).length) ? seconds : "0" + seconds;
				input_day.text(days), 
				input_hour.text(hours), 
				input_minute.text(minutes), 
				input_second.text(seconds), 
				1 == days ? input_day.parent().children(".timeRefDays").text("Day") : input_day.parent().children(".timeRefDays").text("Days"), 
				1 == hours ? input_hour.parent().children(".timeRefHours").text("Hour") : input_hour.parent().children(".timeRefHours").text("Hours"), 
				1 == minutes ? input_minute.parent().children(".timeRefMinutes").text("Minute") : input_minute.parent().children(".timeRefMinutes").text("Minutes"), 
				1 == seconds ? input_second.parent().children(".timeRefSeconds").text("Second") : input_second.parent().children(".timeRefSeconds").text("Seconds")
			}
			else{
				input_day.val(days).trigger("change"), 
				input_hour.val(hours).trigger("change"), 
				input_minute.val(minutes).trigger("change"), 
				input_second.val(seconds).trigger("change")
			}
		}

		if("string" == typeof a.dateEnd){
			datEnd = a.dateEnd.split(" "), 
			datEnd[0] = datEnd[0].split("/"), 
			datEnd[1] = datEnd[1].split(":"), 
			datEnd = datEnd[0].concat(datEnd[1])
		}
		if(null != a.dateStart && "string" == typeof a.dateStart){
			datStart = a.dateStart.split(" "), 
			datStart[0] = datStart[0].split("/"), 
			datStart[1] = datStart[1].split(":"), 
			datStart = datStart[0].concat(datStart[1])
		}
		var thisEl = b(this),
			endDate = (new Date(datEnd[2], datEnd[0] - 1, datEnd[1], datEnd[3], datEnd[4], datEnd[5])).getTime()/1E3,
			startDate = null != a.dateStart ? (new Date(datStart[2], datStart[0] - 1, datStart[1], datStart[3], datStart[4], datStart[5])).getTime()/1E3 : null,
			input_day, 
			input_hour, 
			input_minute, 
			input_second;
		
		thisEl.bind("configure", function (d, f) {
			
			var ClassCheck=("undefined"!=typeof f.skin && thisEl.children('.'+a.skin).hasClass(f.skin))? true:false;
			f && b.extend(true, a, f);

			if("string" == typeof a.dateEnd){
				datEnd = a.dateEnd.split(" "), 
				datEnd[0] = datEnd[0].split("/"), 
				datEnd[1] = datEnd[1].split(":"), 
				datEnd = datEnd[0].concat(datEnd[1])
			}
			if(null != a.dateStart && "string" == typeof a.dateStart){
				datStart = a.dateStart.split(" "), 
				datStart[0] = datStart[0].split("/"), 
				datStart[1] = datStart[1].split(":"), 
				datStart = datStart[0].concat(datStart[1])
			}
			endDate = (new Date(datEnd[2], datEnd[0] - 1, datEnd[1], datEnd[3], datEnd[4], datEnd[5])).getTime()/1E3,
			startDate = null != a.dateStart ? (new Date(datStart[2], datStart[0] - 1, datStart[1], datStart[3], datStart[4], datStart[5])).getTime()/1E3 : null;
			
			if(!0 == a.timezone && null != f.offset){
				a.offset = 36E5 * parseInt(a.offset) + 6E4 * (new Date).getTimezoneOffset()
			}

			if("undefined" != typeof f.option && "undefined" == typeof f.option.global){
				f.option.global = {}
			}
			a.option.day = b.extend(!0, {}, a.option.global, a.option.day);
			a.option.hour = b.extend(!0, {}, a.option.global, a.option.hour);
			a.option.minute = b.extend(!0, {}, a.option.global, a.option.minute);
			a.option.second = b.extend(!0, {}, a.option.global, a.option.second);
			if("knob" == a.skin.toLowerCase() && isCanvasSupported()){
				a.option.day.eClass = a.option.day.eClass.substring(1).split(".").join(" "), 
				a.option.hour.eClass = a.option.hour.eClass.substring(1).split(".").join(" "), 
				a.option.minute.eClass = a.option.minute.eClass.substring(1).split(".").join(" "), 
				a.option.second.eClass = a.option.second.eClass.substring(1).split(".").join(" "), 
				thisEl.children().remove(), 
				draw_clock()
			}
			else{
				a.skin=a.fallbackSkin,
				a.option.day.eClass = a.option.day.eClass.substring(1).split(".").join(" "), 
				a.option.hour.eClass = a.option.hour.eClass.substring(1).split(".").join(" "), 
				a.option.minute.eClass = a.option.minute.eClass.substring(1).split(".").join(" "), 
				a.option.second.eClass = a.option.second.eClass.substring(1).split(".").join(" "), 
				thisEl.children().remove(), 
				draw_clock()
			}
		});

		thisEl.bind("destroy", function () {
			clearInterval(thisEl.attr("interval-id"));
			thisEl.remove()
		});

		if (isNaN(endDate)){
			alert("Invalid or null dateEnd mm/dd/yyyy. Example: 12/25/2013 17:30:00"), 
			thisEl.append("Invalid or null dateEnd mm/dd/yyyy. Example: 12/25/2013 17:30:00")
		}
		else if ("knob" != a.skin || null != startDate && !isNaN(startDate)){
			if (startDate > (new Date).getTime()){
				alert("Starting date is greater than the current date"), 
				thisEl.append("Starting date is greater than the current date")
			}
			else{
				if(a.timezone==true){
					a.offset = 36E5 * parseInt(a.offset) + 6E4 * (new Date).getTimezoneOffset()
				}
				if("undefined" != typeof d.option && "undefined" == typeof d.option.global){
					d.option.global = {}
				}
				a.option.day = b.extend(true, {}, a.option.global, a.option.day), 
				a.option.hour = b.extend(true, {}, a.option.global, a.option.hour), 
				a.option.minute = b.extend(true, {}, a.option.global, a.option.minute), 
				a.option.second = b.extend(true, {}, a.option.global, a.option.second), 
				draw_clock();
				if(endDate > (new Date).getTime() / 1E3) {
					var q = setInterval(function () {r()}, 1E3);
					thisEl.attr("interval-id", q)
				} 
				else null != a.callback && a.callback.call(this);
			}
		}
		else{
			alert("Invalid or null dateStart mm/dd/yyyy. Example: 12/25/2013 17:30:00"),
			thisEl.append("Invalid or null dateStart mm/dd/yyyy. Example: 12/25/2013 17:30:00")
		}
	}
})(jQuery);