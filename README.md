countdown.js
============

Simple Jquery Countdown with redirect, time zone and double skin with fallback

## DEMO

[DEMO LINK](http://razorphyn.com/products/countdown/)

## Instructions

#### Head:
```
<link rel="stylesheet" type="text/css" href="css/countdown.css"/>
<script type="text/javascript"  src="js/jquery-1.10.2.js"></script>
<script type="text/javascript"  src="js/countdown.js"></script>
```
If you want to use Knob:
```
<link rel="stylesheet" type="text/css" href="css/countdown.css"/>
<script type="text/javascript"  src="js/jquery-1.10.2.js"></script>
<script type="text/javascript"  src="js/jquery.knob.js"></script>
<script type="text/javascript"  src="js/countdown.js"></script>
```

#### Body:

```html
<div class="#countdown" class="timerArea"></div>
```

#### Script tag:

```javascript
$("#countdown").countdown(
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
							);
```

#### Example script call:
```javascript
//Default/Fallback Skin
$("#countdown").countdown(	
								{
									dateEnd:'11/12/2012 18:01:30',
									format:true,
									callback:function(){alert('Site Ready')}
								}
							);
//Use Knob Skin
$("#countdown").countdown(
								{
									skin: 'knob',
									option:{
											global:{thickness:0.1},
											day:{thickness:0.2},
											hour:{thickness:0.4},
											minute:{thickness:0.7}
									},
									dateEnd:'05/19/2015 18:01:30',
									dateStart:'01/19/2012 18:01:30',
									format:true,
									callback:function(){alert('Site Ready')},
									timezone:true,
									offset:6
								}
							);
```
###Change Dinamically the options:

```javascript
$("#countdown_knob").trigger('configure',options)

//Example
```javascript
$("#countdown_knob").trigger('configure',{dateEnd:'09/23/2014 12:56:00'})

```

###Destroy COuntdown

```javascript
$("#countdown_knob").trigger('destroy')

```
For more details open ```countdown.js``` and for a list UTC read UTC.txt

More information about Knob: [Read more](https://github.com/aterrien/jQuery-Knob)
