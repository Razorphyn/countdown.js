(function (b) {

	function isCanvasSupported(){
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	}

	b.fn.countdown = function (d) {
		function draw_clock() {
			if("knob" == a.skin.toLowerCase() && isCanvasSupported()){
				a.skin = a.skin.toLowerCase(), 
				c.append('<input class="' + a.option.day.eClass + '" type="text" value="0" data-readonly="true" /><input class="' + a.option.hour.eClass + '" type="text" value="0" data-readonly="true" /><input class="' + a.option.minute.eClass + '" type="text" value="0" data-readonly="true" /><input class="' + a.option.second.eClass + '" type="text" value="0" data-readonly="true" />'), 
				a.option.day.eClass = "." + a.option.day.eClass.split(" ").join("."), 
				a.option.hour.eClass = "." + a.option.hour.eClass.split(" ").join("."), 
				a.option.minute.eClass = "." + a.option.minute.eClass.split(" ").join("."),
				a.option.second.eClass = "." + a.option.second.eClass.split(" ").join("."),
				a.option.day.max = Math.floor((e - g) / 86400),
				
				a.option.day.draw = function () {b(this.i).val(this.cv)}, 
				a.option.hour.draw = function () {b(this.i).val(this.cv)},
				a.option.minute.draw = function () {b(this.i).val(this.cv)},
				a.option.second.draw = function () {b(this.i).val(this.cv)}, 

				c.find(a.option.day.eClass).knob(a.option.day), 
				c.find(a.option.hour.eClass).knob(a.option.hour),
				c.find(a.option.minute.eClass).knob(a.option.minute),
				c.find(a.option.second.eClass).knob(a.option.second)
			}
			else if("knob" == a.skin.toLowerCase() && !isCanvasSupported()){
				a.skin = a.fallbackSkin,
				c.append('<ul class="' + a.skin + '" ><li><span class="' + a.option.day.eClass + '">00</span><p class="timeRefDays">Days</p></li><li><span class="' + a.option.hour.eClass + '">00</span><p class="timeRefHours">Hours</p></li><li><span class="' + a.option.minute.eClass + '">00</span><p class="timeRefMinutes">Minutes</p></li><li><span class="' + a.option.second.eClass + '">00</span><p class="timeRefSeconds">Seconds</p></li></ul>')
				a.option.day.eClass = "." + a.option.day.eClass.split(" ").join("."), 
				a.option.hour.eClass = "." + a.option.hour.eClass.split(" ").join("."), 
				a.option.minute.eClass = "." + a.option.minute.eClass.split(" ").join("."), 
				a.option.second.eClass = "." + a.option.second.eClass.split(" ").join(".");
			}
			else{
				c.html('<ul class="' + a.skin + '"><li><span class="' + a.option.day.eClass + '">00</span><p class="timeRefDays">Days</p></li><li><span class="' + a.option.hour.eClass + '">00</span><p class="timeRefHours">Hours</p></li><li><span class="' + a.option.minute.eClass + '">00</span><p class="timeRefMinutes">Minutes</p></li><li><span class="' + a.option.second.eClass + '">00</span><p class="timeRefSeconds">Seconds</p></li></ul>')
				
				a.option.day.eClass = "." + a.option.day.eClass.split(" ").join("."), 
				a.option.hour.eClass = "." + a.option.hour.eClass.split(" ").join("."), 
				a.option.minute.eClass = "." + a.option.minute.eClass.split(" ").join("."), 
				a.option.second.eClass = "." + a.option.second.eClass.split(" ").join(".");
			}
			
			h = c.find(a.option.day.eClass);
			k = c.find(a.option.hour.eClass);
			l = c.find(a.option.minute.eClass);
			m = c.find(a.option.second.eClass)
		}

		function r() {
			currentDate = ((new Date).getTime() - a.offset) / 1E3;
			if(e < currentDate){
				null != a.callback && a.callback.call(this), 
				"undefined" != typeof q && clearInterval(q), 
				seconds = minutes = hours = days = 0
			}
			else{
				seconds = Math.floor(e - currentDate), 
				days = Math.floor(seconds / 86400), 
				seconds -= 86400 * days, 
				hours = Math.floor(seconds / 3600), 
				seconds -= 3600 * hours, 
				minutes = Math.floor(seconds / 60), 
				seconds -= 60 * minutes
			}
			if("knob" != a.skin){
				0 != a.format && (days = 2 <= String(days).length ? days : "0" + days, 
				hours = 2 <= String(hours).length ? hours : "0" + hours, 
				minutes = 2 <= String(minutes).length ? minutes : "0" + minutes, 
				seconds = 2 <= String(seconds).length ? seconds : "0" + seconds),
				h.text(days), 
				k.text(hours), 
				l.text(minutes), 
				m.text(seconds), 
				1 == days ? h.parent().children(".timeRefDays").text("Day") : h.parent().children(".timeRefDays").text("Days"), 
				1 == hours ? k.parent().children(".timeRefHours").text("Hour") : k.parent().children(".timeRefHours").text("Hours"), 
				1 == minutes ? l.parent().children(".timeRefMinutes").text("Minute") : l.parent().children(".timeRefMinutes").text("Minutes"), 
				1 == seconds ? m.parent().children(".timeRefSeconds").text("Second") : m.parent().children(".timeRefSeconds").text("Seconds")
			}
			else{
				h.val(days).trigger("change"), 
				k.val(hours).trigger("change"), 
				l.val(minutes).trigger("change"), 
				m.val(seconds).trigger("change")
			}
		}
		var a = {
			skin: "countdown_default",
			fallbackSkin: "countdown_default",
			option: {
				day: {max: null,eClass: "days"},
				hour: {max: 23,eClass: "hours"},
				minute: {max: 59,eClass: "minutes"},
				second: {max: 59,eClass: "seconds"}
			},
			dateStart: null,
			dateEnd: null,
			format: !0,
			callback: null,
			timezone: !1,
			offset: 0
		};
		d && b.extend(true, a, d);
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
		var c = b(this),
			e = (new Date(datEnd[2], datEnd[0] - 1, datEnd[1], datEnd[3], datEnd[4], datEnd[5])).getTime()/1E3,
			g = null != a.dateStart ? (new Date(datStart[2], datStart[0] - 1, datStart[1], datStart[3], datStart[4], datStart[5])).getTime()/1E3 : null,
			s = (new Date).getTime(),
			h, k, l, m;
		
		c.bind("configure", function (d, f) {

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
			e = (new Date(datEnd[2], datEnd[0] - 1, datEnd[1], datEnd[3], datEnd[4], datEnd[5])).getTime()/1E3,
			g = null != a.dateStart ? (new Date(datStart[2], datStart[0] - 1, datStart[1], datStart[3], datStart[4], datStart[5])).getTime()/1E3 : null;
			
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
				c.children().remove(), 
				draw_clock()
			}
			else{
				if(!c.hasClass(a.skin)){
					a.option.day.eClass = a.option.day.eClass.substring(1).split(".").join(" "), 
					a.option.hour.eClass = a.option.hour.eClass.substring(1).split(".").join(" "), 
					a.option.minute.eClass = a.option.minute.eClass.substring(1).split(".").join(" "), 
					a.option.second.eClass = a.option.second.eClass.substring(1).split(".").join(" "), 
					c.children().remove(), 
					draw_clock()
				}
			}
		});

		c.bind("destroy", function () {
			clearInterval(c.attr("interval-id"));
			c.remove()
		});

		if (isNaN(e)){
			alert("Invalid or null dateEnd mm/dd/yyyy. Example: 12/25/2013 17:30:00"), 
			b(this).append("Invalid or null dateEnd mm/dd/yyyy. Example: 12/25/2013 17:30:00")
		}
		else if ("knob" != a.skin || null != g && !isNaN(g)){
			if (g > s){
				alert("Starting date is greater than the current date"), 
				b(this).append("Starting date is greater than the current date")
			}
			else{
				if(!0 == a.timezone){
					a.offset = 36E5 * parseInt(a.offset) + 6E4 * (new Date).getTimezoneOffset()
				}
				if("undefined" != typeof d.option && "undefined" == typeof d.option.global){
					d.option.global = {}
				}
				a.option.day = b.extend(true, {}, a.option.global, a.option.day), 
				a.option.hour = b.extend(true, {}, a.option.global, a.option.hour), 
				a.option.minute = b.extend(true, {}, a.option.global, a.option.minute), 
				a.option.second = b.extend(!0, {}, a.option.global, a.option.second), 
				draw_clock();
				if(e > (new Date).getTime() / 1E3) {
					var q = setInterval(function () {r()}, 1E3);
					c.attr("interval-id", q)
				} 
				else null != a.callback && a.callback.call(this);
			}
		}
		else alert("Invalid or null dateStart mm/dd/yyyy. Example: 12/25/2013 17:30:00"), b(this).append("Invalid or null dateStart mm/dd/yyyy. Example: 12/25/2013 17:30:00")
	}
})(jQuery);