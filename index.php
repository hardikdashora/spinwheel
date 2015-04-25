<!DOCTYPE HTML PUBLIC>
<html>
<head>

<!-- Scripts -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="js/jgestures.min.js"></script>


<!-- Loading CSS -->
<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="css/classes.css">
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">

<title>Spinwheel on scroll and touch (Responsive)</title>

<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">


</head>


<body class="hideScroll">
<div id="img-help" class="img-help">
	<img class="instruct-arrow" src="images/arrowfinal.png"/>
	<h2 class="help-font" style="">  Scroll  on <br/> the Wheel to <br/> Spin the Services </h2>
</div>

<div id="help" class="help"></div>


<!-- Header --> 

<!-- responsive header menu -->
<div class="main-body">
	<!-- header ends -->

	<!-- content body -->
	<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
	<div class="col-lg-6 col-md-6 col-sm-6">
		<div class="main-circle">
			<canvas id="wheelcanvas" width="500" height="500"></canvas>
		</div>

	</div>
	
	<div class="col-lg-1 col-md-1 col-sm-1 " style="width:5.3333%">
		<img class="black-arrows" src="images/barrow.png"/>
	</div>
<br/>
	<div class="col-lg-5 col-md-5 col-sm-5 service-details mar-top">
		<h1 id="serviceheading" class="service-title" style="color: #2C3E50;"> This is place where you get your data !! </h1> 

		<span id="servicedetails" style="color: #2C3E50; font-weight:regular">  This is place where you get your details !! </span> 
		<span id="service-sub" class="service-sub"></span>
		<br/><br/>
		<span id="what-we-do" class="what-we-do"></span> 
		<span id="know-more" class="know-more"></span> 

	</div>
</div>
	<!-- content body ends-->
<br/> <br/>
<div class="clear">&nbsp;</div>

	<!-- Footer -->

	
	

	</div>
</body>
<script src="js/script.js"></script>

</html>