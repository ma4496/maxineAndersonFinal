function setup() {
	createCanvas(1000, 600);
	background(175, 202, 240); // light blue
	flower1 = new Flower1();
}

function draw() {
	flowers();
	theWindow();
}

// flowers:

function flowers() {
	lavenderFlowers();
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
	rect(0, 585, 1000, 15); // bottom 
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