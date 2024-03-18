

function program() {
    
    title("SpacePlant-it");
    size(600, 600);
    
    // All code goes here
	/******************** SPACE PLANT-ET **********************/
	
	/** Setup **/
	// {
	// Stuff for graphics
	smooth();
	var canvasWidth = 600;
	var canvasHeight = 600;
	createGraphics(canvasWidth, canvasHeight, P2D);
	textAlign(CENTER, CENTER);
	noStroke();
	// }
	
	/** Variables **/
	// {
	
	// For intro
	var iFrame = 0;
	
	// For text
	var y = 600;
	
	// Used
	var used = [false, false, false];
	
	// Seed num
	var seedNum = 0;
	
	// Spaceship stuff
	var spaceX = 0;
	
	// Spaceship flame stuff
	var flameNum = 0;
	    
	// Counter for spaceship getting blown up
	var counter = 0;
	
	// Spaceship particle stuff
	var particleSpin = 0;
	
	var particleNum = 1;
	
	var particleNum2 = 0;
	
	// Meteor anim stuff
	var meteorX = 877;
	
	var meteorY = -426;
	
	var tailNum = 0;
	
	// Seeds owned
	var owned = [false, false, false];
	
	// Cur seed
	var seed = "potato";
	
	// Keys object
	var keys = {};
	
	// Cur scene
	var scene = "intro";
	
	// How fast it grows
	var multiplier = 1;
	
	// Money
	var money = 3;
	
	// Pot your using
	var pot = 0;
	
	// Where the plant is
	var pFrame = 0;
	
	// Plant array
	var plants = [];
	
	// If theres a plant
	var slots = [false, false, false];
	
	// Wether or not you clicked
	var clicked = false;
	// }
	
	/** Objects **/
	// {
	var seedObj = {
	    potatoSeeds : 0,
	    carrotSeeds : 0,
	    tomatoSeeds : 0,
	    pumpkinSeeds: 0,
	};
	// }
	
	/** Functions **/
	// {
	// background
	var bbackground = function() {
	    var flames = [
	    
	        function(){
	        
	            //flames
	            noStroke();
	            pushMatrix();
	            translate(-33,179);
	            scale(0.756,0.709);
	            
	            
	            fill(237, 175, 31);
	            
	            beginShape();
	        
	            curveVertex(-61,104); 
	            curveVertex(49,52);
	            curveVertex(-108,64); 
	            curveVertex(-18,24); 
	            curveVertex(-116,-25);
	            curveVertex(67,3); 
	            curveVertex(-61,-59);
	            curveVertex(234,-4);
	            curveVertex(225,61); 
	            curveVertex(-61,104);
	            curveVertex(49,52); 
	            curveVertex(-108,64);
	            
	            endShape();
	            
	            translate(70,10);
	            scale(0.757,0.594);
	            fill(247, 224, 19);
	            
	            beginShape();
	        
	            curveVertex(-61,104); 
	            curveVertex(49,52);
	            curveVertex(-108,64); 
	            curveVertex(-18,24); 
	            curveVertex(-116,-25);
	            curveVertex(67,3); 
	            curveVertex(-61,-59);
	            curveVertex(234,-4);
	            curveVertex(225,61); 
	            curveVertex(-61,104);
	            curveVertex(49,52); 
	            curveVertex(-108,64);
	            
	            endShape();
	            
	            popMatrix();
	        },
	        
	        function(){
	        
	            //flames
	            noStroke();
	            pushMatrix();
	            translate(-42,179);
	            scale(0.767,0.709);
	            fill(235, 117, 33);
	            beginShape();
	            curveVertex(-61,104); 
	            curveVertex(49,52);
	            curveVertex(-108,64); 
	            curveVertex(-18,24); 
	            curveVertex(-116,-25);
	            curveVertex(67,3); 
	            curveVertex(-61,-59);
	            curveVertex(234,-4);
	            curveVertex(225,61); 
	            curveVertex(-61,104);
	            curveVertex(49,52); 
	            curveVertex(-108,64);
	            
	            endShape();
	            
	            translate(70,10);
	            scale(0.757,0.388);
	            fill(237, 177, 12);
	            
	            beginShape();
	        
	            curveVertex(-61,104); 
	            curveVertex(49,52);
	            curveVertex(-108,64); 
	            curveVertex(-18,24); 
	            curveVertex(-116,-25);
	            curveVertex(67,3); 
	            curveVertex(-61,-59);
	            curveVertex(234,-4);
	            curveVertex(225,61); 
	            curveVertex(-61,104);
	            curveVertex(49,52); 
	            curveVertex(-108,64);
	            
	            endShape();
	            
	            popMatrix();
	    
	        },
	        
	        function(){
	        
	            //flames
	            noStroke();
	            pushMatrix();
	            translate(-33,179);
	            scale(0.756,0.709);
	            
	            
	            fill(237, 175, 31);
	            
	            beginShape();
	        
	            curveVertex(-61,104); 
	            curveVertex(49,52);
	            curveVertex(-108,64); 
	            curveVertex(-18,24); 
	            curveVertex(-116,-25);
	            curveVertex(67,3); 
	            curveVertex(-61,-59);
	            curveVertex(234,-4);
	            curveVertex(225,61); 
	            curveVertex(-61,104);
	            curveVertex(49,52); 
	            curveVertex(-108,64);
	            
	            endShape();
	            
	            translate(70,10);
	            scale(0.757,0.594);
	            fill(247, 224, 19);
	        
	            beginShape();
	        
	            curveVertex(-61,104); 
	            curveVertex(49,52);
	            curveVertex(-108,64); 
	            curveVertex(-18,24); 
	            curveVertex(-116,-25);
	            curveVertex(67,3); 
	            curveVertex(-61,-59);
	            curveVertex(234,-4);
	            curveVertex(225,61); 
	            curveVertex(-61,104);
	            curveVertex(49,52); 
	            curveVertex(-108,64);
	            
	            endShape();
	            
	            popMatrix();
	        },
	    ];
	
	    var spaceship = [
	        function(X,Y,SizeX,SizeY){
	            pushMatrix();
	            translate(X,Y);
	            scale(SizeX,SizeY);
	            
	            //flames
	            flames[flameNum]();
	            
	            //hull
	            pushMatrix();
	            
	            translate(216,197);
	            scale(1.000,1.000);
	            
	            noStroke();
	            fill(224, 221, 221);
	            
	            beginShape();
	        
	            curveVertex(18,52);
	            curveVertex(-98,44); 
	            curveVertex(-101,-39); 
	            curveVertex(-5,-52); 
	            curveVertex(127,-48);
	            curveVertex(188,6);
	            curveVertex(117,50); 
	            curveVertex(18,52); 
	            curveVertex(-98,44);
	            curveVertex(-101,-39); 
	            
	            endShape();
	        
	            //nosecone
	            fill(207, 11, 11);
	            
	            beginShape();
	            curveVertex(-5,-52); 
	            curveVertex(127,-48);
	            curveVertex(188,6);
	            curveVertex(117,50); 
	            curveVertex(18,52); 
	            endShape();
	            
	            popMatrix();
	        
	        
	            //window
	            fill(131, 222, 247);
	            stroke(140, 138, 138);
	            strokeWeight(10);
	            ellipse(271,195,54,54);
	            
	            //bolts
	            noStroke();
	            fill(184, 178, 178);
	            ellipse(279,169,5,5);
	            ellipse(290,175,5,5);
	            ellipse(266,168,5,5);
	            ellipse(254,174,5,5);
	            ellipse(246,184,5,5);
	            ellipse(244,197,5,5);
	            ellipse(297,186,5,5);
	            ellipse(298,199,5,5);
	            ellipse(294,210,5,5);
	            ellipse(285,218,5,5);
	            ellipse(249,209,5,5);
	            ellipse(270,221,5,5);
	            ellipse(257,217,5,5);
	            
	            //tail fins
	            pushMatrix();
	            translate(107,123);
	            scale(0.626,0.461);
	            
	            fill(207, 11, 11);
	        
	            beginShape();
	         
	            curveVertex(-5,21);
	            curveVertex(-88,-75);
	            curveVertex(100,-30);
	            curveVertex(131,85);
	            curveVertex(39,92); 
	            curveVertex(-5,21); 
	            curveVertex(-88,-75);
	            curveVertex(100,-30);
	            
	            endShape();
	            
	            popMatrix();
	            
	            pushMatrix();
	            translate(107,264);
	            scale(0.626,-0.461);
	            
	            fill(207, 11, 11);
	        
	            beginShape();
	         
	            curveVertex(-5,21);
	            curveVertex(-88,-75);
	            curveVertex(100,-30);
	            curveVertex(131,85);
	            curveVertex(39,92); 
	            curveVertex(-5,21); 
	            curveVertex(-88,-75);
	            curveVertex(100,-30);
	            
	            endShape();
	            
	            popMatrix();
	            
	            popMatrix();
	        
	        },
	        
	        function(X,Y,SizeX,SizeY,Spin){
	            
	            pushMatrix();
	            translate(X,Y);
	            scale(SizeX,SizeY);
	            rotate(Spin);
	            
	            noStroke();
	            fill(237, 175, 3);
	            ellipse(115,78,5,11);
	            ellipse(97,100,9,12);
	            ellipse(158,90,12,8);
	            ellipse(117,97,10,7);
	            ellipse(100,39,5,4);
	            ellipse(80,83,17,7);
	            ellipse(147,76,10,10);
	            ellipse(100,127,5,10);
	            ellipse(138,128,7,5);
	            ellipse(85,109,6,5);
	            ellipse(158,100,6,5);
	            
	            fill(237, 215, 19);
	            ellipse(62,100,10,10);
	            ellipse(87,63,7,6);
	            ellipse(183,87,6,10);
	            ellipse(100,108,8,7);
	            ellipse(111,131,10,4);
	            ellipse(174,120,4,10);
	            ellipse(121,152,18,10);
	            ellipse(77,94,5,10);
	            ellipse(140,50,4,7);
	            
	            fill(235, 108, 108);
	            ellipse(136,100,10,6);
	            ellipse(100,68,7,5);
	            ellipse(100,128,10,5);
	            ellipse(77,100,8,9);
	            ellipse(128,72,5,12);
	            ellipse(171,66,10,4);
	            ellipse(152,117,5,5);
	            
	            fill(247, 233, 170);
	            ellipse(59,67,7,10);
	            ellipse(77,119,10,10);
	            ellipse(127,118,5,6);
	            ellipse(114,60,6,10);
	            
	            
	            popMatrix();
	            
	        },
	        
	        function(X,Y,SizeX,SizeY,Spin){
	            
	            pushMatrix();
	            translate(X,Y);
	            scale(SizeX,SizeY);
	            rotate(Spin);
	            
	            noStroke();
	            fill(255, 187, 0);
	            ellipse(100,100,7,10);
	            ellipse(127,100,10,15);
	            ellipse(108,90,13,10);
	            ellipse(110,110,10,7);
	            ellipse(100,59,5,10);
	            ellipse(80,83,17,7);
	            ellipse(147,76,10,10);
	            ellipse(100,127,5,10);
	            ellipse(137,125,7,5);
	            ellipse(85,109,6,5);
	            ellipse(151,100,6,5);
	            
	            fill(255, 230, 0);
	            ellipse(65,100,10,10);
	            ellipse(87,48,7,6);
	            ellipse(171,87,6,10);
	            ellipse(100,108,8,7);
	            ellipse(128,72,10,4);
	            ellipse(156,105,4,10);
	            ellipse(121,141,18,10);
	            ellipse(77,94,5,10);
	            ellipse(140,50,4,7);
	            
	            fill(219, 116, 116);
	            ellipse(136,100,10,6);
	            ellipse(100,68,7,5);
	            ellipse(100,128,10,5);
	            ellipse(77,100,8,9);
	            ellipse(128,72,5,12);
	            ellipse(171,66,10,4);
	            ellipse(152,117,5,5);
	            
	            fill(252, 235, 159);
	            ellipse(42,79,7,10);
	            ellipse(77,125,10,10);
	            ellipse(184,100,5,6);
	            ellipse(134,88,6,10);
	            
	            
	            popMatrix();
	        }
	        
	    ];
	    
	    var tail = [
	    
	        function(X,Y,SizeX,SizeY,Spin){
	            pushMatrix();
	            translate(X,Y);
	            rotate(Spin);
	            scale(SizeX,SizeY);
	            
	            noStroke();
	          
	            fill(242, 139, 36);
	            
	            beginShape();
	            
	            curveVertex(-4,49);
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            curveVertex(64,196);
	            curveVertex(-28,173);
	            curveVertex(-4,49); 
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            
	            endShape();
	            
	            translate(11,10);
	            scale(0.809,0.823);
	            
	             fill(255, 187, 0);
	            
	            beginShape();
	            
	            curveVertex(-4,49);
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            curveVertex(64,196);
	            curveVertex(-28,173);
	            curveVertex(-4,49); 
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            
	            endShape();
	            
	            
	            translate(11,10);
	            scale(0.809,0.823);
	            fill(252, 228, 15);
	            
	            beginShape();
	            
	            curveVertex(-4,49);
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            curveVertex(64,196);
	            curveVertex(-28,173);
	            curveVertex(-4,49); 
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            
	            endShape();
	            
	            popMatrix();
	        },
	        
	        function(X,Y,SizeX,SizeY,Spin){
	            pushMatrix();
	            translate(X,Y);
	            rotate(Spin);
	            scale(SizeX,SizeY);
	            
	            noStroke();
	          
	            fill(245, 126, 8);
	            
	            beginShape();
	            
	            curveVertex(-4,49);
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            curveVertex(64,196);
	            curveVertex(-28,173);
	            curveVertex(-4,49); 
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            
	            endShape();
	            
	            translate(22,10);
	            scale(0.692,0.603);
	            
	            fill(255, 166, 0);
	            
	            beginShape();
	            
	            curveVertex(-4,49);
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            curveVertex(64,196);
	            curveVertex(-28,173);
	            curveVertex(-4,49); 
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            
	            endShape();
	            
	            
	            translate(11,10);
	            scale(0.809,0.823);
	            fill(250, 207, 15);
	            
	            beginShape();
	            
	            curveVertex(-4,49);
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            curveVertex(64,196);
	            curveVertex(-28,173);
	            curveVertex(-4,49); 
	            curveVertex(167,-199);
	            curveVertex(117,111); 
	            
	            endShape();
	            
	            popMatrix();
	        },
	    
	    ];
	
	    var meteor =  function(X,Y,SizeX,SizeY){
	        
	        pushMatrix();
	        translate(X,Y);
	        scale(SizeX,SizeY);
	        
	        //meteor
	        fill(181, 98, 14);
	        noStroke();
	        ellipse(100,100,100,100);
	        
	        //craters
	        fill(194, 134, 74);
	        ellipse(75,100,14,15);
	        ellipse(114,81,18,18);
	        ellipse(110,126,10,10);
	        ellipse(83,126,4,5);
	        ellipse(69,74,6,6);
	        ellipse(134,106,7,7);
	        ellipse(99,100,9,9);
	        ellipse(91,72,3,3);
	        ellipse(145,90,3,3);
	        ellipse(62,117,3,3);
	        
	        
	        popMatrix();
	        
	    };
	    
	    noStroke();
	    var starW = random(0,4);
	    var starH = random(0,4);
	    
	    var starW2 = random(0,4);
	    var starH2 = random(0,4);
	    
	    background(5, 13, 130);
	    
	    var stars = function(X,Y,X2,Y2){
	        fill(252, 252, 252);
	        ellipse(X,Y,starW,starH);
	        ellipse(X2,Y2,starW2,starH2);
	    };
	    
	    stars(154,160,100,100);
	    stars(167,339,242,100);
	    stars(374,160,169,32);
	    stars(350,295,287,205);
	    stars(403,192,188,230);
	    stars(42,310,70,142);
	    stars(6,113,377,57);
	    stars(107,447,452,100);
	    stars(120,193,32,242);
	    stars(48,8,304,16);
	    stars(491,64,422,36);
	    stars(249,276,316,99);
	    stars(15,384,112,276);
	    stars(302,326,552,14);
	    stars(85,368,9,586);
	    stars(60,506,11,465);
	    stars(490,173,581,54);
	    stars(167,339,565,125);
	    stars(217,402,100,551);
	    stars(287,477,393,422);
	    stars(330,369,468,244);
	    stars(146,573,190,477);
	    stars(540,215,588,188);
	    stars(167,339,242,175);
	    stars(426,290,386,345);
	    stars(167,521,406,484);
	    stars(568,276,506,319);
	    stars(256,560,232,503);
	    stars(466,383,543,506);
	    stars(446,454,267,436);
	    stars(559,427,526,350);
	    stars(588,339,375,528);
	    stars(304,595,494,551);
	    stars(482,493,574,577);
	    stars(424,576,16,218);
	    
	    if (spaceX < 490 || counter === 1) {
	        spaceship[0](-87 + spaceX, 86, 0.203, 0, 0.185);
	    } else {
	        spaceship[particleNum](spaceX + -91, 86, 0.5, 0.5, particleSpin);
	        
	        particleNum2+=0.3;
	        
	        particleSpin++;
	        
	        if (particleNum2 > 1) {
	            particleNum++;
	            particleNum2 = 0;
	        }
	        
	        if (particleNum > 2) {
	            particleNum = 1;
	        }
	        
	        counter = 0;
	    }
	    
	    spaceX+=3;
	    
	    flameNum++;
	    
	    tail[tailNum](meteorX + 72, meteorY, 0.408, 0.359, 10);
	    meteor(meteorX, meteorY, 0.672, 0.672);
	    
	    if (spaceX > 750) {
	        particleSpin = 0;
	        spaceX = 0;
	        
	        counter++;
	    }
	    
	    if (flameNum > 2) {
	        flameNum = 0;
	    }
	    
	    meteorX += -3;
	    meteorY += 3;
	    
	    if (meteorX < -675) {
	        meteorX = 831;
	        meteorY = -380;
	    }
	    
	    tailNum++;
	    
	    if (tailNum === 2) {
	        tailNum = 0;
	    }
	};
	
	// Pot1
	var pot1 = function(X, Y) {
	    var sizeXpos = 1.669;
	    var sizeYpos = 1.517;
	    
	    noStroke();
	    fill(191, 150, 63);
	    
	    beginShape();
	
	    curveVertex(22/sizeXpos+X,219/sizeYpos+Y);
	    curveVertex(4/sizeXpos+X,49/sizeYpos+Y); 
	    curveVertex(-29/sizeXpos+X,11/sizeYpos+Y);
	    curveVertex(110/sizeXpos+X,-8/sizeYpos+Y);
	    curveVertex(249/sizeXpos+X,11/sizeYpos+Y); 
	    curveVertex(213/sizeXpos+X,47/sizeYpos+Y); 
	    curveVertex(187/sizeXpos+X,212/sizeYpos+Y);
	    curveVertex(109/sizeXpos+X,241/sizeYpos+Y);
	    curveVertex(22/sizeXpos+X,219/sizeYpos+Y); 
	    curveVertex(4/sizeXpos+X,49/sizeYpos+Y);
	    curveVertex(-29/sizeXpos+X,11/sizeYpos+Y); 
	
	    endShape();
	
	
	    //inside of pot
	    fill(117, 83, 14);
	    
	    var sizeXpos2 = 1.811;
	    var sizeYpos2 = 1.591;
	    var dirtXpos = X + 5;
	    var dirtYpos = Y + 1;
	
	    beginShape();
	
	    curveVertex(22/sizeXpos2+dirtXpos,219/sizeYpos2+dirtYpos);
	    curveVertex(4/sizeXpos2+dirtXpos,49/sizeYpos2+dirtYpos); 
	    curveVertex(-29/sizeXpos2+dirtXpos,11/sizeYpos2+dirtYpos);
	    curveVertex(110/sizeXpos2+dirtXpos,-8/sizeYpos2+dirtYpos);
	    curveVertex(249/sizeXpos2+dirtXpos,11/sizeYpos2+dirtYpos); 
	    curveVertex(213/sizeXpos2+dirtXpos,47/sizeYpos2+dirtYpos); 
	    curveVertex(187/sizeXpos2+dirtXpos,212/sizeYpos2+dirtYpos);
	    curveVertex(109/sizeXpos2+dirtXpos,241/sizeYpos2+dirtYpos);
	    curveVertex(22/sizeXpos2+dirtXpos,219/sizeYpos2+dirtYpos); 
	    curveVertex(4/sizeXpos2+dirtXpos,49/sizeYpos2+dirtYpos);
	    curveVertex(-29/sizeXpos2+dirtXpos,11/sizeYpos2+dirtYpos); 
	
	    endShape();
	};
	
	// Pot2
	var pot2 = function(X, Y) {
	    //good 'ole impromptu pot
	    
	    var sizeX = 1.180;
	    var sizeY = 1.167;
	    
	    var stringSizeX = sizeX/0.207;
	    var stringSizeY = sizeY/0.628;
	    
	    var stringXpos = X+-85;
	    var stringYpos = Y+-16;
	    
	    stroke(3, 3, 3);
	    
	    //tag string
	    beginShape();
	     
	    curveVertex(-20/stringSizeX+stringXpos,76/stringSizeY+stringYpos);
	    curveVertex(83/stringSizeX+stringXpos,-54/stringSizeY+stringYpos); 
	    curveVertex(187/stringSizeX+stringXpos,67/stringSizeY+stringYpos);
	    curveVertex(81/stringSizeX+stringXpos,-53/stringSizeY+stringYpos);
	    curveVertex(-20/stringSizeX+stringXpos,75/stringSizeY+stringYpos); 
	    curveVertex(-71/stringSizeX+stringXpos,97/stringSizeY+stringYpos); 
	    curveVertex(-20/stringSizeX+stringXpos,76/stringSizeY+stringYpos); 
	    curveVertex(83/stringSizeX+stringXpos,-54/stringSizeY+stringYpos); 
	    curveVertex(187/stringSizeX+stringXpos,67/stringSizeY+stringYpos);
	        
	    endShape();
	    
	    //tag
	    
	    noStroke();
	    fill(148, 209, 247);
	    
	    var tagX = X +-147;
	    var tagY = Y + 48;
	    var tagSizeX = sizeX/0.364;
	    var tagSizeY = sizeY/0.384;
	
	    beginShape();
	
	    vertex(173/tagSizeX+tagX,-41/tagSizeY+tagY);
	    vertex(166/tagSizeX+tagX,50/tagSizeY+tagY);
	    vertex(47/tagSizeX+tagX,166/tagSizeY+tagY);
	    vertex(-47/tagSizeX+tagX,63/tagSizeY+tagY);
	    vertex(75/tagSizeX+tagX,-38/tagSizeY+tagY); 
	    vertex(173/tagSizeX+tagX,-41/tagSizeY+tagY);
	    vertex(166/tagSizeX+tagX,50/tagSizeY+tagY);
	    vertex(47/tagSizeX+tagX,166/tagSizeY+tagY); 
	    
	    endShape();
	
	    //laces
	    noStroke();
	    fill(54, 53, 53);
	    ellipse(X+62,Y+106,10+sizeX/10,12+sizeY/10);
	    ellipse(X+62,Y+85,10+sizeX/10,12+sizeY/10);
	    ellipse(X+62,Y+63,10+sizeX/10,12+sizeY/10);
	    ellipse(X+62,Y+40,10+sizeX/10,12+sizeY/10); 
	    ellipse(X+68,Y+126,10+sizeX/10,12+sizeY/10);
	    ellipse(X+85,Y+143,12+sizeY/10,10+sizeX/10);
	    ellipse(X+107,Y+153,12+sizeY/10,10+sizeX/10);
	    ellipse(X+134,Y+163,12+sizeY/10,10+sizeX/10);
	    
	    
	    
	    noStroke();
	    fill(140, 135, 135);
	
	    beginShape();
	 
	    curveVertex(-16/sizeX+X,15/sizeY+Y);
	    curveVertex(46/sizeX+X,17/sizeY+Y);
	    curveVertex(72/sizeX+X,23/sizeY+Y);
	    curveVertex(78/sizeX+X,145/sizeY+Y);
	    curveVertex(169/sizeX+X,195/sizeY+Y); 
	    curveVertex(232/sizeX+X,210/sizeY+Y);
	    curveVertex(231/sizeX+X,292/sizeY+Y); 
	    curveVertex(-14/sizeX+X,285/sizeY+Y); 
	    curveVertex(-55/sizeX+X,165/sizeY+Y);
	    curveVertex(-64/sizeX+X,20/sizeY+Y); 
	    curveVertex(-16/sizeX+X,15/sizeY+Y); 
	    curveVertex(46/sizeX+X,17/sizeY+Y); 
	    curveVertex(72/sizeX+X,23/sizeY+Y);
	    
	    endShape();
	
	    //dirt
	    fill(115, 92, 17);
	    
	    var dirtX = X +1.9;
	    var dirtY = Y +20.1;
	    
	    var dirtSizeX = sizeX/0.924;
	    var dirtSizeY = sizeY/0.898;
	    
	    beginShape();
	 
	    curveVertex(-16/dirtSizeX+dirtX,15/dirtSizeY+dirtY);
	    curveVertex(46/dirtSizeX+dirtX,17/dirtSizeY+dirtY);
	    curveVertex(72/dirtSizeX+dirtX,23/dirtSizeY+dirtY);
	    curveVertex(78/dirtSizeX+dirtX,145/dirtSizeY+dirtY);
	    curveVertex(169/dirtSizeX+dirtX,195/dirtSizeY+dirtY); 
	    curveVertex(232/dirtSizeX+dirtX,210/dirtSizeY+dirtY);
	    curveVertex(231/dirtSizeX+dirtX,292/dirtSizeY+dirtY); 
	    curveVertex(-14/dirtSizeX+dirtX,285/dirtSizeY+dirtY); 
	    curveVertex(-55/dirtSizeX+dirtX,165/dirtSizeY+dirtY);
	    curveVertex(-64/dirtSizeX+dirtX,20/dirtSizeY+dirtY); 
	    curveVertex(-16/dirtSizeX+dirtX,15/dirtSizeY+dirtY); 
	    curveVertex(46/dirtSizeX+dirtX,17/dirtSizeY+dirtY); 
	    curveVertex(72/dirtSizeX+dirtX,23/dirtSizeY+dirtY);
	    
	    endShape();
	
	    //text on tag
	    fill(3, 3, 3);
	    textSize(sizeX*11.21);
	    text("Made",X+-133,Y+58);
	    text("on",X+-133,Y+70);
	    text("Earth",X+-148,Y+84);
	    
	    //hole in tag
	    ellipse(X+-99,Y+41,sizeX*4.4,sizeY*5.1);
	};
	
	// Which pot to choose from
	var wpot = function(x, y, type) {
	    switch (type) {
	        case 0:
	            pot1(x, y);
	            break;
	        case 1:
	            pot2(x, y);
	            break;
	    }
	};
	
	// Spaceship landed
	var homeShip = function(X,Y,SizeX,SizeY,spin){
	    pushMatrix();
	    translate(X,Y);
	    rotate(spin);
	    scale(SizeX,SizeY);
	    
	    //hull
	    pushMatrix();
	    
	    translate(216,197);
	    scale(1.000,1.000);
	    
	    noStroke();
	    fill(224, 221, 221);
	    
	    beginShape();
	
	    curveVertex(18,52);
	    curveVertex(-98,44); 
	    curveVertex(-101,-39); 
	    curveVertex(-5,-52); 
	    curveVertex(127,-48);
	    curveVertex(188,6);
	    curveVertex(117,50); 
	    curveVertex(18,52); 
	    curveVertex(-98,44);
	    curveVertex(-101,-39); 
	    
	    endShape();
	
	    //nosecone
	    fill(207, 11, 11);
	    
	    beginShape();
	
	    curveVertex(-5,-52); 
	    curveVertex(127,-48);
	    curveVertex(188,6);
	    curveVertex(117,50); 
	    curveVertex(18,52); 
	    
	    endShape();
	
	    popMatrix();
	    
	    
	    //window
	    fill(131, 222, 247);
	    stroke(140, 138, 138);
	    strokeWeight(10);
	    ellipse(271,195,54,54);
	    
	    //bolts
	    noStroke();
	    fill(184, 178, 178);
	    ellipse(279,169,5,5);
	    ellipse(290,175,5,5);
	    ellipse(266,168,5,5);
	    ellipse(254,174,5,5);
	    ellipse(246,184,5,5);
	    ellipse(244,197,5,5);
	    ellipse(297,186,5,5);
	    ellipse(298,199,5,5);
	    ellipse(294,210,5,5);
	    ellipse(285,218,5,5);
	    ellipse(249,209,5,5);
	    ellipse(270,221,5,5);
	    ellipse(257,217,5,5);
	    
	    //tail fins
	    pushMatrix();
	    translate(107,123);
	    scale(0.626,0.461);
	    
	    fill(207, 11, 11);
	
	    beginShape();
	 
	    curveVertex(-5,21);
	    curveVertex(-88,-75);
	    curveVertex(100,-30);
	    curveVertex(131,85);
	    curveVertex(39,92); 
	    curveVertex(-5,21); 
	    curveVertex(-88,-75);
	    curveVertex(100,-30);
	    
	    endShape();
	
	    popMatrix();
	    
	    
	    pushMatrix();
	    translate(107,264);
	    scale(0.626,-0.461);
	    
	    fill(207, 11, 11);
	
	    beginShape();
	 
	    curveVertex(-5,21);
	    curveVertex(-88,-75);
	    curveVertex(100,-30);
	    curveVertex(131,85);
	    curveVertex(39,92); 
	    curveVertex(-5,21); 
	    curveVertex(-88,-75);
	    curveVertex(100,-30);
	    
	    endShape();
	
	    popMatrix();
	    
	    popMatrix();
	    
	    noStroke();
	
	};
	
	// Potato stage 0
	var potato0 = function(X,Y,SizeX,SizeY){
	
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    noStroke();
	    
	    //roots
	    pushMatrix();
	    translate(235,194);
	    scale(0.193,0.205);
	    
	    fill(222, 222, 205);
	    
	    beginShape();
	 
	    vertex(46,-36);
	    vertex(44,-89);
	    vertex(64,-91);
	    vertex(68,-37); 
	    vertex(123,34); 
	    vertex(66,-17); 
	    vertex(64,117);
	    vertex(48,-16);
	    vertex(-2,35); 
	    vertex(46,-36);
	    vertex(44,-89);
	    vertex(64,-91);
	    
	    endShape();
	
	    popMatrix();
	    
	    //potato chunk
	    fill(201, 165, 99);
	    arc(253,162,40,40,89,190);
	    
	    //stem
	    pushMatrix();
	    translate(242,138);
	    scale(0.042,0.081);
	    
	    fill(101, 194, 75);
	
	    beginShape();
	 
	    curveVertex(70,-107); 
	    curveVertex(142,233);
	    curveVertex(68,289); 
	    curveVertex(2,236);
	    curveVertex(70,-107);
	    curveVertex(142,233);
	    curveVertex(68,289);
	    
	    endShape();
	
	    popMatrix();
	    
	    //leaf
	    pushMatrix();
	    translate(188,92);
	    scale(0.161,0.141);
	    
	    beginShape();
	    
	    vertex(199,222);
	    bezierVertex(276,209,292,305,350,349);
	    bezierVertex(238,363,258,259,199,222);
	    
	    endShape();
	    
	    popMatrix();
	    
	    popMatrix();
	    
	    noStroke();
	
	};
	
	// Potato stage 1
	var potato1 = function(X,Y,SizeX,SizeY){
	
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    //roots
	    pushMatrix();
	    translate(169,154);
	    scale(0.209,0.251);
	    
	    noStroke();
	    fill(235, 237, 197);
	    
	    beginShape();
	 
	    vertex(78,-134);
	    vertex(92,-135); 
	    vertex(91,-77); 
	    vertex(99,-56); 
	    vertex(138,-33);
	    vertex(172,-55);
	    vertex(150,-93);
	    vertex(188,-54); 
	    vertex(141,-22);
	    vertex(93,-44); 
	    vertex(95,15);
	    vertex(129,19);
	    vertex(189,-27);
	    vertex(148,24); 
	    vertex(247,37);
	    vertex(207,39);
	    vertex(248,108);
	    vertex(196,42);
	    vertex(95,25);
	    vertex(92,72); 
	    vertex(138,116);
	    vertex(173,84); 
	    vertex(150,119);
	    vertex(215,217); 
	    vertex(170,172); 
	    vertex(121,196);
	    vertex(166,157);
	    vertex(91,87); 
	    vertex(92,121);
	    vertex(86,288); 
	    vertex(70,142); 
	    vertex(3,221); 
	    vertex(69,126); 
	    vertex(69,79); 
	    vertex(10,84);
	    vertex(0,143); 
	    vertex(-4,86); 
	    vertex(-78,129);
	    vertex(-17,80);
	    vertex(-84,50); 
	    vertex(-7,71); 
	    vertex(74,62); 
	    vertex(70,9); 
	    vertex(45,-13);
	    vertex(73,-3); 
	    vertex(71,-64);
	    vertex(32,-50);
	    vertex(4,55); 
	    vertex(17,-46); 
	    vertex(-12,-35);
	    vertex(-58,-23);
	    vertex(76,-78); 
	    vertex(78,-134);
	    vertex(92,-135);
	    vertex(91,-77);
	    
	    endShape();
	
	    popMatrix();
	    
	    //leaves
	    
	    //leaf 1
	    pushMatrix();
	    translate(140,40);
	    scale(0.155,0.168);
	    
	    fill(111, 222, 109);
	    beginShape();
	    vertex(97,217);
	    bezierVertex(94,217,96,469,308,480);
	    bezierVertex(249,419,272,238,97,217);
	    endShape();
	    
	    //lines on leaf
	    stroke(25, 168, 44);
	    strokeWeight(3.7);
	    line(110,232,291,469);
	    
	    strokeWeight(2.5);
	    line(137,333,198,347);
	    line(149,371,223,383);
	    line(178,410,254,422);
	    line(219,443,276,452);
	    line(124,294,171,311);
	    line(117,259,134,266);
	    
	    line(204,293,198,347);
	    line(228,332,223,381);
	    line(254,421,256,388);
	    line(277,439,276,448);
	    line(173,265,169,310);
	    line(137,266,135,241);
	    
	    popMatrix();
	    
	    //leaf 2
	    pushMatrix();
	    translate(235,40);
	    scale(-0.155,0.168);
	    
	    fill(111, 222, 109);
	    beginShape();
	    vertex(97,217);
	    bezierVertex(94,217,96,469,308,480);
	    bezierVertex(249,419,272,238,97,217);
	    endShape();
	    
	    //lines on leaf
	    stroke(25, 168, 44);
	    strokeWeight(3.7);
	    line(110,232,291,469);
	    
	    strokeWeight(2.5);
	    line(137,333,198,347);
	    line(149,371,223,383);
	    line(178,410,254,422);
	    line(219,443,276,452);
	    line(124,294,171,311);
	    line(117,259,134,266);
	    
	    line(204,293,198,347);
	    line(228,332,223,381);
	    line(254,421,256,388);
	    line(277,439,276,448);
	    line(173,265,169,310);
	    line(137,266,135,241);
	    
	    popMatrix();
	    
	    noStroke();
	    
	    popMatrix();
	};
	
	// Potato stage 2
	var potato2 = function(X,Y,SizeX,SizeY){
	
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    
	    //roots
	    fill(237, 231, 154);
	    noStroke();
	    
	    pushMatrix();
	    translate(179,220);
	    scale(0.284,0.301);
	    
	    beginShape();
	
	    vertex(78,-134); 
	    vertex(92,-135);
	    vertex(91,-77);
	    vertex(99,-56); 
	    vertex(138,-33);
	    vertex(172,-55);
	    vertex(150,-93); 
	    vertex(188,-54);
	    vertex(141,-22);
	    vertex(93,-44); 
	    vertex(95,15); 
	    vertex(129,19);
	    vertex(189,-27);
	    vertex(148,24); 
	    vertex(247,37);
	    vertex(207,39);
	    vertex(248,108);
	    vertex(196,42);
	    vertex(95,25);
	    vertex(92,72); 
	    vertex(138,116); 
	    vertex(173,84);
	    vertex(150,119);
	    vertex(215,217); 
	    vertex(170,172); 
	    vertex(121,196);
	    vertex(166,157);
	    vertex(91,87);
	    vertex(92,121);
	    vertex(89,226); 
	    vertex(130,240);
	    vertex(154,213);
	    vertex(139,245);
	    vertex(206,257);
	    vertex(307,236);
	    vertex(227,263);
	    vertex(308,293);
	    vertex(165,264);
	    vertex(153,277);
	    vertex(205,310); 
	    vertex(152,287); 
	    vertex(129,327); 
	    vertex(145,261); 
	    vertex(92,247); 
	    vertex(92,395); 
	    vertex(73,305);
	    vertex(-1,376); 
	    vertex(71,277); 
	    vertex(70,142); 
	    vertex(17,177); 
	    vertex(25,270); 
	    vertex(7,182); 
	    vertex(-30,217); 
	    vertex(-77,277);
	    vertex(-39,214); 
	    vertex(-121,265);
	    vertex(-40,200); 
	    vertex(-11,174); 
	    vertex(-117,168);
	    vertex(6,168); 
	    vertex(69,126); 
	    vertex(69,79); 
	    vertex(10,84);
	    vertex(0,143);
	    vertex(-4,86); 
	    vertex(-78,129); 
	    vertex(-17,80);
	    vertex(-84,50); 
	    vertex(-7,71);
	    vertex(74,62); 
	    vertex(70,9); 
	    vertex(45,-13);
	    vertex(73,-3); 
	    vertex(71,-64);
	    vertex(32,-50);
	    vertex(4,55);
	    vertex(17,-46);
	    vertex(-12,-35);
	    vertex(-58,-23);
	    vertex(76,-78); 
	    vertex(78,-134); 
	    vertex(92,-135); 
	    vertex(91,-77); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //stem
	    pushMatrix();
	    translate(189,83);
	    scale(0.326,0.335);
	    fill(22, 145, 9);
	    
	    beginShape();
	    
	    vertex(30,131); 
	    vertex(4,19); 
	    vertex(3,15); 
	    vertex(-30,6);
	    vertex(-54,47);
	    vertex(-42,1);
	    vertex(-94,-25);
	    vertex(6,-1); 
	    vertex(-18,-125);
	    vertex(33,35);
	    vertex(44,66); 
	    vertex(113,-94);
	    vertex(106,-43);
	    vertex(137,-49); 
	    vertex(101,-25);
	    vertex(68,81);
	    vertex(54,134); 
	    vertex(57,296); 
	    vertex(31,295); 
	    vertex(30,131);
	    vertex(4,19); 
	    vertex(3,15); 
	    
	    endShape();
	    
	    popMatrix();
	
	
	
	    //leaves
	    var leaf = function(Xpos,Ypos,leafSizeX,leafSizeY,Spin){
	        pushMatrix();
	        translate(Xpos,Ypos);
	        scale(leafSizeX,leafSizeY);
	        rotate(Spin);
	        
	        fill(44, 207, 66);
	        
	        
	        beginShape();
	        vertex(199,222);
	        bezierVertex(276,209,347,221,350,349);
	        bezierVertex(238,363,258,259,199,222);
	        endShape();
	        
	        stroke(61, 168, 37);
	        strokeWeight(3.8);
	        line(231,235,341,341);
	        strokeWeight(2.1);
	        line(265,261,265,228);
	        line(287,275,287,236);
	        line(310,297,309,249);
	        line(334,316,332,282);
	        line(247,240,247,226);
	        line(271,318,271,284);
	        line(294,334,293,303);
	        line(316,340,315,324);
	        line(253,268,254,295);
	        line(240,264,240,256);
	        
	        noStroke();
	        
	        popMatrix();
	    
	    };
	
	    leaf(172,10,0.136,0.163,0);
	    leaf(174,32,0.048,0.097,64);
	    leaf(252,107,0.068,0.097,190);
	    leaf(245,36,0.127,0.130,104);
	    leaf(148,38,0.052,0.108,0);
	    leaf(198,133,0.081,0.095,186);
	    leaf(154,30,0.074,0.100,-15);
	
	    //tiny potatoes
	    var teenyPotatoes = function(Xpos,Ypos,PotSizeX,PotSizeY,Spin){
	        pushMatrix();
	        rotate(Spin);
	        
	        noStroke();
	        fill(204, 171, 79);
	        ellipse(Xpos,Ypos,PotSizeX,PotSizeY);
	        
	        popMatrix();
	    };
	    
	    teenyPotatoes(254,151,19,10,20);
	    teenyPotatoes(89,346,19,10,-25);
	    teenyPotatoes(216,268,19,10,6);
	    teenyPotatoes(-7,330,19,10,-47);
	    
	    popMatrix();
	
	};
	
	// Potato stage 3
	var potato3 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    pushMatrix();
	    translate(352,341);
	    scale(0.282,0.318);
	    
	    noStroke();
	    fill(237, 236, 182);
	
	    beginShape();
	 
	    vertex(78,-134);
	    vertex(92,-135);
	    vertex(91,-77); 
	    vertex(99,-56);
	    vertex(138,-33); 
	    vertex(173,-57);
	    vertex(150,-93);
	    vertex(186,-64); 
	    vertex(219,-88);
	    vertex(204,-65);
	    vertex(263,-68);
	    vertex(309,-6); 
	    vertex(259,-59);
	    vertex(236,-54); 
	    vertex(266,8); 
	    vertex(229,-42);
	    vertex(187,7);
	    vertex(225,-56);
	    vertex(200,-55);
	    vertex(190,-56);
	    vertex(141,-22);
	    vertex(93,-44); 
	    vertex(95,15);
	    vertex(129,19);
	    vertex(189,-27);
	    vertex(148,24); 
	    vertex(212,36); 
	    vertex(238,3);
	    vertex(216,50);
	    vertex(238,97); 
	    vertex(293,54); 
	    vertex(326,87); 
	    vertex(293,65);
	    vertex(245,107);
	    vertex(249,146);
	    vertex(221,84); 
	    vertex(184,116);
	    vertex(215,76);
	    vertex(196,42);
	    vertex(95,25);
	    vertex(92,72);
	    vertex(138,116); 
	    vertex(173,84); 
	    vertex(150,119); 
	    vertex(215,217);
	    vertex(170,172);
	    vertex(121,196); 
	    vertex(166,157);
	    vertex(91,87);
	    vertex(92,121); 
	    vertex(89,226);
	    vertex(130,240); 
	    vertex(154,213);
	    vertex(139,245); 
	    vertex(206,257);
	    vertex(274,236);
	    vertex(272,173); 
	    vertex(286,234); 
	    vertex(307,236); 
	    vertex(227,263); 
	    vertex(341,266); 
	    vertex(284,274);
	    vertex(291,336);
	    vertex(341,352);
	    vertex(281,349);
	    vertex(275,292); 
	    vertex(227,372); 
	    vertex(269,274); 
	    vertex(165,264); 
	    vertex(163,291); 
	    vertex(168,322); 
	    vertex(207,324); 
	    vertex(169,329); 
	    vertex(164,358); 
	    vertex(152,287); 
	    vertex(118,357); 
	    vertex(145,261); 
	    vertex(92,247); 
	    vertex(92,395);
	    vertex(67,322);
	    vertex(45,388);
	    vertex(38,350); 
	    vertex(-3,328);
	    vertex(41,340);
	    vertex(57,309);
	    vertex(67,274);
	    vertex(70,142); 
	    vertex(17,177);
	    vertex(25,270);
	    vertex(7,182);
	    vertex(-30,217);
	    vertex(-50,261);
	    vertex(-15,296); 
	    vertex(-61,262);
	    vertex(-39,214);
	    vertex(-99,227);
	    vertex(-111,282);
	    vertex(-70,349); 
	    vertex(-119,291);
	    vertex(-149,375);
	    vertex(-143,328);
	    vertex(-180,331);
	    vertex(-134,307);
	    vertex(-117,232);
	    vertex(-154,234);
	    vertex(-40,200); 
	    vertex(-11,174); 
	    vertex(-117,168); 
	    vertex(6,168); 
	    vertex(69,126);
	    vertex(69,79);
	    vertex(10,84);
	    vertex(0,143); 
	    vertex(-4,86);
	    vertex(-78,129);
	    vertex(-17,80); 
	    vertex(-84,50); 
	    vertex(-7,71);
	    vertex(74,62);
	    vertex(70,9); 
	    vertex(45,-13); 
	    vertex(73,-3); 
	    vertex(71,-64);
	    vertex(32,-50);
	    vertex(4,55);
	    vertex(17,-46); 
	    vertex(-12,-35);
	    vertex(-58,-23); 
	    vertex(76,-78); 
	    vertex(78,-134);
	    vertex(92,-135);
	    vertex(91,-77); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //stem
	    fill(9, 140, 7);
	    pushMatrix();
	    translate(346,156);
	    scale(0.246,0.370);
	    
	    beginShape();
	
	    vertex(106,124);
	    vertex(63,34); 
	    vertex(60,34);
	    vertex(-8,13); 
	    vertex(-85,50);
	    vertex(-34,11); 
	    vertex(-132,-41); 
	    vertex(-55,-20); 
	    vertex(-79,-119);
	    vertex(-35,-13);
	    vertex(51,11);
	    vertex(-33,-186); 
	    vertex(41,-64); 
	    vertex(120,-182);
	    vertex(48,-44); 
	    vertex(119,79); 
	    vertex(161,6);
	    vertex(124,-98); 
	    vertex(176,-2); 
	    vertex(241,-83);
	    vertex(169,37); 
	    vertex(227,19);
	    vertex(229,-20);
	    vertex(243,15);
	    vertex(287,9); 
	    vertex(159,59); 
	    vertex(131,122);
	    vertex(134,392);
	    vertex(108,392);
	    vertex(106,124);
	    vertex(63,34);
	    vertex(60,34);
	    
	    endShape();
	
	    popMatrix();
	
	    //leaves
	    var leaf = function(Xpos,Ypos,leafSizeX,leafSizeY,Spinny){
	        pushMatrix();
	        translate(Xpos,Ypos);
	        rotate(Spinny);
	        scale(leafSizeX,leafSizeY);
	        
	        fill(28, 214, 37); 
	        beginShape();
	        vertex(200,200);
	        bezierVertex(106,242,155,121,86,62);
	        bezierVertex(185,121,185,200,200,200);
	        endShape();
	        
	        strokeWeight(3);
	        stroke(13, 168, 10);
	        line(116,91,189,199);
	        strokeWeight(1.8);
	        line(127,119,134,120);
	        line(130,133,144,134);
	        line(133,147,154,150);
	        line(137,163,167,167);
	        line(140,180,180,186);
	        line(153,196,189,201);
	        
	        popMatrix();
	    };
	
	    leaf(290,73,0.288,0.196,0);
	    leaf(397,157,0.209,0.130,196);
	    leaf(295,150,0.178,0.100,0);
	    leaf(444,150,0.182,0.130,156);
	    leaf(347,189,0.108,0.063,-153);
	    leaf(349,70,0.204,0.101,41);
	    leaf(281,126,0.200,0.143,-29);
	    leaf(321,140,0.174,0.081,-74);
	    leaf(338,100,0.131,0.084,-10);
	    leaf(391,73,0.232,0.163,42);
	    leaf(450,204,0.252,0.169,-179);
	    leaf(372,119,0.207,0.092,-241);
	    leaf(444,143,0.160,0.051,-230);
	    
	    //medium potatoes
	    var potatoes = function(Xpos,Ypos,potXsize,potYsize,spinny){
	        pushMatrix();
	        
	        translate(Xpos,Ypos);
	        rotate(spinny);
	        
	        
	        noStroke();
	        fill(181, 143, 82);
	        ellipse(10,10,potXsize,potYsize);
	        
	        popMatrix();
	    
	    };
	
	    potatoes(406,328,24,13,10);
	    potatoes(343,416,24,13,-50);
	    potatoes(349,364,20,8,51);
	    potatoes(406,328,24,13,10);
	    potatoes(432,411,24,18,10);
	    potatoes(401,394,20,13,-40);
	    potatoes(339,326,24,10,-19);
	    potatoes(323,441,8,13,73);
	    
	    popMatrix();
	
	};
	
	// Potato stage 4
	var potato4 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    //stem
	    pushMatrix();
	    translate(201,119);
	    scale(0.234,0.360);
	    
	    fill(12, 130, 10);
	
	    beginShape();
	 
	    vertex(106,124);
	    vertex(63,34);
	    vertex(60,34); 
	    vertex(-8,13); 
	    vertex(-85,50);
	    vertex(-34,11);
	    vertex(-99,-18);
	    vertex(-178,-4);
	    vertex(-120,-25);
	    vertex(-189,-58);
	    vertex(-62,-24); 
	    vertex(-141,-174);
	    vertex(-88,-110);
	    vertex(-64,-178);
	    vertex(-75,-82);
	    vertex(-35,-13); 
	    vertex(51,11);
	    vertex(0,-88); 
	    vertex(-54,-111);
	    vertex(-5,-103); 
	    vertex(-33,-186);
	    vertex(36,-66); 
	    vertex(63,-119); 
	    vertex(20,-177); 
	    vertex(74,-134);
	    vertex(115,-197);
	    vertex(49,-41); 
	    vertex(119,79); 
	    vertex(161,6);
	    vertex(100,-150);
	    vertex(131,-114);
	    vertex(190,-189);
	    vertex(174,-150);
	    vertex(217,-138);
	    vertex(163,-138);
	    vertex(139,-101);
	    vertex(176,-18); 
	    vertex(258,-143);
	    vertex(241,-89);
	    vertex(299,-101); 
	    vertex(327,-140); 
	    vertex(315,-99); 
	    vertex(356,-97);
	    vertex(232,-73);
	    vertex(169,37);
	    vertex(227,19);
	    vertex(245,-57); 
	    vertex(244,11);
	    vertex(337,2); 
	    vertex(290,21);
	    vertex(364,88);
	    vertex(273,27); 
	    vertex(159,59);
	    vertex(131,122);
	    vertex(134,392);
	    vertex(108,392);
	    vertex(106,124);
	    vertex(63,34); 
	    vertex(60,34); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //roots
	    pushMatrix();
	    translate(202,324);
	    scale(0.240,0.327);
	    
	    fill(236, 237, 187);
	
	    beginShape();
	 
	    vertex(-37,-169);
	    vertex(100,-120);
	    vertex(99,-121); 
	    vertex(99,-194);
	    vertex(125,-195);
	    vertex(124,-153);
	    vertex(356,-93); 
	    vertex(207,-119); 
	    vertex(325,-47); 
	    vertex(379,-62); 
	    vertex(338,-35); 
	    vertex(381,9);
	    vertex(246,-79);
	    vertex(259,21); 
	    vertex(225,-90);
	    vertex(178,-125);
	    vertex(125,-136);
	    vertex(128,-41); 
	    vertex(162,-18);
	    vertex(213,-58);
	    vertex(177,-9); 
	    vertex(269,53); 
	    vertex(316,16); 
	    vertex(286,68);
	    vertex(339,120);
	    vertex(248,59);
	    vertex(261,157);
	    vertex(288,186);
	    vertex(349,177); 
	    vertex(295,198);
	    vertex(320,252); 
	    vertex(246,168);
	    vertex(229,44); 
	    vertex(193,21); 
	    vertex(149,86); 
	    vertex(178,11); 
	    vertex(129,-21);
	    vertex(124,113); 
	    vertex(197,106); 
	    vertex(170,118); 
	    vertex(217,179);
	    vertex(155,124);
	    vertex(120,134);
	    vertex(118,199);
	    vertex(121,223);
	    vertex(262,248);
	    vertex(217,255); 
	    vertex(252,290); 
	    vertex(389,251); 
	    vertex(341,278); 
	    vertex(329,382); 
	    vertex(327,281); 
	    vertex(262,304);
	    vertex(287,353);
	    vertex(217,280);
	    vertex(187,319);
	    vertex(210,270);
	    vertex(196,253);
	    vertex(122,242);
	    vertex(147,377); 
	    vertex(105,264); 
	    vertex(93,378); 
	    vertex(81,307); 
	    vertex(32,328); 
	    vertex(-58,378); 
	    vertex(-17,339);
	    vertex(-95,333);
	    vertex(-4,326); 
	    vertex(-11,281);
	    vertex(-63,242);
	    vertex(-13,263); 
	    vertex(-13,219); 
	    vertex(13,321); 
	    vertex(83,290);
	    vertex(92,201); 
	    vertex(92,154); 
	    vertex(41,268); 
	    vertex(67,156);
	    vertex(9,168); 
	    vertex(27,217); 
	    vertex(-8,174); 
	    vertex(-70,189);
	    vertex(-114,275);
	    vertex(-95,198);
	    vertex(-170,185);
	    vertex(-102,181);
	    vertex(-142,146);
	    vertex(-78,172); 
	    vertex(32,144); 
	    vertex(-1,95);
	    vertex(55,142);
	    vertex(95,134);
	    vertex(92,71); 
	    vertex(-25,53);
	    vertex(-48,98);
	    vertex(-19,145);
	    vertex(-55,111);
	    vertex(-102,126);
	    vertex(-60,95);
	    vertex(-43,51);
	    vertex(-93,41); 
	    vertex(-179,49);
	    vertex(-107,30);
	    vertex(-170,-44);
	    vertex(-83,28); 
	    vertex(93,54);
	    vertex(99,-107);
	    vertex(35,-126);
	    vertex(8,-91); 
	    vertex(14,-60); 
	    vertex(64,-73); 
	    vertex(19,-42);
	    vertex(20,42); 
	    vertex(-7,-79);
	    vertex(-77,-12);
	    vertex(-39,-70);
	    vertex(-151,-110);
	    vertex(-26,-83); 
	    vertex(19,-132); 
	    vertex(-28,-149);
	    vertex(-89,-123);
	    vertex(-37,-169);
	    vertex(100,-120);
	    vertex(99,-121); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //leaves
	    var leaf = function(Xpos,Ypos,LeafSizeX,LeafSizeY,Spinny){
	        pushMatrix();
	        
	        translate(Xpos,Ypos);
	        rotate(Spinny);
	        scale(LeafSizeX,LeafSizeY);
	        
	        fill(33, 227, 29);
	        
	        beginShape();
	        vertex(436,291);
	        bezierVertex(441,207,355,110,160,89);
	        bezierVertex(230,194,294,298,436,291);
	        endShape();
	        
	        stroke(47, 181, 23);
	        strokeWeight(4);
	        line(430,285,173,98);
	        strokeWeight(2);
	        line(186,97,191,110);
	        line(198,97,206,120);
	        line(212,99,223,132);
	        line(227,103,241,146);
	        line(242,107,260,162);
	        line(259,112,280,175);
	        line(277,118,301,190);
	        line(296,126,323,205);
	        line(317,135,346,223);
	        line(339,148,367,239);
	        line(361,162,388,252);
	        line(385,183,410,270);
	        line(410,212,428,282);
	        
	        popMatrix();
	    
	        };
	    
	        leaf(119,72,0.095,0.098,0);
	        leaf(306,80,0.095,0.098,91);
	        leaf(158,72,0.044,0.035,0);
	        leaf(315,60,0.077,0.081,110);
	        leaf(174,61,0.041,0.070,0);
	        leaf(140,112,0.036,0.058,-79);
	        leaf(158,76,0.045,0.043,51);
	        leaf(252,42,0.070,0.086,16);
	        leaf(229,22,0.075,0.069,36);
	        leaf(260,45,0.037,0.037,112);
	        leaf(170,40,0.062,0.053,9);
	        leaf(156,61,0.052,0.045,12);
	        leaf(213,176,0.095,0.098,-156);
	        leaf(262,192,0.095,0.098,-102);
	        leaf(193,17,0.095,0.098,16);
	        leaf(254,104,0.073,0.066,-137);
	        leaf(159,113,0.063,0.062,0);
	        leaf(164,137,0.038,0.051,-56);
	        leaf(167,80,0.060,0.050,38);
	        leaf(136,124,0.056,0.046,-45);
	        leaf(316,159,0.069,0.055,173);
	        leaf(281,96,0.062,0.050,112);
	        leaf(263,98,0.028,0.030,73);
	        leaf(193,22,0.070,0.081,31);
	        leaf(263,57,0.031,0.038,95);
	        leaf(291,121,0.041,0.041,110);
	        leaf(245,45,0.058,0.053,103);
	        leaf(195,40,0.023,0.049,35);
	        leaf(292,57,0.031,0.059,85);
	    
	    //potatoes
	    var potato = function(Xpos,Ypos,PotXsize,PotYsize,spinny){
	        pushMatrix();
	        rotate(spinny);
	        
	        noStroke();
	        fill(181, 135, 50);
	        ellipse(Xpos,Ypos,PotYsize,PotXsize);
	        
	        popMatrix();
	    };
	    
	    potato(286,374,16,22,1);
	    potato(117,396,12,22,-24);
	    potato(346,275,13,18,23);
	    potato(190,358,12,21,1);
	    potato(378,-42,21,34,62);
	    potato(167,478,15,32,-12);
	    potato(-207,426,23,36,-49);
	    
	    popMatrix();
	
	};
	
	// Small potato img for btn
	var spi = function(x, y) {
	    pushMatrix();
	    scale(0.5, 0.5);
	    potato0(x, y);
	    popMatrix();
	};
	
	// Carrots
	var carrot0 = function(X,Y,SizeX,SizeY){
	
	    pushMatrix();
	    
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    var miniscule = function(xpos,ypos){
	    
	        pushMatrix();
	        translate(xpos,ypos);
	        
	        //stem
	        pushMatrix();
	        translate(219,113);
	        scale(0.164,0.188);
	        
	        noStroke();
	        fill(39, 209, 48);
	        
	        beginShape();
	        
	        curveVertex(56,-153);
	        curveVertex(118,-172);
	        curveVertex(168,-151); 
	        curveVertex(169,-101); 
	        curveVertex(115,-68);
	        curveVertex(90,-93); 
	        curveVertex(105,-118);
	        curveVertex(119,-84); 
	        curveVertex(158,-113);
	        curveVertex(146,-152); 
	        curveVertex(83,-156); 
	        curveVertex(53,-91); 
	        curveVertex(64,59); 
	        curveVertex(45,96);
	        curveVertex(25,71);
	        curveVertex(29,-72); 
	        curveVertex(56,-153);
	        curveVertex(118,-172);
	        curveVertex(168,-151);
	        
	        endShape();
	
	        popMatrix();
	        
	        
	        //seed
	        pushMatrix();
	        translate(211,143);
	        scale(0.222,0.195);
	        
	        fill(252, 252, 252);
	
	        beginShape();
	        curveVertex(42,-32);
	        curveVertex(71,-103);
	        curveVertex(99,-31);
	        curveVertex(96,48);
	        curveVertex(48,48);
	        curveVertex(42,-32);
	        curveVertex(71,-103);
	        curveVertex(99,-31);
	        
	        endShape();
	
	        popMatrix();
	        
	        //roots
	        fill(245, 247, 201);
	        
	        pushMatrix();
	        
	        translate(213,176);
	        scale(0.197,0.225);
	
	        beginShape();
	  
	        vertex(58,-108);
	        vertex(77,-108);
	        vertex(109,67);
	        vertex(67,-47);
	        vertex(35,61); 
	        vertex(58,-108);
	        vertex(77,-108); 
	        vertex(109,67); 
	        
	        endShape();
	    
	        popMatrix();
	        
	        //leaf
	        pushMatrix();
	        translate(160,58);
	        scale(0.208,0.222);
	        
	        fill(30, 161, 48);
	        
	        beginShape();
	        vertex(332,193);
	        bezierVertex(215,200,321,87,210,90);
	        bezierVertex(258,139,185,200,332,193);
	        endShape();
	        
	        popMatrix();
	        
	        popMatrix();
	    };
	    
	    miniscule();
	    miniscule(-21,0);
	    miniscule(25,11);
	    miniscule(-8,18);
	    
	    popMatrix();
	};
	
	var carrot1 = function(X,Y,SizeX,SizeY){
	
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	
	    var mini = function(Xpos,Ypos,SizeXpos,SizeYpos){
	        //carrot
	        pushMatrix();
	        translate(Xpos,Ypos);
	        scale(SizeXpos,SizeYpos);
	        
	        stroke(3, 3, 3);
	        strokeWeight(0.25);
	        
	        beginShape();
	        
	        curveVertex(-17,-106); 
	        curveVertex(19,-104); 
	        curveVertex(0,-12); 
	        curveVertex(-17,-106);
	        curveVertex(19,-104); 
	        curveVertex(0,-12); 
	        
	        endShape();
	
	        //leaf 1
	        pushMatrix();
	        translate(-60,-186);
	        scale(0.589,0.489);
	        
	        fill(41, 176, 45);
	
	        beginShape();
	        curveVertex(80,88);
	        curveVertex(6,-33);
	        curveVertex(76,45);
	        curveVertex(94,-66); 
	        curveVertex(113,54);
	        curveVertex(193,-25); 
	        curveVertex(116,85); 
	        curveVertex(118,155);
	        curveVertex(86,156); 
	        curveVertex(80,88);
	        curveVertex(6,-33); 
	        curveVertex(76,45);
	        
	        endShape();
	    
	        //leaf 2
	        translate(45,41);
	        scale(0.538,0.646);
	        
	        fill(52, 130, 53);
	        
	        beginShape();
	        curveVertex(80,88);
	        curveVertex(6,-33);
	        curveVertex(76,45);
	        curveVertex(94,-66); 
	        curveVertex(113,54);
	        curveVertex(193,-25); 
	        curveVertex(116,85); 
	        curveVertex(118,155);
	        curveVertex(86,156); 
	        curveVertex(80,88);
	        curveVertex(6,-33); 
	        curveVertex(76,45);
	        
	        endShape();
	    
	    
	    popMatrix();
	    
	    popMatrix();
	    
	    
	    };
	
	    fill(247, 215, 111);
	    mini(240,268,0.416,0.334);
	    fill(227, 141, 20);
	    mini(227,272,0.416,0.376);
	    fill(255, 200, 0);
	    mini(252,273,0.416,0.355);
	    fill(104, 31, 156);
	    mini(235,260,0.305,0.266);
	    
	    popMatrix();
	
	};
	
	var carrot2 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	
	    var medium = function(Xpos,Ypos,carrotSizeX,carrotSizeY){
	        //carrot
	        pushMatrix();
	        
	        translate(160+Xpos,202+Ypos);
	        scale(0.184+carrotSizeX,0.199+carrotSizeY);
	    
	            stroke(0, 0, 0);
	            strokeWeight(0.5);
	    
	            beginShape();
	            curveVertex(-9,-100);
	            curveVertex(85,-90);
	            curveVertex(39,173);
	            curveVertex(-9,-100); 
	            curveVertex(85,-90); 
	            curveVertex(39,173);
	            
	            endShape();
	            pushMatrix();
	            
	            translate(-47,-350);
	            scale(1.000,0.765);
	            
	            noStroke();
	            fill(33, 176, 50);
	            
	            beginShape();
	            curveVertex(-69,64);
	            curveVertex(-30,88);
	            curveVertex(38,150); 
	            curveVertex(-36,56);
	            curveVertex(-55,15);
	            curveVertex(49,148);
	            curveVertex(-51,-21);
	            curveVertex(-4,25); 
	            curveVertex(60,147);
	            curveVertex(-8,-36);
	            curveVertex(31,26); 
	            curveVertex(76,145);
	            curveVertex(21,-39);
	            curveVertex(39,-17); 
	            curveVertex(85,153); 
	            curveVertex(60,-39); 
	            curveVertex(83,0); 
	            curveVertex(99,155); 
	            curveVertex(109,-31); 
	            curveVertex(125,14);
	            curveVertex(110,166); 
	            curveVertex(154,-6);
	            curveVertex(160,44);
	            curveVertex(100,212);
	            curveVertex(95,319); 
	            curveVertex(65,313);
	            curveVertex(49,202);
	            curveVertex(-69,64);
	            curveVertex(-30,88);
	            curveVertex(38,150); 
	            
	            endShape();
	            
	            popMatrix();
	            
	            popMatrix();
	        };
	    
	    fill(247, 215, 111);
	    medium(196,54,-0.028,-0.023);
	    fill(227, 141, 20);
	    medium(184,54,-0.028,-0.034);
	    fill(255, 200, 0);
	    medium(209,58,-0.028,0.003);
	    fill(104, 31, 156);
	    medium(192,50,-0.059,-0.066);
	    
	    popMatrix();
	
	};
	
	var carrot3 = function(X,Y,SizeX,SizeY){
	
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	
	    var med_big = function(Xpos,Ypos,CarrotSizeX,CarrotSizeY){
	        //carrot
	        pushMatrix();
	        
	        stroke(3, 3, 3);
	        translate(Xpos,Ypos);
	        scale(CarrotSizeX,CarrotSizeY);
	        
	        beginShape();
	        curveVertex(58,-85);
	        curveVertex(130,-21); 
	        curveVertex(69,292);
	        curveVertex(-4,-7); 
	        curveVertex(58,-85);
	        curveVertex(130,-21);
	        curveVertex(69,292);
	        
	        endShape();
	        
	        //top
	        translate(-47,-353);
	        scale(1.310,1.000);
	        
	        fill(29, 196, 46);
	        strokeWeight(0.6);
	        
	        beginShape();
	     
	        curveVertex(54,222); 
	        curveVertex(-5,80);
	        curveVertex(61,176);
	        curveVertex(52,137);
	        curveVertex(-14,4); 
	        curveVertex(65,99);
	        curveVertex(55,58); 
	        curveVertex(-13,-77);
	        curveVertex(65,17); 
	        curveVertex(20,-112);
	        curveVertex(87,-14);
	        curveVertex(122,-50); 
	        curveVertex(169,-94); 
	        curveVertex(101,16); 
	        curveVertex(170,-15);
	        curveVertex(114,58);
	        curveVertex(106,102);
	        curveVertex(187,39); 
	        curveVertex(110,147);
	        curveVertex(101,179);
	        curveVertex(214,96); 
	        curveVertex(105,222);
	        curveVertex(102,290);
	        curveVertex(82,310);
	        curveVertex(60,286);
	        curveVertex(54,222);
	        curveVertex(-5,80); 
	        curveVertex(61,176);
	        
	        endShape();
	        
	    popMatrix();
	    
	    };
	
	
	    fill(247, 215, 111);
	    med_big(283,380,0.127,0.196);
	    fill(227, 141, 20);
	    med_big(273,378,0.105,0.167);
	    fill(255, 200, 0);
	    med_big(297,380,0.135,0.187);
	    fill(104, 31, 156);
	    med_big(279,376,0.101,0.135);
	    
	    popMatrix();
	
	};
	
	var carrot4 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	
	    var big = function(Xpos,Ypos,carrotSizeX,carrotSizeY){
	    
	        //carrot
	        pushMatrix();
	        translate(Xpos,Ypos);
	        scale(carrotSizeX,carrotSizeY);
	        
	        stroke(0, 0, 0);
	        strokeWeight(0.5);
	    
	        beginShape();
	 
	        curveVertex(78,-67); 
	        curveVertex(132,-19);
	        curveVertex(88,190); 
	        curveVertex(30,-13);
	        curveVertex(78,-67);
	        curveVertex(132,-19);
	        curveVertex(88,190); 
	        
	        endShape();
	
	        //stem
	        translate(38,-180);
	        scale(0.444,0.354);
	        
	        fill(15, 173, 12);
	        beginShape();
	        
	        curveVertex(78,-134);
	        curveVertex(100,-29);
	        curveVertex(114,324); 
	        curveVertex(88,390); 
	        curveVertex(56,324);
	        curveVertex(58,-6); 
	        curveVertex(78,-134);
	        curveVertex(100,-29);
	        curveVertex(114,324);
	        
	        endShape();
	
	        var carrotLeaf = function(xpos,ypos,leafSizeX,leafSizeY){
	            pushMatrix();
	            
	            translate(xpos,ypos);
	            scale(leafSizeX,leafSizeY);
	            
	            fill(41, 204, 49);
	            
	            beginShape();
	            vertex(289,158);
	            bezierVertex(301,101,225,38,165,34);
	            bezierVertex(220,112,212,167,289,158);
	            endShape();
	            
	            popMatrix();
	        };
	        
	        carrotLeaf(-266,210,1.125,0.878);
	        carrotLeaf(-266,157,1.125,0.878);
	        carrotLeaf(-266,94,1.125,0.878);
	        carrotLeaf(-266,31,1.125,0.878);
	        carrotLeaf(-266,-31,1.125,0.878);
	        carrotLeaf(-266,-98,1.125,0.878);
	        carrotLeaf(-204,-113,0.904,0.528);
	        carrotLeaf(-180,-141,0.846,0.474);
	        carrotLeaf(-157,-167,0.780,0.414);
	        
	        //other side
	        carrotLeaf(433,210,-1.125,0.878);
	        carrotLeaf(432,157,-1.125,0.878);
	        carrotLeaf(436,94,-1.125,0.878);
	        carrotLeaf(435,31,-1.125,0.878);
	        carrotLeaf(423,-31,-1.125,0.878);
	        carrotLeaf(424,-98,-1.125,0.878);
	        carrotLeaf(360,-113,-0.904,0.528);
	        carrotLeaf(341,-141,-0.846,0.474);
	        carrotLeaf(317,-167,-0.780,0.414);
	        
	        popMatrix();
	    
	    };
	
	    fill(247, 215, 111);
	    big(428,380,0.170,0.368);
	    fill(227, 141, 20);
	    big(418,378,0.138,0.346);
	    fill(255, 200, 0);
	    big(439,380,0.192,0.370);
	    fill(104, 31, 156);
	    big(421,373,0.172,0.234);
	    
	    
	    popMatrix();
	
	};
	
	// Small carrot img for btn
	var sci = function(x, y) {
	    pushMatrix();
	    scale(0.5, 0.5);
	    carrot0(x, y);
	    popMatrix();
	};
	
	// Tomatos
	var tomato0 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    //sprout
	    pushMatrix();
	    
	    translate(116.5,127);
	    scale(0.142,0.153);
	    
	    fill(26, 201, 6);
	    noStroke();
	    
	    beginShape();
	
	    curveVertex(49,-158); 
	    curveVertex(70,108); 
	    curveVertex(21,114); 
	    curveVertex(49,-158);
	    curveVertex(70,108); 
	    curveVertex(21,114); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //seed
	    pushMatrix();
	    
	    translate(116,147);
	    scale(0.125,0.121);
	    
	    noStroke();
	    fill(242, 242, 220);
	
	    beginShape();
	 
	    curveVertex(0,-34);
	    curveVertex(32,-67);
	    curveVertex(57,-124);
	    curveVertex(79,-67);
	    curveVertex(111,-37);
	    curveVertex(114,67); 
	    curveVertex(56,119);
	    curveVertex(-3,64); 
	    curveVertex(0,-34); 
	    curveVertex(32,-67);
	    curveVertex(57,-124);
	    
	    endShape();
	
	    popMatrix();
	    
	    
	    popMatrix();
	
	};
	
	var tomato1 = function(X,Y,SizeX,SizeY){
	
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    //sprout
	    pushMatrix();
	    
	    translate(200.3,100);
	    scale(0.142,0.341);
	    
	    fill(26, 201, 6);
	    noStroke();
	    
	    beginShape();
	
	    curveVertex(49,-158); 
	    curveVertex(70,108); 
	    curveVertex(21,114); 
	    curveVertex(49,-158);
	    curveVertex(70,108); 
	    curveVertex(21,114); 
	    
	    endShape();
	
	    popMatrix();
	
	
	    //seed
	    pushMatrix();
	    
	    translate(200,147);
	    scale(0.125,0.121);
	    
	    noStroke();
	    fill(242, 242, 220);
	
	    beginShape();
	 
	    curveVertex(0,-34);
	    curveVertex(32,-67);
	    curveVertex(57,-124);
	    curveVertex(79,-67);
	    curveVertex(111,-37);
	    curveVertex(114,67); 
	    curveVertex(56,119);
	    curveVertex(-3,64); 
	    curveVertex(0,-34); 
	    curveVertex(32,-67);
	    curveVertex(57,-124);
	    
	    endShape();
	
	    popMatrix();
	
	    //leaves
	    var leaf = function(Xpos,Ypos,LeafSizeX,LeafSizeY,Spinny){
	        pushMatrix();
	        translate(Xpos,Ypos);
	        rotate(Spinny);
	        scale(LeafSizeX,LeafSizeY);
	        
	        fill(20, 166, 27);
	        
	        beginShape();
	    
	        curveVertex(-13,-77);
	        curveVertex(121,-57);
	        curveVertex(204,7); 
	        curveVertex(255,95); 
	        curveVertex(215,90);
	        curveVertex(195,64); 
	        curveVertex(165,70); 
	        curveVertex(118,54); 
	        curveVertex(100,31); 
	        curveVertex(71,39);
	        curveVertex(35,30); 
	        curveVertex(12,10); 
	        curveVertex(-12,27); 
	        curveVertex(-45,23); 
	        curveVertex(-62,5);
	        curveVertex(-83,20);
	        curveVertex(-148,17);
	        curveVertex(-75,-55); 
	        curveVertex(-13,-77);
	        curveVertex(121,-57);
	        curveVertex(204,7);
	        
	        endShape();
	    
	        popMatrix();
	    
	    };
	    
	    leaf(179,74,0.103,0.133,0);
	    leaf(179,100,0.103,0.133,0);
	    leaf(235,74,-0.103,0.133,0);
	    leaf(236,100,-0.103,0.133,0);
	    
	    leaf(195,47,0.047,0.071,0);
	    leaf(220,48,-0.047,0.071,0);
	    
	    popMatrix();
	
	};
	
	var tomato2 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    //stem
	    pushMatrix();
	    
	    translate(319,53);
	    scale(0.275,0.283);
	    
	    fill(26, 201, 6);
	    noStroke();
	
	    beginShape();
	 
	    vertex(68,63);
	    vertex(-65,55);
	    vertex(69,42); 
	    vertex(67,-32);
	    vertex(-45,-42);
	    vertex(70,-51); 
	    vertex(72,-185);
	    vertex(81,-121);
	    vertex(81,-119);
	    vertex(174,-101);
	    vertex(87,-101);
	    vertex(91,-17);
	    vertex(222,-6);
	    vertex(90,0); 
	    vertex(95,100);
	    vertex(253,114);
	    vertex(97,123); 
	    vertex(98,307); 
	    vertex(72,308); 
	    vertex(68,63); 
	    vertex(-65,55);
	    vertex(69,42); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //roots
	    pushMatrix();
	    translate(321,160);
	    scale(0.303,0.202);
	    
	    fill(240, 239, 197);
	
	    beginShape();
	 
	    vertex(66,-59); 
	    vertex(39,-36);
	    vertex(39,-37);
	    vertex(51,102); 
	    vertex(31,63); 
	    vertex(-36,115); 
	    vertex(25,32); 
	    vertex(19,-26);
	    vertex(-4,-5);
	    vertex(59,-97);
	    vertex(78,-96); 
	    vertex(112,-49); 
	    vertex(233,-57); 
	    vertex(198,-43);
	    vertex(192,60); 
	    vertex(183,-39); 
	    vertex(120,-30); 
	    vertex(133,-4); 
	    vertex(66,-59); 
	    vertex(39,-36);
	    vertex(39,-37);
	    
	    endShape();
	
	    popMatrix();
	    
	    //tomato stems
	    stroke(66, 201, 73);
	    strokeWeight(2);
	    line(310,70,310,75);
	    line(325,70,325,75);
	    line(358,86,358,93);
	    line(374,86,374,93);
	    line(355,53,355,60);
	    line(371,52,371,60);
	    line(329,43,328,53);
	    line(316,43,316,47);
	    line(354,25,354,37);
	    noStroke();
	    
	    //green tomatoes
	    fill(171, 242, 109);
	    ellipse(310,79,8,8);
	    ellipse(325,79,8,8);
	    ellipse(358,95,8,8);
	    ellipse(374,95,8,8);
	    ellipse(371,61,8,8);
	    ellipse(355,61,8,8);
	    ellipse(329,51,8,8);
	    ellipse(316,50,8,8);
	    ellipse(354,31,8,8);
	
	    //leaves
	    var leaf = function(Xpos,Ypos,LeafSizeX,LeafSizeY,Spinny){
	        pushMatrix();
	        translate(Xpos,Ypos);
	        rotate(Spinny);
	        scale(LeafSizeX,LeafSizeY);
	        
	        fill(20, 166, 27);
	        
	        beginShape();
	
	        curveVertex(-13,-77);
	        curveVertex(121,-57);
	        curveVertex(204,7); 
	        curveVertex(255,95); 
	        curveVertex(215,90);
	        curveVertex(195,64); 
	        curveVertex(165,70); 
	        curveVertex(118,54); 
	        curveVertex(100,31); 
	        curveVertex(71,39);
	        curveVertex(35,30); 
	        curveVertex(12,10); 
	        curveVertex(-12,27); 
	        curveVertex(-45,23); 
	        curveVertex(-62,5);
	        curveVertex(-83,20);
	        curveVertex(-148,17);
	        curveVertex(-75,-55); 
	        curveVertex(-13,-77);
	        curveVertex(121,-57);
	        curveVertex(204,7);
	        
	        endShape();
	    
	        popMatrix();
	    
	    };
	
	    leaf(302,62,-0.053,0.071,58);
	    leaf(316,60,-0.053,0.071,58);
	    leaf(329,59,-0.053,0.071,58);
	    leaf(308,33,-0.053,0.071,58);
	    leaf(321,33,-0.053,0.071,58);
	    leaf(332,32,-0.053,0.071,58);
	    leaf(352,74,0.053,0.071,-66);
	    leaf(352,74,0.053,0.071,-66);
	    leaf(364,76,0.053,0.071,-66);
	    leaf(376,77,0.053,0.071,-66);
	    leaf(352,42,0.053,0.071,-66);
	    leaf(363,43,0.053,0.071,-66);
	    leaf(375,43,0.053,0.071,-66);
	    leaf(348,15,0.053,0.071,-66);
	    leaf(360,16,0.053,0.071,-66);
	    
	    popMatrix();
	
	};
	
	var tomato3 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    //roots
	    pushMatrix();
	    
	    translate(126,426);
	    scale(0.286,0.314);
	    
	    fill(240, 240, 209);
	    noStroke();
	
	    beginShape();
	 
	    vertex(66,-59); 
	    vertex(39,-36); 
	    vertex(39,-37); 
	    vertex(49,32); 
	    vertex(156,66);
	    vertex(109,65);
	    vertex(161,180); 
	    vertex(81,62); 
	    vertex(52,59); 
	    vertex(64,140);
	    vertex(31,63); 
	    vertex(-15,94); 
	    vertex(-47,219);
	    vertex(-37,110); 
	    vertex(-95,149); 
	    vertex(-34,74);
	    vertex(-104,20);
	    vertex(-10,60); 
	    vertex(25,32); 
	    vertex(19,-26);
	    vertex(-4,-5);
	    vertex(59,-97);
	    vertex(78,-96);
	    vertex(112,-49);
	    vertex(264,-70);
	    vertex(204,-45);
	    vertex(200,-1); 
	    vertex(259,82); 
	    vertex(199,25); 
	    vertex(191,112);
	    vertex(183,-39); 
	    vertex(120,-30); 
	    vertex(133,-4);
	    vertex(66,-59); 
	    vertex(39,-36); 
	    vertex(39,-37);
	    
	    endShape();
	
	    popMatrix();
	    
	    
	    //stem
	    pushMatrix();
	    
	    translate(106,295);
	    scale(0.452,0.492);
	    
	    fill(35, 191, 32);
	
	    beginShape();
	 
	    vertex(73,75); 
	    vertex(-88,63);
	    vertex(75,50); 
	    vertex(72,-7);
	    vertex(-52,-15); 
	    vertex(73,-30); 
	    vertex(71,-66); 
	    vertex(-23,-78);
	    vertex(70,-87); 
	    vertex(70,-107);
	    vertex(82,-168);
	    vertex(96,-108); 
	    vertex(196,-101);
	    vertex(94,-89); 
	    vertex(95,-50); 
	    vertex(232,-34);
	    vertex(94,-28);
	    vertex(95,12);
	    vertex(252,28);
	    vertex(95,31);
	    vertex(98,68); 
	    vertex(265,81);
	    vertex(98,91); 
	    vertex(96,207); 
	    vertex(78,207); 
	    vertex(73,75); 
	    vertex(-88,63);
	    vertex(75,50); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //tomato stems
	    stroke(50, 186, 64);
	    strokeWeight(2.7);
	    line(106,256,106,265);
	    line(127,256,127,270);
	    line(181,248,181,256);
	    line(161,292,161,281);
	    line(178,292,178,281);
	    line(199,284,199,279);
	    line(127,299,127,288);
	    line(87,295,87,289);
	    line(106,295,106,289);
	    line(80,339,80,326);
	    line(97,339,97,326);
	    line(114,339,114,326);
	    line(130,339,130,326);
	    line(158,339,158,349);
	    line(176,339,176,349);
	    line(195,335,195,349);
	    line(214,336,214,349);
	    line(158,310,158,321);
	    line(176,310,176,321);
	    line(202,309,202,321);
	    noStroke();
	    
	    //yellow tomatos
	    fill(250, 219, 105);
	    ellipse(107,268,12,12);
	    ellipse(127,270,12,12);
	    ellipse(161,260,12,12);
	    ellipse(181,258,12,12);
	    ellipse(159,291,12,12);
	    ellipse(178,290,12,12);
	    ellipse(199,289,12,12);
	    ellipse(159,320,12,12);
	    ellipse(177,321,12,12);
	    ellipse(202,319,12,12);
	    ellipse(106,301,12,12);
	    ellipse(126,304,12,12);
	    ellipse(87,299,12,12);
	    ellipse(158,351,12,12);
	    ellipse(176,350,12,12);
	    ellipse(195,348,12,12);
	    ellipse(214,347,12,12);
	    ellipse(130,344,12,12);
	    ellipse(114,343,12,12);
	    ellipse(97,341,12,12);
	    ellipse(80,339,12,12);
	
	    //leaves
	    var leaf = function(Xpos,Ypos,LeafSizeX,LeafSizeY,Spinny){
	        pushMatrix();
	        translate(Xpos,Ypos);
	        rotate(Spinny);
	        scale(LeafSizeX,LeafSizeY);
	        
	        fill(20, 166, 27);
	        
	        beginShape();
	    
	        curveVertex(-13,-77);
	        curveVertex(121,-57);
	        curveVertex(204,7); 
	        curveVertex(255,95); 
	        curveVertex(215,90);
	        curveVertex(195,64); 
	        curveVertex(165,70); 
	        curveVertex(118,54); 
	        curveVertex(100,31); 
	        curveVertex(71,39);
	        curveVertex(35,30); 
	        curveVertex(12,10); 
	        curveVertex(-12,27); 
	        curveVertex(-45,23); 
	        curveVertex(-62,5);
	        curveVertex(-83,20);
	        curveVertex(-148,17);
	        curveVertex(-75,-55); 
	        curveVertex(-13,-77);
	        curveVertex(121,-57);
	        curveVertex(204,7);
	        
	        endShape();
	    
	        popMatrix();
	    
	    };
	    
	    leaf(155,236,0.080/1.5,0.108/1.5,-66);
	    leaf(167,236,0.080/1.5,0.108/1.5,-66);
	    leaf(177,237,0.080/1.5,0.108/1.5,-66);
	    leaf(189,237,0.080/1.5,0.108/1.5,-66);
	    
	    leaf(196,240,0.063/1.5,0.088/1.5,-41);
	    
	    leaf(155,264,0.080/1.5,0.108/1.5,-66);
	    leaf(165,265,0.080/1.5,0.108/1.5,-66);
	    leaf(175,267,0.080/1.5,0.108/1.5,-66);
	    leaf(187,268,0.080/1.5,0.108/1.5,-66);
	    leaf(198,269,0.080/1.5,0.108/1.5,-66);
	    
	    leaf(206,273,0.063/1.5,0.088/1.5,-41);
	    
	    leaf(155,294,0.080/1.5,0.108/1.5,-66);
	    leaf(166,295,0.080/1.5,0.108/1.5,-66);
	    leaf(176,297,0.080/1.5,0.108/1.5,-66);
	    leaf(187,298,0.080/1.5,0.108/1.5,-66);
	    leaf(198,299,0.080/1.5,0.108/1.5,-66);
	    leaf(210,300,0.080/1.5,0.108/1.5,-66);
	    
	    leaf(218,303,0.063/1.5,0.088/1.5,-41);
	    
	    leaf(156,322,0.080/1.5,0.108/1.5,-66);
	    leaf(166,323,0.080/1.5,0.108/1.5,-66);
	    leaf(178,323,0.080/1.5,0.108/1.5,-66);
	    leaf(189,325,0.080/1.5,0.108/1.5,-66);
	    leaf(200,326,0.080/1.5,0.108/1.5,-66);
	    leaf(213,326,0.080/1.5,0.108/1.5,-66);
	    
	    leaf(222,328,0.063/1.5,0.088/1.5,-41);
	    
	    leaf(131,246,-0.080/1.5,0.108/1.5,66);
	    leaf(120,246,-0.080/1.5,0.108/1.5,66);
	    leaf(109,247,-0.080/1.5,0.108/1.5,66);
	    
	    leaf(102,251,-0.063/1.5,0.088/1.5,41);
	    
	    leaf(131,274,-0.080/1.5,0.108/1.5,66);
	    leaf(120,274,-0.080/1.5,0.108/1.5,66);
	    leaf(111,276,-0.080/1.5,0.108/1.5,66);
	    leaf(100,277,-0.080/1.5,0.108/1.5,66);
	    leaf(90,279,-0.080/1.5,0.108/1.5,66);
	    
	    leaf(83,282,-0.063/1.5,0.088/1.5,41);
	    
	    leaf(133,313,-0.080/1.5,0.108/1.5,66);
	    leaf(121,313,-0.080/1.5,0.108/1.5,66);
	    leaf(111,315,-0.080/1.5,0.108/1.5,66);
	    leaf(101,317,-0.080/1.5,0.108/1.5,66);
	    leaf(89,317,-0.080/1.5,0.108/1.5,66);
	    leaf(76,317,-0.080/1.5,0.108/1.5,66);
	    
	    leaf(68,321,-0.063/1.5,0.088/1.5,41);
	    
	    
	    popMatrix();
	
	};
	
	var tomato4 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    //roots
	    pushMatrix();
	    
	    translate(126,426);
	    scale(0.286,0.314);
	    
	    fill(240, 240, 209);
	    noStroke();
	
	    beginShape();
	 
	    vertex(66,-59); 
	    vertex(39,-36); 
	    vertex(39,-37); 
	    vertex(49,32); 
	    vertex(156,66);
	    vertex(109,65);
	    vertex(161,180); 
	    vertex(128,138); 
	    vertex(118,197);
	    vertex(187,315);
	    vertex(113,214);
	    vertex(88,268); 
	    vertex(116,118);
	    vertex(81,62);
	    vertex(52,59);
	    vertex(64,140);
	    vertex(28,58); 
	    vertex(-13,85);
	    vertex(-47,219);
	    vertex(-34,102);
	    vertex(-95,149);
	    vertex(-34,74); 
	    vertex(-104,20);
	    vertex(-10,60); 
	    vertex(25,32);
	    vertex(19,-26);
	    vertex(-4,-5); 
	    vertex(59,-97);
	    vertex(78,-96);
	    vertex(112,-49);
	    vertex(264,-70);
	    vertex(204,-45);
	    vertex(200,-1); 
	    vertex(308,111);
	    vertex(260,78); 
	    vertex(289,225);
	    vertex(268,184);
	    vertex(229,266);
	    vertex(262,162);
	    vertex(241,65);
	    vertex(199,25);
	    vertex(187,156);
	    vertex(183,-39);
	    vertex(120,-30);
	    vertex(133,-4); 
	    vertex(66,-59); 
	    vertex(39,-36);
	    vertex(39,-37); 
	    
	    endShape();
	
	    popMatrix();
	
	    //stem
	    pushMatrix();
	    
	    translate(106,295);
	    scale(0.452,0.492);
	    
	    fill(35, 191, 32);
	
	    beginShape();
	 
	    vertex(73,75); 
	    vertex(-88,63);
	    vertex(75,50); 
	    vertex(72,-7);
	    vertex(-52,-15); 
	    vertex(73,-30); 
	    vertex(71,-66); 
	    vertex(-23,-78);
	    vertex(70,-87); 
	    vertex(70,-107);
	    vertex(82,-168);
	    vertex(96,-108); 
	    vertex(196,-101);
	    vertex(94,-89); 
	    vertex(95,-50); 
	    vertex(232,-34);
	    vertex(94,-28);
	    vertex(95,12);
	    vertex(252,28);
	    vertex(95,31);
	    vertex(98,68); 
	    vertex(265,81);
	    vertex(98,91); 
	    vertex(96,207); 
	    vertex(78,207); 
	    vertex(73,75); 
	    vertex(-88,63);
	    vertex(75,50); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //tomato stems
	    stroke(50, 186, 64);
	    strokeWeight(2.7);
	    line(106,256,106,265);
	    line(127,256,127,270);
	    line(181,248,181,256);
	    line(161,292,161,281);
	    line(178,292,178,281);
	    line(199,284,199,279);
	    line(127,299,127,288);
	    line(87,295,87,289);
	    line(106,295,106,289);
	    line(80,339,80,326);
	    line(97,339,97,326);
	    line(114,339,114,326);
	    line(130,339,130,326);
	    line(158,339,158,349);
	    line(176,339,176,349);
	    line(195,335,195,349);
	    line(214,336,214,349);
	    line(158,310,158,321);
	    line(176,310,176,321);
	    line(202,309,202,321);
	    noStroke();
	
	    //yellow tomatos
	    fill(227, 40, 36);
	    ellipse(107,268,12,12);
	    ellipse(127,270,12,12);
	    ellipse(161,260,12,12);
	    ellipse(181,258,12,12);
	    ellipse(159,291,12,12);
	    ellipse(178,290,12,12);
	    ellipse(199,289,12,12);
	    ellipse(159,320,12,12);
	    ellipse(177,321,12,12);
	    ellipse(202,319,12,12);
	    ellipse(106,301,12,12);
	    ellipse(126,304,12,12);
	    ellipse(87,299,12,12);
	    ellipse(158,351,12,12);
	    ellipse(176,350,12,12);
	    ellipse(195,348,12,12);
	    ellipse(214,347,12,12);
	    ellipse(130,344,12,12);
	    ellipse(114,343,12,12);
	    ellipse(97,341,12,12);
	    ellipse(80,339,12,12);
	
	    //leaves
	    var leaf = function(Xpos,Ypos,LeafSizeX,LeafSizeY,Spinny){
	        pushMatrix();
	        translate(Xpos,Ypos);
	        rotate(Spinny);
	        scale(LeafSizeX,LeafSizeY);
	        
	        fill(20, 166, 27);
	        
	        beginShape();
	        
	        curveVertex(-13,-77);
	        curveVertex(121,-57);
	        curveVertex(204,7); 
	        curveVertex(255,95); 
	        curveVertex(215,90);
	        curveVertex(195,64); 
	        curveVertex(165,70); 
	        curveVertex(118,54); 
	        curveVertex(100,31); 
	        curveVertex(71,39);
	        curveVertex(35,30); 
	        curveVertex(12,10); 
	        curveVertex(-12,27); 
	        curveVertex(-45,23); 
	        curveVertex(-62,5);
	        curveVertex(-83,20);
	        curveVertex(-148,17);
	        curveVertex(-75,-55); 
	        curveVertex(-13,-77);
	        curveVertex(121,-57);
	        curveVertex(204,7);
	        
	        endShape();
	    
	        popMatrix();
	    
	    };
	    
	    leaf(155,236,0.080/1.5,0.108/1.5,-66);
	    leaf(167,236,0.080/1.5,0.108/1.5,-66);
	    leaf(177,237,0.080/1.5,0.108/1.5,-66);
	    leaf(189,237,0.080/1.5,0.108/1.5,-66);
	    
	    leaf(196,240,0.063/1.5,0.088/1.5,-41);
	    
	    leaf(155,264,0.080/1.5,0.108/1.5,-66);
	    leaf(165,265,0.080/1.5,0.108/1.5,-66);
	    leaf(175,267,0.080/1.5,0.108/1.5,-66);
	    leaf(187,268,0.080/1.5,0.108/1.5,-66);
	    leaf(198,269,0.080/1.5,0.108/1.5,-66);
	    
	    leaf(206,273,0.063/1.5,0.088/1.5,-41);
	    
	    leaf(155,294,0.080/1.5,0.108/1.5,-66);
	    leaf(166,295,0.080/1.5,0.108/1.5,-66);
	    leaf(176,297,0.080/1.5,0.108/1.5,-66);
	    leaf(187,298,0.080/1.5,0.108/1.5,-66);
	    leaf(198,299,0.080/1.5,0.108/1.5,-66);
	    leaf(210,300,0.080/1.5,0.108/1.5,-66);
	    
	    leaf(218,303,0.063/1.5,0.088/1.5,-41);
	    
	    leaf(156,322,0.080/1.5,0.108/1.5,-66);
	    leaf(166,323,0.080/1.5,0.108/1.5,-66);
	    leaf(178,323,0.080/1.5,0.108/1.5,-66);
	    leaf(189,325,0.080/1.5,0.108/1.5,-66);
	    leaf(200,326,0.080/1.5,0.108/1.5,-66);
	    leaf(213,326,0.080/1.5,0.108/1.5,-66);
	    
	    leaf(222,328,0.063/1.5,0.088/1.5,-41);
	    
	    leaf(131,246,-0.080/1.5,0.108/1.5,66);
	    leaf(120,246,-0.080/1.5,0.108/1.5,66);
	    leaf(109,247,-0.080/1.5,0.108/1.5,66);
	    
	    leaf(102,251,-0.063/1.5,0.088/1.5,41);
	    
	    leaf(131,274,-0.080/1.5,0.108/1.5,66);
	    leaf(120,274,-0.080/1.5,0.108/1.5,66);
	    leaf(111,276,-0.080/1.5,0.108/1.5,66);
	    leaf(100,277,-0.080/1.5,0.108/1.5,66);
	    leaf(90,279,-0.080/1.5,0.108/1.5,66);
	    
	    leaf(83,282,-0.063/1.5,0.088/1.5,41);
	    
	    leaf(133,313,-0.080/1.5,0.108/1.5,66);
	    leaf(121,313,-0.080/1.5,0.108/1.5,66);
	    leaf(111,315,-0.080/1.5,0.108/1.5,66);
	    leaf(101,317,-0.080/1.5,0.108/1.5,66);
	    leaf(89,317,-0.080/1.5,0.108/1.5,66);
	    leaf(76,317,-0.080/1.5,0.108/1.5,66);
	    
	    leaf(68,321,-0.063/1.5,0.088/1.5,41);
	    
	    
	    popMatrix();
	
	};
	
	// Small tomato img for btn
	var sti = function(x, y) {
	    pushMatrix();
	    scale(0.5, 0.5);
	    tomato0(x, y);
	    popMatrix();
	};
	
	// Pumpkin stages
	var pumpkin0 = function(X,Y,SizeX,SizeY){
	
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    //stem
	    pushMatrix();
	    translate(151,89);
	    scale(0.138,0.151);
	    
	    noStroke();
	    fill(26, 153, 39);
	    
	    beginShape();
	
	    curveVertex(-23,-159);
	    curveVertex(86,-92);
	    curveVertex(75,233);
	    curveVertex(54,285);
	    curveVertex(33,226);
	    curveVertex(45,25); 
	    curveVertex(44,-75);
	    curveVertex(-8,-118);
	    curveVertex(-91,-88);
	    curveVertex(-105,-33);
	    curveVertex(-70,15); 
	    curveVertex(-34,22); 
	    curveVertex(-2,-6); 
	    curveVertex(-3,-57);
	    curveVertex(-33,-76); 
	    curveVertex(-76,-23);
	    curveVertex(-75,-75); 
	    curveVertex(-34,-96); 
	    curveVertex(16,-74); 
	    curveVertex(19,19); 
	    curveVertex(-56,53);
	    curveVertex(-131,-9);
	    curveVertex(-116,-115);
	    curveVertex(-23,-159); 
	    curveVertex(86,-92);
	    curveVertex(75,233); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //seed
	    pushMatrix();
	    translate(148,135);
	    scale(0.130,0.138);
	    
	    fill(241, 245, 208);
	
	    beginShape();
	 
	    curveVertex(82,-122);
	    curveVertex(140,68); 
	    curveVertex(82,146); 
	    curveVertex(19,62);
	    curveVertex(82,-122);
	    curveVertex(140,68);
	    curveVertex(82,146); 
	    
	    endShape();
	
	    translate(18,6);
	    scale(0.781,0.766);
	    fill(230, 226, 187);
	    beginShape();
	 
	    curveVertex(82,-122);
	    curveVertex(140,68); 
	    curveVertex(82,146); 
	    curveVertex(19,62);
	    curveVertex(82,-122);
	    curveVertex(140,68);
	    curveVertex(82,146); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //leaf
	    pushMatrix();
	    translate(171,28);
	    scale(0.166,0.150);
	    rotate(33);
	    
	    fill(19, 171, 21);
	
	    beginShape();
	 
	    vertex(-60,178);
	    vertex(-25,158); 
	    vertex(-25,157); 
	    vertex(-47,130);
	    vertex(9,120);
	    vertex(-45,44); 
	    vertex(-8,50); 
	    vertex(-3,25); 
	    vertex(43,69); 
	    vertex(47,-31);
	    vertex(72,-11); 
	    vertex(96,-29); 
	    vertex(97,72); 
	    vertex(161,29);
	    vertex(156,62);
	    vertex(182,73); 
	    vertex(123,123);
	    vertex(194,143); 
	    vertex(165,161);
	    vertex(206,183);
	    vertex(93,204); 
	    vertex(97,269); 
	    vertex(63,270);
	    vertex(61,201);
	    vertex(-60,178);
	    vertex(-25,158);
	    vertex(-25,157);
	    
	    endShape();
	
	    popMatrix();
	    
	    popMatrix();
	
	};
	
	var pumpkin1 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	    
	    //leaves
	    var leaf = function(xpos,ypos,LeafSizeX,LeafSizeY,spin){
	    pushMatrix();
	    translate(xpos,ypos);
	    scale(LeafSizeX,LeafSizeY);
	    rotate(spin);
	    
	    noStroke();
	    fill(19, 171, 21);
	
	        beginShape();
	        
	        vertex(-60,178);
	        vertex(-25,158); 
	        vertex(-25,157); 
	        vertex(-47,130);
	        vertex(9,120);
	        vertex(-45,44); 
	        vertex(-8,50); 
	        vertex(-3,25); 
	        vertex(43,69); 
	        vertex(47,-31);
	        vertex(72,-11); 
	        vertex(96,-29); 
	        vertex(97,72); 
	        vertex(161,29);
	        vertex(156,62);
	        vertex(182,73); 
	        vertex(123,123);
	        vertex(194,143); 
	        vertex(165,161);
	        vertex(206,183);
	        vertex(93,204); 
	        vertex(97,269); 
	        vertex(63,270);
	        vertex(61,201);
	        vertex(-60,178);
	        vertex(-25,158);
	        vertex(-25,157);
	        
	        endShape();
	    
	        popMatrix();
	    
	    };
	
	    leaf(309,107,0.172,0.167,-44);
	    leaf(381,73,0.101,0.099,33);
	    leaf(352,81,0.101,0.099,-33);
	    
	    //pumpkin
	    pushMatrix();
	    
	    translate(337,142);
	    scale(0.143,0.108);
	    
	    fill(127, 207, 15);
	    noStroke();
	    
	    beginShape();
	
	    curveVertex(-10,-140);
	    curveVertex(159,-141);
	    curveVertex(280,-68); 
	    curveVertex(226,190); 
	    curveVertex(93,203); 
	    curveVertex(-40,186);
	    curveVertex(-108,-72);
	    curveVertex(-10,-140); 
	    curveVertex(159,-141); 
	    curveVertex(280,-68); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //pumpkin lines
	    stroke(27, 156, 25);
	    strokeWeight(2);
	    line(338,160,330,133);
	    line(352,160,351,131);
	    line(365,160,369,134);
	    noStroke();
	    
	    //stem
	    pushMatrix();
	    translate(354,113);
	    scale(0.076,0.116);
	    
	    fill(35, 120, 16);
	
	    beginShape();
	 
	    curveVertex(164,-143);
	    curveVertex(337,-110); 
	    curveVertex(374,-8); 
	    curveVertex(386,395);
	    curveVertex(325,398); 
	    curveVertex(302,51);
	    curveVertex(250,-67); 
	    curveVertex(39,-65);
	    curveVertex(14,95); 
	    curveVertex(-68,97);
	    curveVertex(-51,-98);
	    curveVertex(164,-143); 
	    curveVertex(337,-110);
	    curveVertex(374,-8); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //roots
	    pushMatrix();
	    translate(357,197);
	    scale(0.261,0.267);
	    
	    fill(247, 242, 201);
	    
	    beginShape();
	
	    vertex(73,-129); 
	    vertex(102,-130);
	    vertex(203,-57); 
	    vertex(107,-100);
	    vertex(104,-37); 
	    vertex(196,127); 
	    vertex(156,81); 
	    vertex(122,131);
	    vertex(147,65); 
	    vertex(103,6);
	    vertex(87,140);
	    vertex(78,58); 
	    vertex(-27,198);
	    vertex(77,23);
	    vertex(76,-101);
	    vertex(26,-73); 
	    vertex(0,-8); 
	    vertex(8,-70);
	    vertex(-41,-48); 
	    vertex(73,-129); 
	    vertex(102,-130); 
	    vertex(203,-57); 
	    
	    endShape();
	
	    popMatrix();
	    
	    popMatrix();
	
	};
	
	var pumpkin2 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	
	    //leaves
	    var leaf = function(xpos,ypos,LeafSizeX,LeafSizeY,spin){
	        pushMatrix();
	        translate(xpos,ypos);
	        scale(LeafSizeX,LeafSizeY);
	        rotate(spin);
	        
	        noStroke();
	        fill(19, 171, 21);
	        
	        beginShape();
	        
	        vertex(-60,178);
	        vertex(-25,158); 
	        vertex(-25,157); 
	        vertex(-47,130);
	        vertex(9,120);
	        vertex(-45,44); 
	        vertex(-8,50); 
	        vertex(-3,25); 
	        vertex(43,69); 
	        vertex(47,-31);
	        vertex(72,-11); 
	        vertex(96,-29); 
	        vertex(97,72); 
	        vertex(161,29);
	        vertex(156,62);
	        vertex(182,73); 
	        vertex(123,123);
	        vertex(194,143); 
	        vertex(165,161);
	        vertex(206,183);
	        vertex(93,204); 
	        vertex(97,269); 
	        vertex(63,270);
	        vertex(61,201);
	        vertex(-60,178);
	        vertex(-25,158);
	        vertex(-25,157);
	        
	        endShape();
	    
	        popMatrix();
	
	    };
	    
	    leaf(307,103,0.172,0.167,-44);
	    leaf(381,70,0.101,0.099,33);
	    leaf(352,77,0.101,0.099,-33);
	    
	    //pumpkin
	    pushMatrix();
	    
	    translate(337,144);
	    scale(0.174,0.132);
	    
	    fill(197, 207, 16);
	    noStroke();
	    
	    beginShape();
	
	    curveVertex(-10,-140);
	    curveVertex(159,-141);
	    curveVertex(280,-68); 
	    curveVertex(226,190); 
	    curveVertex(93,203); 
	    curveVertex(-40,186);
	    curveVertex(-108,-72);
	    curveVertex(-10,-140); 
	    curveVertex(159,-141); 
	    curveVertex(280,-68); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //pumpkin lines
	    stroke(117, 156, 26);
	    strokeWeight(2);
	    line(338,165,330,133);
	    line(352,163,351,131);
	    line(367,164,371,134);
	    noStroke();
	    
	    //stem
	    pushMatrix();
	    translate(354,113);
	    scale(0.103,0.133);
	    
	    fill(35, 120, 16);
	
	    beginShape();
	 
	    curveVertex(164,-143);
	    curveVertex(337,-110); 
	    curveVertex(374,-8); 
	    curveVertex(386,395);
	    curveVertex(325,398); 
	    curveVertex(302,51);
	    curveVertex(250,-67); 
	    curveVertex(39,-65);
	    curveVertex(14,95); 
	    curveVertex(-68,97);
	    curveVertex(-51,-98);
	    curveVertex(164,-143); 
	    curveVertex(337,-110);
	    curveVertex(374,-8); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //roots
	    pushMatrix();
	    translate(368,204);
	    scale(0.261,0.267);
	    
	    fill(247, 242, 201);
	
	    beginShape();
	 
	    vertex(73,-129);
	    vertex(102,-130);
	    vertex(203,-57); 
	    vertex(163,-74); 
	    vertex(185,13); 
	    vertex(144,-84); 
	    vertex(107,-100);
	    vertex(104,-37);
	    vertex(196,127);
	    vertex(156,81); 
	    vertex(122,131);
	    vertex(147,65);
	    vertex(103,6); 
	    vertex(97,146);
	    vertex(146,207);
	    vertex(265,218);
	    vertex(155,219);
	    vertex(192,290);
	    vertex(97,171); 
	    vertex(93,230); 
	    vertex(78,58); 
	    vertex(33,134);
	    vertex(39,351); 
	    vertex(15,155); 
	    vertex(-27,198);
	    vertex(44,74);
	    vertex(-67,56); 
	    vertex(54,53); 
	    vertex(77,23); 
	    vertex(76,-101);
	    vertex(26,-73); 
	    vertex(0,-8); 
	    vertex(8,-70); 
	    vertex(-41,-48);
	    vertex(73,-129);
	    vertex(102,-130);
	    vertex(203,-57); 
	    
	    endShape();
	
	    popMatrix();
	    
	    popMatrix();
	
	};
	
	var pumpkin3 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	
	    //leaves
	    var leaf = function(xpos,ypos,LeafSizeX,LeafSizeY,spin){
	        pushMatrix();
	        translate(xpos,ypos);
	        scale(LeafSizeX,LeafSizeY);
	        rotate(spin);
	        
	        noStroke();
	        fill(19, 171, 21);
	        
	        beginShape();
	        
	        vertex(-60,178);
	        vertex(-25,158); 
	        vertex(-25,157); 
	        vertex(-47,130);
	        vertex(9,120);
	        vertex(-45,44); 
	        vertex(-8,50); 
	        vertex(-3,25); 
	        vertex(43,69); 
	        vertex(47,-31);
	        vertex(72,-11); 
	        vertex(96,-29); 
	        vertex(97,72); 
	        vertex(161,29);
	        vertex(156,62);
	        vertex(182,73); 
	        vertex(123,123);
	        vertex(194,143); 
	        vertex(165,161);
	        vertex(206,183);
	        vertex(93,204); 
	        vertex(97,269); 
	        vertex(63,270);
	        vertex(61,201);
	        vertex(-60,178);
	        vertex(-25,158);
	        vertex(-25,157);
	        
	        endShape();
	    
	        popMatrix();
	
	    };
	    
	    leaf(307,102,0.172,0.167,-44);
	    leaf(388,65,0.136,0.119,33);
	    leaf(345,74,0.124,0.125,-33);
	    
	    //pumpkin
	    pushMatrix();
	    
	    translate(334,144);
	    scale(0.198,0.144);
	    
	    fill(207, 178, 16);
	    noStroke();
	    
	    beginShape();
	
	    curveVertex(-10,-140);
	    curveVertex(159,-141);
	    curveVertex(280,-68); 
	    curveVertex(226,190); 
	    curveVertex(93,203); 
	    curveVertex(-40,186);
	    curveVertex(-108,-72);
	    curveVertex(-10,-140); 
	    curveVertex(159,-141); 
	    curveVertex(280,-68); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //pumpkin lines
	    stroke(156, 128, 26);
	    strokeWeight(2);
	    line(337,167,326,131);
	    line(352,166,351,131);
	    line(369,166,374,131);
	    noStroke();
	    
	    //stem
	    pushMatrix();
	    translate(354,113);
	    scale(0.119,0.133);
	    
	    fill(35, 120, 16);
	
	    beginShape();
	 
	    curveVertex(164,-143);
	    curveVertex(337,-110); 
	    curveVertex(374,-8); 
	    curveVertex(386,395);
	    curveVertex(325,398); 
	    curveVertex(302,51);
	    curveVertex(250,-67); 
	    curveVertex(39,-65);
	    curveVertex(14,95); 
	    curveVertex(-68,97);
	    curveVertex(-51,-98);
	    curveVertex(164,-143); 
	    curveVertex(337,-110);
	    curveVertex(374,-8); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //roots
	    pushMatrix();
	    translate(373,205);
	    scale(0.261,0.267);
	    
	    fill(247, 242, 201);
	
	    beginShape();
	 
	    vertex(73,-129);
	    vertex(102,-130);
	    vertex(203,-57); 
	    vertex(163,-74);
	    vertex(185,13); 
	    vertex(144,-84);
	    vertex(107,-100);
	    vertex(106,-29); 
	    vertex(200,104); 
	    vertex(287,100);
	    vertex(210,122);
	    vertex(225,158); 
	    vertex(156,81); 
	    vertex(122,131);
	    vertex(147,65); 
	    vertex(103,6); 
	    vertex(97,146);
	    vertex(146,207);
	    vertex(265,218);
	    vertex(155,219);
	    vertex(192,290); 
	    vertex(97,171); 
	    vertex(93,230); 
	    vertex(78,58); 
	    vertex(33,134); 
	    vertex(39,351); 
	    vertex(23,262);
	    vertex(-47,346);
	    vertex(-28,306);
	    vertex(-158,319);
	    vertex(-18,287);
	    vertex(27,238); 
	    vertex(15,155); 
	    vertex(-44,225);
	    vertex(44,74); 
	    vertex(1,72); 
	    vertex(-92,164);
	    vertex(-17,68);
	    vertex(-86,54);
	    vertex(54,53);
	    vertex(77,23);
	    vertex(76,-101);
	    vertex(26,-73); 
	    vertex(0,-8);
	    vertex(8,-70);
	    vertex(-41,-48); 
	    vertex(73,-129);
	    vertex(102,-130);
	    vertex(203,-57); 
	    
	    endShape();
	
	    popMatrix();
	    
	    popMatrix();
	
	};
	
	var pumpkin4 = function(X,Y,SizeX,SizeY){
	    pushMatrix();
	    translate(X,Y);
	    scale(SizeX,SizeY);
	
	    //leaves
	    var leaf = function(xpos,ypos,LeafSizeX,LeafSizeY,spin){
	        pushMatrix();
	        translate(xpos,ypos);
	        scale(LeafSizeX,LeafSizeY);
	        rotate(spin);
	        
	        noStroke();
	        fill(19, 171, 21);
	        
	        beginShape();
	        
	        vertex(-60,178);
	        vertex(-25,158); 
	        vertex(-25,157); 
	        vertex(-47,130);
	        vertex(9,120);
	        vertex(-45,44); 
	        vertex(-8,50); 
	        vertex(-3,25); 
	        vertex(43,69); 
	        vertex(47,-31);
	        vertex(72,-11); 
	        vertex(96,-29); 
	        vertex(97,72); 
	        vertex(161,29);
	        vertex(156,62);
	        vertex(182,73); 
	        vertex(123,123);
	        vertex(194,143); 
	        vertex(165,161);
	        vertex(206,183);
	        vertex(93,204); 
	        vertex(97,269); 
	        vertex(63,270);
	        vertex(61,201);
	        vertex(-60,178);
	        vertex(-25,158);
	        vertex(-25,157);
	        
	        endShape();
	    
	        popMatrix();
	    
	    };
	
	    leaf(305,99,0.172,0.167,-44);
	    leaf(388,56,0.136,0.119,33);
	    leaf(345,65,0.124,0.125,-33);
	    
	    //pumpkin
	    pushMatrix();
	    
	    translate(330,144);
	    scale(0.236,0.173);
	    
	    fill(232, 152, 23);
	    noStroke();
	    
	    beginShape();
	
	    curveVertex(-10,-140);
	    curveVertex(159,-141);
	    curveVertex(280,-68); 
	    curveVertex(226,190); 
	    curveVertex(93,203); 
	    curveVertex(-40,186);
	    curveVertex(-108,-72);
	    curveVertex(-10,-140); 
	    curveVertex(159,-141); 
	    curveVertex(280,-68); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //pumpkin lines
	    stroke(181, 108, 34);
	    strokeWeight(2);
	    line(332,171,322,128);
	    line(352,170,351,131);
	    line(371,173,378,128);
	    noStroke();
	    
	    //stem
	    pushMatrix();
	    translate(355,109);
	    scale(0.148,0.163);
	    
	    fill(35, 120, 16);
	
	    beginShape();
	 
	    curveVertex(164,-143);
	    curveVertex(337,-110); 
	    curveVertex(374,-8); 
	    curveVertex(386,395);
	    curveVertex(325,398); 
	    curveVertex(302,51);
	    curveVertex(250,-67); 
	    curveVertex(39,-65);
	    curveVertex(14,95); 
	    curveVertex(-68,97);
	    curveVertex(-51,-98);
	    curveVertex(164,-143); 
	    curveVertex(337,-110);
	    curveVertex(374,-8); 
	    
	    endShape();
	
	    popMatrix();
	    
	    //roots
	    pushMatrix();
	    translate(385,213);
	    scale(0.261,0.267);
	    
	    fill(247, 242, 201);
	
	    beginShape();
	  
	    vertex(73,-129);
	    vertex(102,-130); 
	    vertex(244,-36);
	    vertex(163,-74);
	    vertex(189,48); 
	    vertex(144,-84);
	    vertex(107,-100);
	    vertex(106,-29);
	    vertex(200,104);
	    vertex(340,86); 
	    vertex(210,122);
	    vertex(248,193);
	    vertex(156,81); 
	    vertex(122,131);
	    vertex(147,65); 
	    vertex(103,6); 
	    vertex(97,146); 
	    vertex(146,207);
	    vertex(265,218);
	    vertex(155,219); 
	    vertex(243,360);
	    vertex(177,278);
	    vertex(142,343);
	    vertex(167,262);
	    vertex(97,171); 
	    vertex(99,239); 
	    vertex(136,291);
	    vertex(97,255); 
	    vertex(90,351);
	    vertex(78,58); 
	    vertex(33,134);
	    vertex(51,396);
	    vertex(23,262);
	    vertex(-61,369); 
	    vertex(-28,306);
	    vertex(-153,371);
	    vertex(-94,322); 
	    vertex(-183,223);
	    vertex(-77,312);
	    vertex(-18,287); 
	    vertex(27,238); 
	    vertex(15,155); 
	    vertex(-44,225);
	    vertex(44,74);
	    vertex(1,72); 
	    vertex(-115,154);
	    vertex(-17,68); 
	    vertex(-128,52); 
	    vertex(54,53); 
	    vertex(77,23); 
	    vertex(76,-36);
	    vertex(32,13); 
	    vertex(74,-59);
	    vertex(76,-101);
	    vertex(26,-73);
	    vertex(-10,22); 
	    vertex(8,-70); 
	    vertex(-69,-31);
	    vertex(73,-129);
	    vertex(102,-130);
	    vertex(244,-36);
	    
	    endShape();
	
	    popMatrix();
	    
	    popMatrix();
	
	};
	
	// Small pumpking img for btn
	var sppi = function(x, y) {
	    pushMatrix();
	    scale(0.5, 0.5);
	    pumpkin0(x, y);
	    popMatrix();
	};
	
	var logo = function (x, y, s) {
	    
	    noStroke();
	    fill(0, 0, 0);
	    ellipse(x, y, s, s);
	    
	    fill(255, 255, 255);
	    ellipse(x, y, s - 10, s - 10);
	    
	    fill(0, 0, 0);
	    ellipse(x, y, s - 15, s - 35);
	    ellipse(x, y, s - 35, s - 15);
	    
	    fill(255, 255, 255);
	    ellipse(x, y, s - 35, s - 35);
	    
	    fill(0, 0, 0);
	    ellipse(x, y, s - 40, s - 40);
	    
	};
	
	var TeamLogo = function (x, y, s) {
	    pushMatrix();
	        translate(x, y);
	        scale(s);
	        
	        noStroke();
	        fill(38, 255, 0);
	        rect(150, 150, 100, 100);
	        
	        fill(255, 0, 0);
	        ellipse(200, 200, 70, 50);
	        ellipse(200, 200, 50, 70);
	        
	        fill(217, 0, 255);
	        ellipse(250, 250, 10, 10);
	        ellipse(150, 250, 10, 10);
	        ellipse(250, 150, 10, 10);
	        ellipse(150, 150, 10, 10);
	        
	        fill(0, 26, 255);
	        ellipse(200, 150, 10, 10);
	        ellipse(200, 250, 10, 10);
	        ellipse(250, 200, 10, 10);
	        ellipse(150, 200, 10, 10);
	        
	        logo(200, 200, 45);
	        
	    popMatrix();
	};
	
	// Shattered background {
	
	randomSeed(100000000000);
	
	background(0);
	
	for (var i = 0; i < 320; i++) {
	    pushMatrix();
	        translate(200, 200);
	        rotate(i * random(-360, 260));
	        
	        pushMatrix();
	            translate(0, 0);
	            
	            fill(0 + (0.8 * i), 200 - (1.3 * i), 200);
	            stroke(0);
	            strokeWeight(random(1, 2));
	            quad(random(-17, 116), random(116, 228), 0, i + random(79, 68), random(15, 30), i + random(30, 50), 0, i);
	            
	        popMatrix();
	        
	    popMatrix();
	}
	
	// Save it
	var bg = get(0, 0, 400, 400);
	background(255);
	// }
	
	// }
	
	/** Constructors **/
	// {
	// Plant constructor
	var plant = function(x, y, type, stage, ptype, slot) {
	    this.x = x;
	    this.y = y;
	    this.type = type;
	    this.stage = stage;
	    this.pType = ptype;
	    this.slot = slot;
	    this.timer = 0;
	    this.used = false;
	    this.canHarvest = false;
	    this.canAdd = true;
	};
	
	plant.prototype.display = function() {
	    switch (this.type) {
	        case "potato":
	            switch (this.stage) {
	                case 0:
	                    potato0(this.x + 110, this.y, 1, 1);
	                    break;
	                case 1:
	                    potato1(this.x, this.y, 1, 1);
	                    break;
	                case 2:
	                    potato2(this.x, this.y, 1, 1);
	                    break;
	                case 3:
	                    potato3(this.x, this.y, 1, 1);
	                    break;
	                case 4:
	                    potato4(this.x, this.y, 1, 1);
	                    break;
	            }
	            
	            break;
	            
	        case "carrot":
	            switch (this.stage) {
	                case 0:
	                    carrot0(this.x + 235, this.y + 90, 0.5, 0.5);
	                    break;
	                case 1:
	                    carrot1(this.x + 115, this.y, 1, 1);
	                    break;
	                case 2:
	                    carrot2(this.x + 115, this.y, 1, 1);
	                    break;
	                case 3:
	                    carrot3(this.x + 115, this.y, 1, 1);
	                    break;
	                case 4:
	                    carrot4(this.x + 115, this.y, 1, 1);
	                    break;
	            }
	            
	            break;
	            
	        case "tomato":
	            switch (this.stage) {
	                case 0:
	                    tomato0(this.x + 225, this.y + 22.5, 1, 1);
	                    break;
	                case 1:
	                    tomato1(this.x + 140, this.y + 20, 1, 1);
	                    break;
	                case 2:
	                    tomato2(this.x, this.y + 25, 1, 1);
	                    break;
	                case 3:
	                    tomato3(this.x + 195, this.y - 225, 1, 1);
	                    break;
	                case 4:
	                    tomato4(this.x + 195, this.y - 225, 1, 1);
	                    break;
	            }
	            
	            break;
	            
	        case "pumpkin":
	            switch (this.stage) {
	                case 0:
	                    pumpkin0(this.x + 190, this.y + 35, 1, 1);
	                    break;
	                case 1:
	                    pumpkin1(this.x - 30, this.y - 20, 1, 1);
	                    break;
	                case 2:
	                    pumpkin2(this.x - 40, this.y - 20, 1, 1);
	                    break;
	                case 3:
	                    pumpkin3(this.x - 40, this.y - 20, 1, 1);
	                    break;
	                case 4:
	                    pumpkin4(this.x - 60, this.y - 30, 1, 1);
	                    break;
	            }
	        break;
	    }
	    
	    if (this.pType === "needspot") {
	        wpot(this.x, this.y, pot);
	    } else if (this.pType === "nopot") {
	        return;
	    }
	};
	
	plant.prototype.grow = function() {
	    if (this.timer < 360 && this.stage !== 4) {
	        this.stage = this.stage;
	    } else if (this.timer >= 360 && this.stage !== 4) {
	        this.stage++;
	        this.used = false;
	        this.timer = 0;
	    } else if (this.stage === 4) {
	        this.canHarvest = true;
	    }
	    
	    if (this.stage === 1 && this.used === false && this.type === "potato") {
	        this.x += 165;
	        this.y += 25;
	        this.used = true;
	    } else if (this.stage === 2 && this.used === false && this.type === "potato") {
	        this.x -= 15;
	        this.y -= 25;
	        this.used = true;
	    } else if (this.stage === 3 && this.used === false && this.type === "potato") {
	        this.x -= 175;
	        this.y -= 125;
	        this.used = true;
	    } else if (this.stage === 4 && this.used === false && this.type === "potato") {
	        this.x += 140;
	        this.y += 15;
	        this.used = true;
	    }
	    
	    if (this.stage === 1 && this.used === false && this.type === "carrot") {
	        this.x -= 0;
	        this.y -= 65;
	        this.used = true;
	    } else if (this.stage === 2 && this.used === false && this.type === "carrot") {
	        this.x -= 120;
	        this.y -= 0;
	        this.used = true;
	    } else if (this.stage === 3 && this.used === false && this.type === "carrot") {
	        this.x += 65;
	        this.y -= 135;
	        this.used = true;
	    } else if (this.stage === 4 && this.used === false && this.type === "carrot") {
	        this.x -= 150;
	        this.used = true;
	    }
	    
	    this.timer++;
	};
	
	plant.prototype.harvest = function() {
	    if (this.canHarvest && clicked) {
	        switch (this.type) {
	            case "potato":
	                money+=2;
	                break;
	            case "carrot":
	                money+=10;
	                break;
	            case "tomato":
	                money+=45;
	                break;
	            case "pumpkin":
	                money += 120;
	                break;
	        }
	        
	        used[this.slot] = false;
	    }
	};
	
	var seedBtn = function(x, y, w, h, seedType, img, cost, inArr) {
	    this.x = x;
	    this.y = y;
	    this.w = w;
	    this.h = h;
	    this.type = seedType;
	    this.img = img;
	    this.cost = cost;
	    this.inArr = inArr;
	    this.bought = false;
	};
	
	seedBtn.prototype.draw = function() {
	    noFill();
	    stroke(255, 255, 255);
	    strokeWeight(7.5);
	    rect(this.x, this.y, this.w, this.h, 10);
	    
	    fill(255, 255, 255);
	    textSize(15);
	    
	    strokeWeight(1);
	    text("cost: " + this.cost, this.x + (this.w / 2), this.y + (this.h * 1.25));
	    
	    if (this.type === "potato") {
	        spi(this.x - 140, this.y - 75);
	    }
	    
	    if (this.type === "carrot") {
	        sci(this.x - 25, this.y - 35);
	    }
	    
	    if (this.type === "tomato") {
	        sti(this.x + 175, this.y-35);
	    }
	    
	    if (this.type === "pumpkin") {
	        sppi(this.x+ 240, this.y + 5);
	    }
	};
	
	seedBtn.prototype.pack = function() {
	    this.draw();
	    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h && clicked === true && money >= this.cost) {
	        this.bought = true;
	        if (this.type === "potato") {
	            seedObj.potatoSeeds++;
	        } else if (this.type === "carrot") {
	            seedObj.carrotSeeds++;
	        } else if (this.type === "tomato") {
	            seedObj.tomatoSeeds++;
	        } else if (this.type === "pumpkin") {
	            seedObj.pumpkinSeeds++;
	        }
	        money -= this.cost;
	        owned[this.inArr] = true;
	        
	        seed = this.type;
	    } else if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h && clicked === true) {
	        seed = this.type;
	    }
	};
	
	// Button constructor
	var button = function(x, y, w, h, sceneTo, text) {
	    this.x = x;
	    this.y = y;
	    this.w = w;
	    this.h = h;
	    this.to = sceneTo;
	    this.text = text;
	};
	
	button.prototype.draw = function() {
	    pushMatrix();
	    noStroke();
	    rectMode(CENTER);
	    textAlign(CENTER, CENTER);
	    fill(37, 176, 95);
	    rect(this.x, this.y, this.w, this.h, 200, 0, 200, 0);
	    fill(255, 255, 255);
	    textSize(35);
	    text(this.text, this.x, this.y);
	    textAlign(CORNER, CORNER);
	    popMatrix();
	};
	
	button.prototype.onHover = function() {
	    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2 && mouseY > this.y - (this.h / 2) && mouseY < this.y + this.h / 2) {
	        pushMatrix();
	        rectMode(CENTER);
	        textAlign(CENTER, CENTER);
	        stroke(255, 255, 255);
	        strokeWeight(4);
	        fill(14, 204, 18);
	        rect(this.x, this.y, this.w, this.h, 200, 0, 200, 0);
	        noStroke();
	        fill(255, 255, 255);
	        text(this.text, this.x, this.y - 5);
	        textAlign(CORNER, CORNER);
	        popMatrix();
	        noStroke();
	    }
	};
	
	button.prototype.onClick = function() {
	    if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2 && mouseY > this.y - (this.h / 2) && mouseY < this.y + this.h / 2 && clicked === true) {
	        scene = this.to;
	    }
	};
	
	button.prototype.pack = function() {
	    this.draw();
	    this.onHover();
	    this.onClick();
	};
	
	// }
	
	/** Buttons **/
	// {
	var potatoBtn = new seedBtn(25, 25, 75, 75, "potato", null, 1);
	
	var carrotBtn = new seedBtn(125, 25, 75, 75, "carrot", null, 5);
	
	var tomatoBtn = new seedBtn(225, 25, 75, 75, "tomato", null, 25);
	
	var pumpkinBtn = new seedBtn(325, 25, 75, 75, "pumpkin", null, 75);
	
	var gameBtn = new button(300, 300, 150, 75, "game", "PLAY");
	
	var howBtn = new button(125, 325, 150, 75, "how", "HOW");
	
	var creditsBtn = new button(475, 325, 150, 75, "credits", "CREDITS");
	
	var homeBtn = new button(300, 500, 150, 75, "menu", "HOME");
	// }
	
	/** Scenes **/
	// {
	// Menu scene
	var menu = function() {
	    textAlign(CORNER, CORNER);
	    var starW = random(0,4);
	    var starH = random(0,4);
	    
	    var starW2 = random(0,4);
	    var starH2 = random(0,4);
	
	    background(14, 23, 150);
	    
	    fill(252, 247, 247);
	    noStroke();
	    
	    //stars
	    {
	    
	        var stars = function(X,Y,X2,Y2){
	            fill(252, 252, 252);
	            ellipse(X,Y,starW,starH);
	            ellipse(X2,Y2,starW2,starH2);
	        };
	        
	        stars(154,160,100,100);
	        stars(167,339,242,100);
	        stars(374,160,169,32);
	        stars(350,295,287,205);
	        stars(403,192,188,230);
	        stars(42,310,70,142);
	        stars(6,113,377,57);
	        stars(107,447,452,100);
	        stars(120,193,32,242);
	        stars(48,8,304,16);
	        stars(491,64,422,36);
	        stars(249,276,316,99);
	        stars(15,384,112,276);
	        stars(302,326,552,14);
	        stars(85,368,9,586);
	        stars(60,506,11,465);
	        stars(490,173,581,54);
	        stars(167,339,565,125);
	        stars(217,402,100,551);
	        stars(287,477,393,422);
	        stars(330,369,468,244);
	        stars(146,573,190,477);
	        stars(540,215,588,188);
	        stars(167,339,242,175);
	        stars(426,290,386,345);
	        stars(167,521,406,484);
	        stars(568,276,506,319);
	        stars(256,560,232,503);
	        stars(466,383,543,506);
	        stars(446,454,267,436);
	        stars(559,427,526,350);
	        stars(588,339,375,528);
	        stars(304,595,494,551);
	        stars(482,493,574,577);
	        stars(424,576,16,218);
	    
	}
	    
	    
	    fill(207, 96, 48);
	    noStroke();
	    ellipse(289,563,1041,329);
	    
	    textFont(createFont("Calibri"));
	    
	    textSize(79);
	    fill(224, 98, 20);
	    text("space          -et",72,126);
	    fill(34, 201, 90);
	    text("plant",275,126);
	
	    image(getImage("avatars/leaf-green"),345,74,26.9,16.0);
	    
	    //craters
	    fill(217, 114, 63);
	    ellipse(404,534,151,85);
	    fill(145, 66, 2);
	    ellipse(403,522,100,54);
	    
	    fill(217, 114, 63);
	    ellipse(309,555,52,24);
	    fill(145, 66, 2);
	    ellipse(309,552,33,12);
	    
	    fill(217, 114, 63);
	    ellipse(418,463,29,9);
	    fill(145, 66, 2);
	    ellipse(418,462,15,5);
	    
	    fill(217, 114, 63);
	    ellipse(104,558,75,38);
	    fill(145, 66, 2);
	    ellipse(104,553,55,20);
	    
	    fill(217, 114, 63);
	    ellipse(571,520,47,21);
	    fill(145, 66, 2);
	    ellipse(571,517,34,11);
	    
	    fill(217, 114, 63);
	    ellipse(223,475,29,9);
	    fill(145, 66, 2);
	    ellipse(222,474,15,5);
	    
	    fill(217, 114, 63);
	    ellipse(301,419,39,15);
	    fill(145, 66, 2);
	    ellipse(300,418,23,8);
	    
	    fill(217, 114, 63);
	    ellipse(19,448,18,4);
	    fill(145, 66, 2);
	    ellipse(19,448,12,2);
	    
	    fill(217, 114, 63);
	    ellipse(8,590,29,9);
	    fill(145, 66, 2);
	    ellipse(9,589,15,5);
	    
	    fill(217, 114, 63);
	    ellipse(517,449,46,16);
	    fill(145, 66, 2);
	    ellipse(517,447,32,8);
	    
	    homeShip(10,536,0.348,0.336,-91);
	    
	    textAlign(CENTER, CENTER);
	    
	    // Button display
	    gameBtn.pack();
	    
	    howBtn.pack();
	    
	    creditsBtn.pack();
	};
	
	// Game scene
	var game = function() {
	    rectMode(CORNER);
	    textAlign(CENTER, CENTER);
	    
	    bbackground();
	    
	    fill(50, 25, 25);
	    rect(0, 400, canvasWidth, 200, 0);
	    
	    // Button display
	    potatoBtn.pack();
	    carrotBtn.pack();
	    tomatoBtn.pack();
	    pumpkinBtn.pack();
	    
	    // Places to put the plants
	    for (var i = 200; i < canvasWidth; i+=200) {
	        stroke(255, 255, 255);
	        strokeWeight(1);
	        line(i, 400, i, 600);
	        noStroke();
	    }
	    
	    fill(255, 255, 255);
	    text("Potato Seeds: " + seedObj.potatoSeeds, 500, 100);
	    text("Carrot Seeds: " + seedObj.carrotSeeds, 500, 125);
	    text("Tomato Seeds: " + seedObj.tomatoSeeds, 500, 150);
	    text("Pumpkin Seeds: " + seedObj.pumpkinSeeds, 500, 175);
	    
	    if (mouseX < 200 && clicked === true && used[0] === false && mouseY > 400) {
	        if (true) {
	            if (seed === "potato" && seedObj.potatoSeeds >= 1) {
	                plants.push(new plant(-255, 250, "potato", 0, "nopot", 0));
	                seedObj.potatoSeeds--;
	                used[0] = true;
	            }
	            
	            if (seed === "carrot" && seedObj.carrotSeeds >= 1) {
	                plants.push(new plant(-255, 250, "carrot", 0, "nopot", 0));
	                seedObj.carrotSeeds--;
	                used[0] = true;
	            }
	            
	            if (seed === "tomato" && seedObj.tomatoSeeds >= 1) {
	                plants.push(new plant(-255, 250, "tomato", 0, "nopot", 0));
	                seedObj.tomatoSeeds--;
	                used[0] = true;
	            }
	            
	            if (seed === "pumpkin" && seedObj.pumpkinSeeds >= 1) {
	                plants.push(new plant(-255, 250, "pumpkin", 0, "nopot", 0));
	                seedObj.pumpkinSeeds--;
	                used[0] = true;
	            }
	            
	            noStroke();
	        }
	    }
	    
	    if (mouseX > 200 && mouseX < 400 && clicked === true && used[1] === false && mouseY > 400) {
	        if (true) {
	            if (seed === "potato" && seedObj.potatoSeeds >= 1) {
	                plants.push(new plant(-50, 250, "potato", 0, "nopot", 1));
	                used[1] = true;
	                seedObj.potatoSeeds--;
	            }
	            
	            if (seed === "carrot" && seedObj.carrotSeeds >= 1) {
	                plants.push(new plant(-50, 250, "carrot", 0, "nopot", 1));
	                seedObj.carrotSeeds--;
	                used[1] = true;
	            }
	            
	            if (seed === "tomato" && seedObj.tomatoSeeds >= 1) {
	                plants.push(new plant(-50, 250, "tomato", 0, "nopot", 1));
	                seedObj.tomatoSeeds--;
	                used[1] = true;
	            }
	            
	            if (seed === "pumpkin" && seedObj.pumpkinSeeds >= 1) {
	                plants.push(new plant(-50, 250, "pumpkin", 0, "nopot", 1));
	                seedObj.pumpkinSeeds--;
	                used[1] = true;
	            }
	            noStroke();
	        }
	    }
	    
	    if (mouseX > 400 && clicked === true && used[2] === false && mouseY > 400) {
	        if (true) {
	            if (seed === "potato" && seedObj.potatoSeeds >= 1) {
	                plants.push(new plant(135, 250, "potato", 0, "nopot", 2));
	                seedObj.potatoSeeds--;
	                used[2] = true;
	            }
	            
	            if (seed === "carrot" && seedObj.carrotSeeds >= 1) {
	                plants.push(new plant(135, 250, "carrot", 0, "nopot", 2));
	                seedObj.carrotSeeds--;
	                used[2] = true;
	            }
	            
	            if (seed === "tomato" && seedObj.tomatoSeeds >= 1) {
	                plants.push(new plant(135, 250, "tomato", 0, "nopot", 2));
	                seedObj.tomatoSeeds--;
	                used[2] = true;
	            }
	            
	            if (seed === "pumpkin" && seedObj.pumpkinSeeds >= 1) {
	                plants.push(new plant(135, 250, "pumpkin", 0, "nopot", 2));
	                seedObj.pumpkinSeeds--;
	                used[2] = true;
	            }
	            noStroke();
	        }
	    }
	    
	    for (var i in plants) {
	        plants[i].display();
	        plants[i].grow();
	        plants[i].harvest();
	        if (plants[i].canHarvest === true && clicked === true) {
	            plants.splice(i, 1);
	            for (var j = 0; j < plants.length + 1; j++) {
	                used[i] = false;
	            }
	        }
	    }
	    
	    fill(255, 255, 255);
	    textSize(25);
	    text("Money: " + money, 515, 25);
	};
	
	// How scene
	var how = function() {
	    var starW = random(0,4);
	    var starH = random(0,4);
	    
	    var starW2 = random(0,4);
	    var starH2 = random(0,4);
	
	    background(14, 23, 150);
	    
	    fill(252, 247, 247);
	    noStroke();
	    
	    //stars
	    {
	    
	        var stars = function(X,Y,X2,Y2){
	            fill(252, 252, 252);
	            ellipse(X,Y,starW,starH);
	            ellipse(X2,Y2,starW2,starH2);
	        };
	        
	        stars(154,160,100,100);
	        stars(167,339,242,100);
	        stars(374,160,169,32);
	        stars(350,295,287,205);
	        stars(403,192,188,230);
	        stars(42,310,70,142);
	        stars(6,113,377,57);
	        stars(107,447,452,100);
	        stars(120,193,32,242);
	        stars(48,8,304,16);
	        stars(491,64,422,36);
	        stars(249,276,316,99);
	        stars(15,384,112,276);
	        stars(302,326,552,14);
	        stars(85,368,9,586);
	        stars(60,506,11,465);
	        stars(490,173,581,54);
	        stars(167,339,565,125);
	        stars(217,402,100,551);
	        stars(287,477,393,422);
	        stars(330,369,468,244);
	        stars(146,573,190,477);
	        stars(540,215,588,188);
	        stars(167,339,242,175);
	        stars(426,290,386,345);
	        stars(167,521,406,484);
	        stars(568,276,506,319);
	        stars(256,560,232,503);
	        stars(466,383,543,506);
	        stars(446,454,267,436);
	        stars(559,427,526,350);
	        stars(588,339,375,528);
	        stars(304,595,494,551);
	        stars(482,493,574,577);
	        stars(424,576,16,218);
	    
	    }
	    
	    
	    fill(207, 96, 48);
	    noStroke();
	    ellipse(289,563,1041,329);
	    
	    //craters
	    fill(217, 114, 63);
	    ellipse(404,534,151,85);
	    fill(145, 66, 2);
	    ellipse(403,522,100,54);
	    
	    fill(217, 114, 63);
	    ellipse(309,555,52,24);
	    fill(145, 66, 2);
	    ellipse(309,552,33,12);
	    
	    fill(217, 114, 63);
	    ellipse(418,463,29,9);
	    fill(145, 66, 2);
	    ellipse(418,462,15,5);
	    
	    fill(217, 114, 63);
	    ellipse(104,558,75,38);
	    fill(145, 66, 2);
	    ellipse(104,553,55,20);
	    
	    fill(217, 114, 63);
	    ellipse(571,520,47,21);
	    fill(145, 66, 2);
	    ellipse(571,517,34,11);
	    
	    fill(217, 114, 63);
	    ellipse(223,475,29,9);
	    fill(145, 66, 2);
	    ellipse(222,474,15,5);
	    
	    fill(217, 114, 63);
	    ellipse(301,419,39,15);
	    fill(145, 66, 2);
	    ellipse(300,418,23,8);
	    
	    fill(217, 114, 63);
	    ellipse(19,448,18,4);
	    fill(145, 66, 2);
	    ellipse(19,448,12,2);
	    
	    fill(217, 114, 63);
	    ellipse(8,590,29,9);
	    fill(145, 66, 2);
	    ellipse(9,589,15,5);
	    
	    fill(217, 114, 63);
	    ellipse(517,449,46,16);
	    fill(145, 66, 2);
	    ellipse(517,447,32,8);
	    
	    homeShip(10,536,0.348,0.336,-91);
	    
	    textSize(25);
	    fill(77, 180, 209);
	    textAlign(CENTER, CENTER);
	    text("You are a colonist on a new planet\nYou must grow plants for your colony\nto help them survive.\nSell plants to colonists to make money\nMoney can be used to grow more plants\nClick on the button to buy seeds.\nSeeds can be planted in the slots in the ground.\nThe more money you have\nthe better plants you can grow.", 300, y);
	    
	    if (y > 200) {
	        y-=0.5;
	    } else {
	        homeBtn.pack();
	    }
	};
	
	// Credits
	var credits = function() {
	    var starW = random(0,4);
	    var starH = random(0,4);
	    
	    var starW2 = random(0,4);
	    var starH2 = random(0,4);
	
	    background(14, 23, 150);
	    
	    fill(252, 247, 247);
	    noStroke();
	    
	    //stars
	    {
	    
	        var stars = function(X,Y,X2,Y2){
	            fill(252, 252, 252);
	            ellipse(X,Y,starW,starH);
	            ellipse(X2,Y2,starW2,starH2);
	        };
	        
	        stars(154,160,100,100);
	        stars(167,339,242,100);
	        stars(374,160,169,32);
	        stars(350,295,287,205);
	        stars(403,192,188,230);
	        stars(42,310,70,142);
	        stars(6,113,377,57);
	        stars(107,447,452,100);
	        stars(120,193,32,242);
	        stars(48,8,304,16);
	        stars(491,64,422,36);
	        stars(249,276,316,99);
	        stars(15,384,112,276);
	        stars(302,326,552,14);
	        stars(85,368,9,586);
	        stars(60,506,11,465);
	        stars(490,173,581,54);
	        stars(167,339,565,125);
	        stars(217,402,100,551);
	        stars(287,477,393,422);
	        stars(330,369,468,244);
	        stars(146,573,190,477);
	        stars(540,215,588,188);
	        stars(167,339,242,175);
	        stars(426,290,386,345);
	        stars(167,521,406,484);
	        stars(568,276,506,319);
	        stars(256,560,232,503);
	        stars(466,383,543,506);
	        stars(446,454,267,436);
	        stars(559,427,526,350);
	        stars(588,339,375,528);
	        stars(304,595,494,551);
	        stars(482,493,574,577);
	        stars(424,576,16,218);
	    
	    }
	    
	    
	    fill(207, 96, 48);
	    noStroke();
	    ellipse(289,563,1041,329);
	    
	    //craters
	    fill(217, 114, 63);
	    ellipse(404,534,151,85);
	    fill(145, 66, 2);
	    ellipse(403,522,100,54);
	    
	    fill(217, 114, 63);
	    ellipse(309,555,52,24);
	    fill(145, 66, 2);
	    ellipse(309,552,33,12);
	    
	    fill(217, 114, 63);
	    ellipse(418,463,29,9);
	    fill(145, 66, 2);
	    ellipse(418,462,15,5);
	    
	    fill(217, 114, 63);
	    ellipse(104,558,75,38);
	    fill(145, 66, 2);
	    ellipse(104,553,55,20);
	    
	    fill(217, 114, 63);
	    ellipse(571,520,47,21);
	    fill(145, 66, 2);
	    ellipse(571,517,34,11);
	    
	    fill(217, 114, 63);
	    ellipse(223,475,29,9);
	    fill(145, 66, 2);
	    ellipse(222,474,15,5);
	    
	    fill(217, 114, 63);
	    ellipse(301,419,39,15);
	    fill(145, 66, 2);
	    ellipse(300,418,23,8);
	    
	    fill(217, 114, 63);
	    ellipse(19,448,18,4);
	    fill(145, 66, 2);
	    ellipse(19,448,12,2);
	    
	    fill(217, 114, 63);
	    ellipse(8,590,29,9);
	    fill(145, 66, 2);
	    ellipse(9,589,15,5);
	    
	    fill(217, 114, 63);
	    ellipse(517,449,46,16);
	    fill(145, 66, 2);
	    ellipse(517,447,32,8);
	    
	    homeShip(10,536,0.348,0.336,-91);
	    
	    //rectangle
	    rectMode(CORNER);
	    stroke(17, 140, 33);
	    fill(68, 196, 122);
	    rect(115,99,373,126,100,0,100,0);
	    
	    fill(26, 110, 19);
	    textAlign(CORNER, CORNER);
	    textSize(23);
	    text("Community Coder:",139,142);
	    text("DigiFox9:",139,193);
	    text("Graphic Design",262,193);
	    text("Game Design",331,142);
	    
	    homeBtn.pack();
	    
	    textAlign(CENTER, CENTER);
	    rectMode(CENTER);
	};
	
	// Intro scene
	var intro = function() {
	    textAlign(CENTER, CENTER);
	    
	    if (iFrame < 150) {
	        background(0);
	        fill(255, 255, 255);
	        textSize(100);
	        text("CC", 300, 200);
	        textSize(50);
	        text("Community Coder", 300, 400);
	    }
	    
	    if (iFrame > 150 && iFrame < 300) {
	        background(0);
	        fill(255, 255, 255);
	        text("In collaboration with", 300, 300);
	    }
	    
	    if (iFrame > 300) {
	        image(bg, 0, 0, 600, 600);
	        TeamLogo(-300, -400, 3);
	        fill(255, 255, 255);
	        textAlign(CENTER, CENTER);
	        textSize(50);
	        text("Team Shattered", 300, 500);
	    }
	    
	    if (iFrame > 450 && iFrame < 600) {
	        background(0);
	        fill(255, 255, 255);
	        text("Present", 300, 300);
	    }
	    
	    if (iFrame >= 600) {
	        scene = "menu";
	    }
	    
	    iFrame++;
	};
	// }
	
	/** Loop **/
	// {
	// Main loop
	draw = function() {
	    switch (scene) {
	        case "menu":
	            menu();
	            break;
	        case "game":
	            game();
	            fill(255);
	            text(used, 200, 150);
	            break;
	        case "how":
	            how();
	            break;
	        case "credits":
	            credits();
	            break;
	        case "intro":
	            intro();
	            break;
	    }
	    
	    clicked = false;
	}; 
	// }
	
	/** Stuff for keys and mouse **/
	// {
	mousePressed = function() {
	    clicked = true;
	};
	
	mouseReleased = function() {
	    clicked = false;
	};
	
	keyPressed = function() {
	    keys[keyCode] = true;
	};
	
	keyReleased = function() {
	    keys[keyCode] = false;
	};
	// }
	
	
}

runPJS(program);

// Add reload button on KA --> <script>
