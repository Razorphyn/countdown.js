/*!jQuery Professional Countdown*/
/**
 * Simple Countdown with callback and Time Zone Support
 *
 * Version: 1.0.1 (16/11/2013)
 * Requires: jQuery v1.7+
 *
 * Where applicable: Copyright (c) 2013 Luca Grandi
 * Under MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 *
 */
(function ($) {
    $.fn.countdown = function (c, f) {
        var b = {
			skin			:	'countdown_default',	//Set Skin
			fallbackSkin	:	'countdown_default',	//Skin for the older browser that doesn't support canvas; Default: countdown_default
			option			:	{day:{max:null,eClass:'days'},hour:{max:23,eClass:'hours'},minute:{max:59,eClass:'minutes'},second:{max:59,eClass:'seconds'}},	//Skin Options, like Knob setting or different classes for the timer component
            dateStart		:	null,	//Date in this format: 'mm/dd/yyyy hh:mm:ss'
            dateEnd			:	null,	//Date in this format: 'mm/dd/yyyy hh:mm:ss'
            format			:	true,	//One digit number transformde to: 01 02...
			callback		:	null	//Callback on countdown finish, Example: redirect
        };
		var g = {
            timezone	:	false,	//Activate the worldwide sync
            offset		:	0		//The UTC offset, you can find your UTC from UTC.txt, just copy and paste
        };

        c && $.extend(true,b, c);
        f && $.extend(true,g, f);
		
		var eventDateEnd = (new Date(b.dateEnd).getTime())/1E3,
			eventDateStart = (new Date(b.dateStart).getTime())/1E3,
			now=new Date().getTime();
		
		if(isNaN(eventDateEnd)){
			alert("Invalid or null dateEnd mm/dd/yyyy. Example: 12/25/2013 17:30:00"),
			$(this).append("Invalid or null date mm/dd/yyyy. Example: 12/25/2013 17:30:00");
			return ;
		}
		if('knob'==b.skin && (null==eventDateStart || isNaN(eventDateStart))){
			alert("Invalid or null dateStart mm/dd/yyyy. Example: 12/25/2013 17:30:00"),
			$(this).append("Invalid or null dateStart mm/dd/yyyy. Example: 12/25/2013 17:30:00");
			return
		}
		else if(eventDateStart>now){
			alert("Starting date is greater than the current date"),
			$(this).append("Starting date is greater than the current date");
			return
		}

		if(g.timezone==true)
			g.offset=(parseInt(g.offset)*60*60*1000)+new Date().getTimezoneOffset()*60*1000;

		var thisEl = $(this);

		if("undefined" != typeof c.option && "undefined" == typeof c.option.global)
			c.option.global={};

		b.option.day=$.extend(true,{}, b.option.global, b.option.day);
		b.option.hour=$.extend(true,{}, b.option.global, b.option.hour);
		b.option.minute=$.extend(true,{}, b.option.global, b.option.minute);
		b.option.second=$.extend(true,{}, b.option.global, b.option.second);

		if('knob'==b.skin.toLowerCase() && isCanvasSupported){
			b.skin=b.skin.toLowerCase();
			thisEl.append('<input class="'+b.option.day.eClass+'" type="text" value="0" data-readonly="true" /><input class="'+b.option.hour.eClass+'" type="text" value="0" data-readonly="true"  /><input class="'+b.option.minute.eClass+'" type="text" value="0" data-readonly="true" /><input class="'+b.option.second.eClass+'" type="text" value="0" data-readonly="true" />');

			b.option.day.max = Math.floor((eventDateEnd-eventDateStart) / 86400);
			thisEl.find("."+b.option.day.eClass).knob(b.option.day),
			thisEl.find("."+b.option.hour.eClass).knob(b.option.hour),
			thisEl.find("."+b.option.minute.eClass).knob(b.option.minute),
			thisEl.find("."+b.option.second.eClass).knob(b.option.second)
		}
		else if('knob'!=b.skin.toLowerCase() && !isCanvasSupported){
			b.skin=b.fallbackSkin;
			thisEl.html('<ul class="'+b.skin+'"><li><span class="'+b.option.day.eClass+'">00</span><p class="timeRefDays">Days</p></li><li><span class="'+b.option.hour.eClass+'">00</span><p class="timeRefHours">Hours</p></li><li><span class="'+b.option.minute.eClass+'">00</span><p class="timeRefMinutes">Minutes</p></li><li><span class="'+b.option.second.eClass+'">00</span><p class="timeRefSeconds">Seconds</p></li></ul>');
		}
		else
			thisEl.append('<ul class="'+b.skin+'" ><li><span class="'+b.option.day.eClass+'">00</span><p class="timeRefDays">Days</p></li><li><span class="'+b.option.hour.eClass+'">00</span><p class="timeRefHours">Hours</p></li><li><span class="'+b.option.minute.eClass+'">00</span><p class="timeRefMinutes">Minutes</p></li><li><span class="'+b.option.second.eClass+'">00</span><p class="timeRefSeconds">Seconds</p></li></ul>');

        var input_day=thisEl.find("."+b.option.day.eClass),
			input_hour=thisEl.find("."+b.option.hour.eClass),
			input_minute=thisEl.find("."+b.option.minute.eClass),
			input_second=thisEl.find("."+b.option.second.eClass);
		
		e();
		if(eventDateEnd> new Date().getTime()/1E3)
			var	interval = setInterval( function(){e()}, 1E3);

		//Countdown Function
		function e() {
            currentDate = Math.floor((new Date().getTime()-g.offset)/1E3);
            if(eventDateEnd < currentDate){
				null != b.callback && (b.callback).call(this), 
				"undefined" != typeof interval && clearInterval(interval)
			}
			else{
				seconds = (eventDateEnd - currentDate), 
				days = Math.floor(seconds / 86400), 
				seconds -= 86400 * days, 
				hours = Math.floor(seconds / 3600), 
				seconds -= 3600 * hours, 
				minutes = Math.floor(seconds / 60), 
				seconds -= 60 * minutes;

				if('knob'!=b.skin){
					if(0!=b.format){
						days = 2 <= String(days).length ? days : "0" + days, 
						hours = 2 <= String(hours).length ? hours : "0" + hours, 
						minutes = 2 <= String(minutes).length ? minutes : "0" + minutes, 
						seconds = 2 <= String(seconds).length ? seconds : "0" + seconds
					}
					input_day.text(days), 
					input_hour.text(hours), 
					input_minute.text(minutes), 
					input_second.text(seconds);

					1 == days ? input_day.parent().children(".timeRefDays").text('Day') : input_day.parent().children(".timeRefDays").text('Days'), 
					1 == hours ? input_hour.parent().children(".timeRefHours").text('Hour') : input_hour.parent().children(".timeRefHours").text('Hours'), 
					1 == minutes ? input_minute.parent().children(".timeRefMinutes").text('Minute') : input_minute.parent().children(".timeRefMinutes").text('Minutes'), 
					1 == seconds ? input_second.parent().children(".timeRefSeconds").text('Second') : input_second.parent().children(".timeRefSeconds").text('Seconds')

				}
				else{
					input_day.val(days).trigger('change'),
					input_hour.val(hours).trigger('change'), 
					input_minute.val(minutes).trigger('change'),
					input_second.val(seconds).trigger('change')
				}
			}
        }
    }
	function isCanvasSupported(){
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	}
})(jQuery);