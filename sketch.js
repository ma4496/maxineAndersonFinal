function setup() {
	createCanvas(1000, 600);
	background(175, 202, 240); // light blue
}

function draw() {

theWindow();
}

function theWindow(){
	outerFrame(); 
	windowPanes();
	windowPaneAccessories();
}

// theWindow main sub functions:

function outerFrame(){
	noStroke();
	fill(240); // light gray
	rect(0, 0, 15, 600); // left side
	rect(985, 0, 15, 600); // right side
	rect(0, 0, 1000, 15); // top
	rect (0, 585, 1000, 15); // bottom 
}

function windowPanes(){
	windowPaneLeft();
	windowPaneRight();
}

function windowPaneAccessories(){
	windowHinges();
}

// window pane accessory details:

function windowHinges(){
	// left top hinge
	fill(210); 
	rect(7, 100, 26, 17);
		//details
			fill(195)
			rect(19, 100, 2 ,17);
			ellipse(12, 104, 3, 3);
			ellipse(12, 111, 3, 3);
	
	// left bottom hinge
	fill(210);
	rect(7, 500, 26, 17);
		//details
			fill(195)
			rect(19, 500, 2 ,17);
			ellipse(12, 504, 3, 3);
			ellipse(12, 511, 3, 3);
	
	// right top hinge
	fill(210);
	rect(967, 100, 27, 17);
	
	// right bottom hinge
	fill(210);
	rect(967, 500, 27, 17);
	
}

// window pane side specifics:

function windowPaneLeft(){
	
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

function windowPaneRight(){
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