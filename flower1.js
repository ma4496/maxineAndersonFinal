class Flower1{
	constructor(){

	}

flowerDisplay(x, y){
	noStroke();
	fill(187, 173, 245); // lavender
	this.xLoc = x;
	this.yLoc = y;
	ellipse(this.xLoc, this.yLoc + 5, 25, 5);
	ellipse(this.xLoc, this.yLoc - 2.5, 15, 20);
	ellipse(this.xLoc - 10, this.yLoc, 15, 15);
	ellipse(this.xLoc + 10, this.yLoc, 15, 15);
	} // end flowerDisplay bracket
	
	flowerStem(x, y, xc, yc, yExt){
		stroke(147, 168, 103); // olive green
		strokeWeight(1.5);
		noFill();
		this.xLoc = x; // x location
		this.yLoc = y; // y location
		this.xControl = xc; // x control point
		this.yControl = yc; // y control point
		this.yExtension = yExt; // y point extensions
		bezier(this.xLoc, this.yLoc, this.xControl, this.yControl, this.xControl, this.yControl + 40 + this.yExtension, this.xLoc, this.yLoc + 150 + this.yExtension);
		
	} // end flowerStem bracket
	
}// class end bracket