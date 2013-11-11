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
				if("on" == b.format){
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
        }
        var b = {
            date		:	null,	// Date in this format: 'mm/dd/yyyy hh:mm:ss'
            format		:	null,	// Print the number: 1 13 34... or format in this way: 01 02 12 34..
			callback	:	null	//Callback on countdown finish, Example: redirect
        };
		var g = {
            active	:	'off',	//Activate the worldwide sync
            offset	:	0		//The UTC hour difference from the location of the site and Europe/London timezone
								//Example: you want to launch the site on 11/13/2013 12:35:50 Australia/Sydney time, in this case the value is -11
								//Example: you want to launch the site on 11/13/2013 12:35:50 America/New York time, in this case the value is 5
								//The question is: London is [positive or negative number] hours ahead of [location]; however just try
        };
        c && a.extend(b, c);
        f && a.extend(g, f);
		b.date=b.date.split(' ');
		b.date[0]=b.date[0].split('/');
		b.date[1]=b.date[1].split(':');
		eventDate = (new Date(b.date[0][2], b.date[0][0]-1, b.date[0][1],b.date[1][0], b.date[1][1], b.date[1][2]).getTime())/1E3;
		if(g.active=='on')
			g.offset=(parseInt(g.offset)*60*60*1000)-new Date().getTimezoneOffset()*60*1000;
        thisEl = a(this);
        e();
        interval = setInterval(e, 1E3);
		if(isNaN(eventDate)){
			alert("Invalid date. Here's an example: 12 Tuesday 2012 17:30:00"), clearInterval(interval)
		}
    }
})(jQuery);