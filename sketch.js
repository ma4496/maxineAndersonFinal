let ambiance;
let xLocCloud1;
let yLocCloud1;
let xLocCloud2;
let yLocCloud2;
let xLocCloud3;
let yLocCloud3;
let a; // letters for rotation movement values
let b;
let c;
let d;
let e;
let f;

function preload(){
	soundFormats('mp3');
	ambiance = loadSound('parkBirdsDistant.mp3');
	// "Park Birds Distant" from Epidemic Sound
}

function setup() {
	createCanvas(1000, 650);
	flower1 = new Flower1();
	leaves = new Leaves();
	flower2 = new Flower2();
	butterfly = new Butterfly();
	this.xLocCloud1 = 200;
	this.yLocCloud1 = 200;
	this.xLocCloud2 = 350;
	this.yLocCloud2 = 100;
	this.xLocCloud3 = 700;
	this.yLocCloud3 = 150;
	this.a = 0.3;
	this.b = -0.5;
	this.c = 0.7;
	this.d = -0.3;
	this.e = 0.5;
	this.f = -0.3;
}

function draw() {
	ambiance.play();
	ambiance.loop();
	background(175, 202, 240); // light blue
	clouds();
	theShrub();
	flowers();
	bird();
	butterflies();
	theWindow();
	cat();
}

// bird:

function bird(){
	push();
	rotate(this.f);
	
	this.f = this.f - 0.003
	
	if (this.f <= -1){
		this.f = 1;
	}
	
	noStroke();
	
	fill(250, 233, 133); // yellow
	triangle(192, 195, 202, 200, 192, 205);
	
	
	fill(99, 204, 250);
	beginShape(); // body
	vertex(150, 200);
	bezierVertex(210, 170, 210, 230, 150, 200);
	endShape();
	
	beginShape(); // wing 1
	vertex(175, 205);
	bezierVertex(170, 160, 210, 160, 175, 205);
	endShape();
	
	beginShape(); // wing 2
	vertex(175, 205);
	bezierVertex(140, 160, 180, 160, 175, 205);
	endShape();
	
	beginShape();
	vertex(160, 200);
	bezierVertex(140, 185, 140, 215, 160, 200);
	endShape();
	
	pop();
}

// butterflies:

function butterflies(){
	push();
	rotate(this.a);
	translate(100, -200);
	butterfly.display();
	
	this.a = this.a + 0.0005;
	
	if (this.a >= 0.39) {
		this.a = 0.3;
	}

	pop();
	
	push();
	scale(0.7);
	rotate(this.b);
	translate(-200, 500);
	butterfly.display();
	
	this.b = this.b + 0.0005;
	
	if (this.b >= -0.3) {
		this.b = -0.5;
	}
	
	pop();
	
	push();
	scale(0.5);
	rotate(this.c);
	translate(750, -580);
	butterfly.display();
	
	this.c = this.c - 0.0005;
	
	if (this.c <= 0.5) {
		this.c = 0.7;
	}
	pop();
	
	push();
	scale(0.6);
	rotate(this.d);
	translate(120, 680);
	butterfly.display();
	
	this.d = this.d - 0.0001;
	
	if (this.d <= -0.6) {
		this.d = -0.3;
	}
	pop();
	
	push();
	scale(0.8);
	rotate(this.e);
	translate(180, -430);
	butterfly.display();
	
	this.e = this.e + 0.0003;
	
	if (this.e >= 0.6) {
		this.e = 0.5;
	}
	pop();
}

// clouds:

function clouds(){
	cloud1();
	cloud2();
	cloud3();
}

function cloud1(){ 
	noStroke();
	fill(255);
	push();
	translate(0, 30); // moving down
	ellipse(this.xLocCloud1, this.yLocCloud1, 100, 50);
	ellipse(this.xLocCloud1 + 20, this.yLocCloud1 - 30, 65, 65);
	ellipse(this.xLocCloud1 + 50, this.yLocCloud1 - 25, 80, 45);
	ellipse(this.xLocCloud1 + 45, this.yLocCloud1, 55, 55);
	ellipse(this.xLocCloud1 - 20, this.yLocCloud1 + 20, 30, 30);
	ellipse(this.xLocCloud1 + 70, this.yLocCloud1 - 35, 35, 35);
	ellipse(this.xLocCloud1 - 15, this.yLocCloud1 - 25, 25, 25);
	pop();
	
	this.xLocCloud1 = this.xLocCloud1 + 0.5;
	
	if(this.xLocCloud1 >= 1150){
		this.xLocCloud1 = -150;
	}
}

function cloud2(){
	noStroke();
	fill(255);
	push();
	translate(0, -30); // moving up
	ellipse(this.xLocCloud2, this.yLocCloud2, 60, 40);
	ellipse(this.xLocCloud2 + 20, this.yLocCloud2 - 20, 50, 50);
	ellipse(this.xLocCloud2 + 30, this.yLocCloud2 + 20, 45, 45);
	ellipse(this.xLocCloud2 + 50, this.yLocCloud2 - 10, 35, 50);
	ellipse(this.xLocCloud2 + 70, this.yLocCloud2 - 5, 60, 40);
	ellipse(this.xLocCloud2 + 60, this.yLocCloud2 + 10, 40, 40);
	pop();
	
	this.xLocCloud2 = this.xLocCloud2 + 0.2;
	
	if(this.xLocCloud2 >= 1150){
		this.xLocCloud2 = -150;
	}
	
}

function cloud3(){
	noStroke();
	fill(255);
	ellipse(this.xLocCloud3, this.yLocCloud3, 60, 60);
	ellipse(this.xLocCloud3 + 20, this.yLocCloud3 + 20, 30, 40);
	ellipse(this.xLocCloud3 + 35, this.yLocCloud3 + 10, 60, 30);
	ellipse(this.xLocCloud3 + 45, this.yLocCloud3 - 20, 50, 50);
	ellipse(this.xLocCloud3 + 10, this.yLocCloud3 - 10, 40, 65);
	ellipse(this.xLocCloud3 - 15, this.yLocCloud3 - 5, 60, 30);
	ellipse(this.xLocCloud3 + 55, this.yLocCloud3 - 5, 50, 25);
	
	this.xLocCloud3 = this.xLocCloud3 - 0.35;
	
	if(this.xLocCloud3 <= -150){
		this.xLocCloud3 = 1150;
	}
	
}

// cat:

function cat(){
		
	strokeWeight(1.5); // whiskers
	stroke(160);
	noFill();
	bezier(630, 580, 627, 570, 624, 565, 620, 570);
	bezier(630, 575, 627, 565, 624, 560, 620, 565);
	bezier(630, 570, 627, 560, 624, 555, 620, 560);
	
	strokeWeight(2); // whiskers
	stroke(160);
	noFill();
	bezier(660, 605, 663, 603, 675, 585, 680, 600);
	bezier(660, 605, 663, 598, 675, 580, 680, 595);
	bezier(660, 605, 663, 608, 675, 590, 680, 605);
	
	noStroke();
	//fill(235, 160, 84); // orange
	fill(250, 185, 110); // orange 2
	ellipse(615, 610, 100, 55); // body
	
	triangle(630, 577, 638, 557, 651, 577); // left ear
	triangle(659, 577, 679, 577, 669, 592); // right ear
	
	noStroke();
//	fill(235, 160, 84); // orange
	fill(250, 185, 110); // orange 2
	ellipse(645, 595, 50, 50); // head
	
	push(); // tail
	rotate(0.9);
	translate(275, -675);
	tail();
	pop();
}

function tail(){
	noStroke();
	//fill(235, 160, 84); // orange
	fill(250, 185, 110); // orange 2
	beginShape();
	vertex(570, 610);
	bezierVertex(470, 580, 470, 640, 570, 610);
	endShape();
	
}
	
// Shrub:

 function theShrub(){
	theLeaves(); 
 }

// flowers:

function pinkFlowers(){
	flower2.display(235, 410);
	flower2.display(170, 350);
	flower2.display(190, 460);
	flower2.display(300, 490);
	flower2.display(380, 540);
	flower2.display(410, 460);
	flower2.display(100, 300);
	flower2.display(30, 250);
	flower2.display(50, 390);
	flower2.display(120, 490);
	flower2.display(230, 520);
	flower2.display(40, 560);
} 

// Leaves:

function theLeaves(){
	leaves.display(240, 300);
	leaves.display(200, 400);
	leaves.display(75, 200);
	leaves.display(100, 350);
	leaves.display(30, 480);
	leaves.display(300, 400);
	leaves.display(480, 500);
	leaves.display(350, 530);
	leaves.display(280, 550);
	leaves.display(100, 540);
	leaves.display(150, 490);
	leaves.display(310, 460);
	leaves.display(250, 475);
	leaves.display(110, 420);
	leaves.display(200, 550);
	leaves.display(45, 250);
	leaves.display(450, 450);
	leaves.display(400, 430);
	leaves.display(410, 520);
	leaves.display(460, 550);
	leaves.display(495, 570);
	leaves.display(350, 465);
	leaves.display(380, 480);
	leaves.display(300, 500);
	leaves.display(250, 490);
	leaves.display(200, 470);
	leaves.display(185, 495);
	leaves.display(160, 530);
	leaves.display(220, 535);
	leaves.display(20, 560);
	leaves.display(50, 520);
	leaves.display(75, 500);
	leaves.display(110, 460);
	leaves.display(60, 400);
	leaves.display(80, 430);
	leaves.display(30, 390);
	leaves.display(20, 300);
	leaves.display(25, 330);
	leaves.display(160, 450);
	leaves.display(140, 410);
	leaves.display(240, 430);
	leaves.display(235, 400);
	leaves.display(260, 370);
	leaves.display(210, 350);
	leaves.display(170, 335);
	leaves.display(145, 360);
	leaves.display(60, 365);
	leaves.display(70, 320);
	leaves.display(110, 330);
	leaves.display(80, 290);
	leaves.display(120, 260);
	leaves.display(150, 300);
	leaves.display(70, 260);
	leaves.display(15, 240);
	leaves.display(25, 220);
	leaves.display(120, 240);
	leaves.display(150, 280);
	leaves.display(195, 270);
	leaves.display(340, 440);
	leaves.display(315, 380);
	leaves.display(400, 500);
	leaves.display(430, 520);
	leaves.display(350, 510);
}

// flowers:

function flowers() {
	lavenderFlowers();
	pinkFlowers();
}

function lavenderFlowers() {
	flower1.flowerStem(780, 470, 800, 500, 0);
	flower1.flowerDisplay(780, 470);

	flower1.flowerStem(750, 520, 780, 540, 0);
	flower1.flowerDisplay(750, 520);

	flower1.flowerStem(900, 400, 940, 440, 150);
	flower1.flowerDisplay(900, 400);

	flower1.flowerStem(940, 350, 965, 410, 130);
	flower1.flowerDisplay(940, 350);

	flower1.flowerStem(930, 440, 905, 460, 50);
	flower1.flowerDisplay(930, 440);

	flower1.flowerStem(940, 510, 955, 530, 0);
	flower1.flowerDisplay(940, 510);

	flower1.flowerStem(830, 380, 805, 430, 100);
	flower1.flowerDisplay(830, 380);

	flower1.flowerStem(860, 430, 880, 450, 20);
	flower1.flowerDisplay(860, 430);

	flower1.flowerStem(900, 480, 880, 500, 10);
	flower1.flowerDisplay(900, 480);

	flower1.flowerStem(910, 540, 890, 560, 0);
	flower1.flowerDisplay(910, 540);

	flower1.flowerStem(870, 465, 840, 485, 40);
	flower1.flowerDisplay(870, 465);

	flower1.flowerStem(735, 560, 720, 590, -30);
	flower1.flowerDisplay(735, 560);

	flower1.flowerStem(780, 540, 760, 555, -20);
	flower1.flowerDisplay(780, 540);
	
	flower1.flowerStem(800, 510, 830, 530, 10);
	flower1.flowerDisplay(800, 510);
	
	flower1.flowerStem(825, 480, 840, 500, 5);
	flower1.flowerDisplay(825, 480);
	
	flower1.flowerStem(850, 515, 830, 545, 0);
	flower1.flowerDisplay(850, 515);
}

// Window main function:

function theWindow() {
	outerFrame();
	windowPanes();
	windowPaneAccessories();
}

// theWindow main sub functions:

function outerFrame() {
	noStroke();
	fill(240); // light gray
	rect(0, 0, 15, 600); // left side
	rect(985, 0, 15, 600); // right side
	rect(0, 0, 1000, 15); // top
	rect(0, 585, 1000, 65); // bottom 
}

function windowPanes() {
	windowPaneLeft();
	windowPaneRight();
}

function windowPaneAccessories() {
	windowHinges();
	windowHandles();
}

// window pane accessory details:

function windowHandles() {
	fill(232, 215, 121); // gold
	rect(200, 285, 5, 30, 3);
	rect(793, 285, 5, 30, 3);
}

function windowHinges() {
	// left top hinge
	fill(210);
	rect(7, 100, 26, 17);
	//details
	fill(195)
	rect(19, 100, 2, 17);
	ellipse(12, 104, 3, 3);
	ellipse(12, 111, 3, 3);
	ellipse(28, 104, 3, 3);
	ellipse(28, 111, 3, 3);

	// left bottom hinge
	fill(210);
	rect(7, 500, 26, 17);
	//details
	fill(195)
	rect(19, 500, 2, 17);
	ellipse(12, 504, 3, 3);
	ellipse(12, 511, 3, 3);
	ellipse(28, 504, 3, 3);
	ellipse(28, 511, 3, 3);

	// right top hinge
	fill(210);
	rect(967, 100, 27, 17);
	//details
	fill(195)
	rect(979, 100, 2, 17);
	ellipse(972, 104, 3, 3);
	ellipse(972, 111, 3, 3);
	ellipse(988, 104, 3, 3);
	ellipse(988, 111, 3, 3);

	// right bottom hinge
	fill(210);
	rect(967, 500, 27, 17);
	//details
	fill(195)
	rect(979, 500, 2, 17);
	ellipse(972, 504, 3, 3);
	ellipse(972, 511, 3, 3);
	ellipse(988, 504, 3, 3);
	ellipse(988, 511, 3, 3);

}

// window pane side specifics:

function windowPaneLeft() {

	// left pane: top rect
	noStroke();
	fill(240); // light gray
	push();
	rotate(0.1); // tilt down
	translate(10, -3); // reposition 
	rect(20, 15, 180, 10);
	pop();

	// left pane: left side rect
	noStroke();
	fill(240); // light gray
	rect(26, 15, 10, 570);

	// left pane: bottom rect
	noStroke();
	fill(240); // light gray
	push();
	rotate(-0.2);
	translate(-105, -15);
	rect(20, 585, 180, 10);
	pop();

	// left pane: right side rect
	noStroke();
	fill(240); // light gray
	rect(198, 35, 10, 510);

	// left pane: center rect
	noStroke();
	fill(240); // light gray
	rect(115, 30, 10, 530);

	// left pane: middle cross rect
	noStroke();
	fill(240); // light gray
	rect(30, 300, 170, 10);

	// left pane: top cross rect
	noStroke();
	fill(240); // light gray
	push();
	rotate(0.1);
	translate(20, 0);
	rect(30, 150, 170, 10);
	pop();

	// left pane: bottom cross rect
	noStroke();
	fill(240); // light gray
	push();
	rotate(-0.2);
	translate(-90, 0);
	rect(30, 450, 175, 10);
	pop();
}

function windowPaneRight() {
	// right pane: top rect
	noStroke();
	fill(240); // light gray
	push();
	rotate(-0.1); // tilt down
	translate(-15, 95); // reposition 
	rect(800, 15, 180, 10);
	pop();

	// right pane: left side rect
	noStroke();
	fill(240); // light gray
	rect(964, 15, 10, 570);

	// right pane: bottom rect
	noStroke();
	fill(240); // light gray
	push();
	rotate(0.2);
	translate(81, -213);
	rect(802, 585, 180, 10);
	pop();

	// right pane: right side rect
	noStroke();
	fill(240); // light gray
	rect(790, 31, 10, 515);

	// right pane: center rect
	noStroke();
	fill(240); // light gray
	rect(875, 30, 10, 530);

	// right pane: middle cross rect
	noStroke();
	fill(240); // light gray
	rect(790, 300, 175, 10);

	// right pane: top cross rect
	noStroke();
	fill(240); // light gray
	push();
	rotate(-0.1);
	translate(-5, 100);
	rect(780, 150, 175, 10);
	pop();

	// right pane: bottom cross rect
	noStroke();
	fill(240); // light gray
	push();
	rotate(0.2);
	translate(80, -200);
	rect(780, 450, 180, 10);
	pop();

}