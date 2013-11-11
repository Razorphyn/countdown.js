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

#### Body:

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


#### Script tag:

```javascript
$("#countdown").countdown({date:'dd/mm/yyyy hh:mm:ss',format:'on/off', callback: function },{active:'on/off',offset:number});
```
change

``` function(){window.location = "redirect_url";} ``` to ```null``` to disable redirect

Example script call:
```javascript
$("#countdown").countdown({date:'11/12/2013 19:50:00',format:'on', callback: function(){window.location = "http://razorphyn.com/products/comingsoon/admin/"}},{active:'on',offset:-11});
```
For an exmplaination open ```countdown.js```


