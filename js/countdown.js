/*!jQuery Countdown*/
/**
 * Simple COuntdown with callback and Time Zone Support
 *
 * Version: 1.0.0 (12/11/2013)
 * Requires: jQuery v1.7+
 *
 * Where applicable: Copyright (c) 2013 Luca Grandi
 * Under MIT:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *
 */
(function (a) {
    a.fn.countdown = function (c, f) {
        function e() {
            currentDate = Math.floor((new Date().getTime()-g.offset)/1E3);
            if(eventDate < currentDate){
				null != b.callback && (b.callback).call(this), 
				"undefined" != typeof interval && clearInterval(interval)
			}
			else{
				seconds = (eventDate - currentDate), 
				days = Math.floor(seconds / 86400), 
				seconds -= 86400 * days, 
				hours = Math.floor(seconds / 3600), 
				seconds -= 3600 * hours, 
				minutes = Math.floor(seconds / 60), 
				seconds -= 60 * minutes, 
				1 == days ? thisEl.find(".timeRefDays").text('Day') : thisEl.find(".timeRefDays").text('Days'), 
				1 == hours ? thisEl.find(".timeRefHours").text('Hour') : thisEl.find(".timeRefHours").text('Hours'), 
				1 == minutes ? thisEl.find(".timeRefMinutes").text('Minute') : thisEl.find(".timeRefMinutes").text('Minutes'), 
				1 == seconds ? thisEl.find(".timeRefSeconds").text('Second') : thisEl.find(".timeRefSeconds").text('Seconds');
				if(1!=b.knob){
					if(0!=b.format){
						days = 2 <= String(days).length ? days : "0" + days, 
						hours = 2 <= String(hours).length ? hours : "0" + hours, 
						minutes = 2 <= String(minutes).length ? minutes : "0" + minutes, 
						seconds = 2 <= String(seconds).length ? seconds : "0" + seconds
					}
					thisEl.find(".days").text(days), 
					thisEl.find(".hours").text(hours), 
					thisEl.find(".minutes").text(minutes), 
					thisEl.find(".seconds").text(seconds)
				}
				else{
					input_day.trigger('configure',{"max":days});
					input_day.val(days).trigger('change'),
					input_hour.val(hours).trigger('change'), 
					input_minute.val(minutes).trigger('change'),
					input_second.val(seconds).trigger('change')
				}
			}
        }
        var b = {
			knob		:	false,	//Use Knob true/false
            date		:	null,	//Date in this format: 'mm/dd/yyyy hh:mm:ss'
            format		:	true,	//Print the number: 1 13 34... or format in this way: 01 02 12 34..
			callback	:	null	//Callback on countdown finish, Example: redirect
        };
		var g = {
            timezone	:	false,	//Activate the worldwide sync
            offset		:	0		//The UTC offset, you can find your UTC from UTC.txt, just copy and paste
        };
        c && a.extend(b, c);
        f && a.extend(g, f);
		var eventDate = (new Date(b.date).getTime())/1E3;
		if(g.timezone==true)
			g.offset=(parseInt(g.offset)*60*60*1000)+new Date().getTimezoneOffset()*60*1000;
        var thisEl = a(this);

		if(0!=b.knob && isCanvasSupported){
			var input_day=thisEl.find(".days"),
				input_hour=thisEl.find(".hours"),
				input_minute=thisEl.find(".minutes"),
				input_second=thisEl.find(".seconds");

			input_day.knob({'min':0}),
			input_hour.knob({'min':0,'max':23}),
			input_minute.knob({'min':0,'max':59}),
			input_second.knob({'min':0,'max':59})
		}
		else if(0!=b.knob && !isCanvasSupported){
			b.knob=0;
			thisEl.html('<ul id="countdown"><li><span class="days">00</span><p class="timeRefDays">Days</p></li><li><span class="hours">00</span><p class="timeRefHours">Hours</p></li><li><span class="minutes">00</span><p class="timeRefMinutes">Minutes</p></li><li><span class="seconds">00</span><p class="timeRefSeconds">Seconds</p></li></ul>');
		}
        e();
        var interval = setInterval( function(){e()}, 1E3);
		if(isNaN(eventDate)){
			alert("Invalid date mm/dd/yyyy. Here's an example: 12/25/2013 17:30:00"), clearInterval(interval)
		}
    }
	function isCanvasSupported(){
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	}
})(jQuery);