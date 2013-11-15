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
if you want to use Knob:
```
<link rel="stylesheet" type="text/css" href="css/countdown.css"/>
<script type="text/javascript"  src="js/jquery-1.10.2.js"></script>
<script type="text/javascript"  src="js/jquery.knob.js"></script>
<script type="text/javascript"  src="js/countdown.js"></script>
```
#### Body:

```html
<div class="#countdown"></div>
```

#### Script tag:

```javascript
$("#countdown_knob").countdown(
								{
									knob: false/true,
									option:{
										global:{option:value},
										day:{option:value},
										hour:{option:value},
										minute:{option:value},
										second:{option:value}
									},
									date:'mm/dd/yyyy hh:mm:ss',
									format:true/false,
									callback:function(){}
								},
								{
									timezone:false/true,
									offset: UTC_Offset
								}
							);
```

#### Example script call:
```javascript
//Default/Fallback Skin
$("#countdown").countdown(	
								{
									date:'11/12/2013 18:01:30',
									format:true,
									callback:function(){alert('Def Ready')}
								},
								{
									timezone:false,
									offset:0
								}
							);
//Use Knob Skin
$("#countdown").countdown(
							{
								knob: true,
								option:{
									global:{thickness:0.1},
									day:{thickness:0.2},
									hour:{thickness:0.4},
									minute:{thickness:0.7},
									second:{thickness:.0}
								},
								date:'05/19/2014 18:01:30',
								format:true,
								callback:function(){alert('Knob Ready')}
							},
							{
								timezone:true,
								offset:6
							}
						);
```

For more details open ```countdown.js``` and for a list UTC read UTC.txt

More information about Knob: [Read more](https://github.com/aterrien/jQuery-Knob)
