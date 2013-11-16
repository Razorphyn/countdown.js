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
								{
									skin			:	'countdown_default',	//Set Skin. Default: countdown_default
									fallbackSkin	:	'countdown_default',	//Skin for the older browser that doesn't support canvas; Default: countdown_default
									option			:	{	//Skin Options, like Knob setting or different classes for the timer component
															global:{},//Apply to every timer section
															day:{max:null,eClass:'days'},//Apply to day timer section (overwrite or extend the global options)
															hour:{max:23,eClass:'hours'},//Apply to hour timer section (overwrite or extend the global options)
															minute:{max:59,eClass:'minutes'},//Apply to minute timer section (overwrite or extend the global options)
															second:{max:59,eClass:'seconds'}//Apply to second timer section (overwrite or extend the global options)
														},	
									dateStart		:	null,	//Date in this format: 'mm/dd/yyyy hh:mm:ss'. Required for Knob Skin
									dateEnd			:	null,	//Date in this format: 'mm/dd/yyyy hh:mm:ss'
									format			:	true,	//One digit number transformed to: 01 02...
									callback		:	null	//Callback on countdown finish, Example: redirect
								},
								{
									timezone	:	false,	//Activate the worldwide sync
									offset		:	0		//The UTC offset, you can find your UTC from UTC.txt, just copy and paste
								}
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
								},
								{
									timezone:false
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
									callback:function(){alert('Site Ready')}
								},
								{
									timezone:true,
									offset:6
								}
							);
```

For more details open ```countdown.js``` and for a list UTC read UTC.txt

More information about Knob: [Read more](https://github.com/aterrien/jQuery-Knob)
