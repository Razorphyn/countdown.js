countdown.js
============

Simple Jquery Countdown with redirect and timezone

## Instructions

#### Head:
```
<link rel="stylesheet" type="text/css" href="css/countdown.css"/>
<script type="text/javascript"  src="js/jquery-1.10.2.js"></script>
<script type="text/javascript"  src="js/countdown.js"></script>
```
if you want to use Knob:
```
<link rel="stylesheet" type="text/css" href="css/countdown.css"/>
<script type="text/javascript"  src="js/jquery-1.10.2.js"></script>
<script type="text/javascript"  src="js/jquery.knob.js"></script>
<script type="text/javascript"  src="js/countdown.js"></script>
```
#### Body:

Normal Countdown
```html
<div class="timer-area">
	<ul id="countdown">
		<li><span class="days">00</span><p class="timeRefDays">Days</p></li>
		<li><span class="hours">00</span><p class="timeRefHours">Hours</p></li>
		<li><span class="minutes">00</span><p class="timeRefMinutes">Minutes</p></li>
		<li><span class="seconds">00</span><p class="timeRefSeconds">Seconds</p></li>
	</ul>
</div>
```
Knob (automatic fallback)
More information about Knob: [Read more](https://github.com/aterrien/jQuery-Knob)
```html
<div id="countdown">
	<input class="days" type="text" value="0" data-readonly="true" />
	<input class="hours" type="text" value="0" data-readonly="true"  />
	<input class="minutes" type="text" value="0" data-readonly="true"  />
	<input class="seconds" type="text" value="0" data-readonly="true"  />
</div>
```
Knob Demo Code:
```html
<div id="countdown">
	<input class="days" type="text" value="0" data-readonly="true" data-thickness=".0" />
	<input class="hours" type="text" value="0" data-readonly="true" data-thickness=".0" />
	<input class="minutes" type="text" value="0" data-readonly="true" data-thickness=".0" />
	<input class="seconds" type="text" value="0" data-readonly="true" data-thickness=".0" />
</div>
```


#### Script tag:

```javascript
$("#countdown").countdown({knob: false/true, date:'dd/mm/yyyy hh:mm:ss',format:'on/off', callback: function },{active:'on/off',offset:number});
```

Example script call:
```javascript
$("#countdown").countdown({knob:false, date:'11/12/2013 19:50:00',format:'on', callback: function(){window.location = "http://razorphyn.com/products/comingsoon/admin/"}},{active:'on',offset:-11});
```
For an explanation open ```countdown.js```


