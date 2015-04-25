var colors = ["rgb(215, 200, 23)", "rgb(236, 167, 140)",
               "#F35B20", "#FB9A00", "#FFCC00", "#FEF200", "#FA4955", "rgb(52, 200, 243);"];
  var restaraunts = ["Ad Making", "Album",
                     "Jingles", "Documentaries", "Radio Shows", "Short Films", "Event Mng.", "Bulk CD"];
  
  var startAngle = 180;
  var arc = Math.PI / 4;
  var spinTimeout = null;
  
  var spinArcStart = 10;
  var spinTime = 5;
  var spinTimeTotal = 0;
  
  var ctx;
  
  function draw() {
    drawRouletteWheel();
  }
  
  
  function drawRouletteWheel() {
    var canvas = document.getElementById("wheelcanvas");
    if (canvas.getContext) {
     var outsideRadius = 230;
      var textRadius = 180;
      var insideRadius = 125;
      
      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,500,500);
      
      
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      
      ctx.font = 'bold 15px sans-serif';
      
      for(var i = 0; i < 8; i++) {
        var angle = startAngle + i * arc;
        ctx.fillStyle = colors[i];
        
        ctx.beginPath();
        ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
        ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();
        
        ctx.save();
        ctx.shadowOffsetX = -1;
        ctx.shadowOffsetY = -1;
        ctx.shadowBlur    = 0;
        ctx.shadowColor   = "rgb(220,220,220)";
        ctx.fillStyle = "black";
        ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 250 + Math.sin(angle + arc / 2) * textRadius);
        // ctx.rotate(angle + arc / 2 + Math.PI / 2);
       var text = restaraunts[i];
       ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      } 
      
      //Arrow
     ctx.fillStyle = "black";
    /*  ctx.beginPath();
      ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
      ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
      ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
      ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
      ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
      ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
      ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
      ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
      ctx.fill(); */
    }
  }
  
  function spin() {
    spinAngleStart =  10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 6000;
    rotateWheel();
  }
  
  function reverseSpin() {
    spinAngleStart =  10;
    spinTime = 0;
    spinTimeTotal = Math.random() * 3 + 4 * 3000;
    reverseRotateWheel();
  }
  
   function reverseRotateWheel() {
    spinTime += 30;
    if(spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
    }
    var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle -= (spinAngle * Math.PI / 3000);
    drawRouletteWheel();
    spinTimeout = setTimeout('reverseRotateWheel()', 30);
  }
  
  
  function rotateWheel() {
    spinTime += 30;
    if(spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
    }
    var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    startAngle += (spinAngle * Math.PI / 3000);
    drawRouletteWheel();
    spinTimeout = setTimeout('rotateWheel()', 30);
  }
  
  function stopRotateWheel() {
    clearTimeout(spinTimeout);
    var degrees = startAngle * (180) / Math.PI + 720;
    var arcd = arc * 180 / Math.PI;
    var index = Math.floor((360 - degrees % 360) / arcd);
    ctx.save();
    ctx.font = 'bold 25px sans-serif';
    var text = restaraunts[index];
    //ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
//	$( "p" ).html( ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10) );
	 $(ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10));
	 
	var myp = document.getElementById('serviceheading');
	var myd = document.getElementById('servicedetails');
	var mys = document.getElementById('service-sub');
	var myw = document.getElementById('what-we-do');
	var mylink = document.getElementById('know-more');
	
	 if(text == "Ad Making"){
		myp.innerHTML = text;
		myd.innerHTML = "<h3>So you are thinking of starting a Advertising Campaign</h3>";
		mys.innerHTML = "AdShop is your source for television commercial production, and placing your ads locally, regionally, and nationally in the most cost effective manner possible. Our clients trust our professional staff and production capabilities every day and we will exceed your expectations.  See some of our commercials.";
		myw.innerHTML = "<h4> What we do for you:</h4> <ul> <li>Avoid the complexity of creating commercial scripts, ad production, TV station contracts, and TV spot scheduling. We take care of all work so you can manage your business. </li> <li>Directly work with all the networks to place your commercial exactly where needed. Whether you need to target a city, state, demographic, TV show, or a customer behavior such as an interest or income, we find the best ad placements to drive customers to your business and website.</li> <ul>";
		mylink.innerHTML = "<a href='services.php'> See More </a>";
		
	 }
	 if(text == "Radio Shows" ){
	myp.innerHTML = text;
		myd.innerHTML = "<h3>Get your voice out there!</h3>";
		mys.innerHTML = "Radio is everywhere and with the amount of time the average person spends in the car daily listening to the radio, advertising on the radio advertising can be an extremely lucrative possibility for you. Whether you want to advertise on the radio locally in your area, or reach a wider audience our Radio advertising agents can come up with a plan for your radio advertising needs.";
		myw.innerHTML = "<h4> What we do for you:</h4> <ul> <li>Our goal is to help you grow your business through television and radio advertising </li> <li>We can create original radio commercial spots for airing on whatever radio station, or show you choose, as well as LIVE Radio Reads by radio personalities.</li> <ul>";
		mylink.innerHTML = "<a href='services.php'> See More </a>";
	 }
	 
	  if(text == "Documentaries"){
	myp.innerHTML = text;
		myd.innerHTML = "<h3>Your Ideas converted into Documentaries</h3>";
		mys.innerHTML = "We will produce new relevant topical Feature and TV documentaries with universal resonance, that cross cultural boundaries and exploit world-wide markets. With a clear remit to support commercially viable work, AdShop will make documentaries that both entertain and inform in an international market place and make an impact with projects that are creatively distinctive with wide audience appeal.";
		myw.innerHTML = "<h4> What we do for you:</h4> <ul> <li>We deliver high quality productions with a well-told entertaining underlying story.</li> <li>AdShop shall primarily focus on documentary films from one or more categories like Human Interest, Politics, Music, and Nature and the Environment.</li> <ul>";
		mylink.innerHTML = "<a href='services.php'> See More </a>";
	 }
	 
	 if(text == "Jingles"){
	myp.innerHTML = text;
		myd.innerHTML = "<h3>Looking for some creative Rhythm or Jingles </h3>";
		mys.innerHTML = "Adshop also focuses on Audio Branding. We increase the effectiveness of radio and television advertising with the use of musical jingles. We write and produces musical jingles, musical logos and slogan jingles for radio and television advertising. We take care of it all for you. From creating the slogan ideas to recording the back ground music and singers. ";
		myw.innerHTML = "<h4> What we do for you:</h4> <ul> <li> We create custom Jingles specifically for our clients . Each jingle be created exclusively for our clients. </li> <li>You will have listeners easily remember your name and message.</li> <ul>";
		mylink.innerHTML = "<a href='services.php'> See More </a>";
	 }
	 
	  if(text == "Event Mng."){
	myp.innerHTML = text;
		myd.innerHTML = "<h3>Your Events, Our Management </h3>";
		mys.innerHTML = "We work with clients to understand the branding, messaging, and desired outcomes of each event. We ask the right questions and then present options for a custom-designed event that fits each companys goals, culture and budget. Be its your Personal Event, Corporate or Non-Profit Events or Weddings we handle everything for you. All you need to do is enjoy your event. Our mission is to create an unforgettable experience for each of our individual clients! We look forward to working with you to help turn your dream Event vision into reality!";
		myw.innerHTML = "<h4> What we do for you:</h4> <ul> <li> We plan a one-of-a-kind event that meets your objectives, surpasses your expectations, and leaves attendees excited about your next event. </li> <li>We put our creativity and resourcefulness to work for you. </li> <ul>";
		mylink.innerHTML = "<a href='services.php'> See More </a>";
	 }
	 
	   if(text == "Short Films"){
	myp.innerHTML = text;
		myd.innerHTML = "<h3>Films</h3>";
		mys.innerHTML = "Film is the most immediate and compelling way to communicate with an audience.It doesn’t matter whether you’re a brand, broadcaster or business. It’s premium content. But to work, it can’t just be creative. It has to be effective too. It has to grab people’s attention and provoke a response- and that’s where we come in. <br/> We’re a multi-skilled, award-winning creative production company that helps companies, channels, agencies and organisations tell their stories and connect with their audiences. We originate, think up, storyboard, write, shoot, animate and produce. In short: We create films people remember, use and want to share.";
		myw.innerHTML = "<h4> What we do for you:</h4> <ul> <li> We plan a one-of-a-kind event that meets your objectives, surpasses your expectations, and leaves attendees excited about your next event. </li> <li>We put our creativity and resourcefulness to work for you. </li> <ul>";
		mylink.innerHTML = "<a href='services.php'> See More </a>";
	 }
	 
	  if(text == "Album"){
	myp.innerHTML = text;
		myd.innerHTML = "<h3>Photographs are forever</h3>";
		mys.innerHTML = "AdShop provides custom album designs, image post-processing services, image retouching services, and custom wedding albums to clients from around the world. Our standard design service and color correction service include unlimited revisions - so you are guaranteed to be completely satisfied. AdShop leads the market in digital personalized photo products and services. AdShop helps our customers turn their precious memories into lasting keepsakes with award-winning photo books, announcements, invitations and stationery, as well as custom home decor products and unique photo gifts.";
		myw.innerHTML = "<h4> What we do for you:</h4> <ul> <li> We do processing of your precious memories to convert them in beautiful Albums so that you remember and preserve it for lifetime. </li> <li>We put our creativity and resourcefulness to work for you. </li> <ul>";
		mylink.innerHTML = "<a href='services.php'> See More </a>";
	 }
	 
   // ctx.restore();
  }
  
  function easeOut(t, b, c, d) {
    var ts = (t/=d)*t;
    var tc = ts*t;
    return b+c*(tc + -3*ts + 3*t);
  }
  
  draw();
  
 $(document).ready(function(){
  $('.main-circle').bind('mousewheel', function(event) {
  event = event|| window.event;
    if (event.originalEvent.wheelDelta >= 0) {
        reverseSpin();
    }
    else {
        spin();
    }
  });

   $('.main-circle').on ('DOMMouseScroll', function (e) {
    var delta = e.originalEvent.detail;
    
    if (delta < 0) {
     
		  reverseSpin();
				 
    } else if (delta > 0) {
           spin();
    }
	
});
});
/*

$('.main-circle').on ('mousewheel', function (e) {
    var delta = e.originalEvent.wheelDelta;
    
    if (delta < 0) {
         reverseSpin();
    } else if (delta > 0) {
          
		  spin();
    }
}); */

/*
$('.main-circle').on({
    'touchmove': function(e) { 
        spin();
    }
});

*/ 
 $(document).ready(function(){
$('.main-circle').bind('touchmove',function(e){
     var e = event || window.event;
	 e.preventDefault();
      spin();
});
});


/* jQuery('#main-circle').bind('swipedown',function(e){
alert("yolo");
});
*/


/* To see if user is visiting page for first time */

var visited = localStorage.getItem('visited');
if (!visited) {
$("#help").show(); // shows instruct page if first time
 $("#img-help").show(); // shows instruct page if first time
  localStorage.setItem('visited', true);
}
else{
$("#help").hide();  // hides instruct page if first time
 $("#img-help").hide(); // hides instruct page if first time
}




$("#help").click(function(){
    $("#help").hide(2000);
	 $("#img-help").fadeOut("1000");
});

$("#img-help").click(function(){
    $("#help").hide(2000);
	 $("#img-help").fadeOut("1000");
});


