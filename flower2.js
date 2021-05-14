class Flower2{
	constructor(){

	}

display(x, y){
	noStroke();
	this.xLoc = x;
	this.yLoc = y;
	fill(248, 160, 249); // pink
	ellipse(this.xLoc + 15, this.yLoc, 15, 15);
	ellipse(this.xLoc + 10, this.yLoc + 5, 15, 15);
	ellipse(this.xLoc, this.yLoc, 15, 15);
	ellipse(this.xLoc + 3, this.yLoc - 10, 15, 15);
	ellipse(this.xLoc + 12, this.yLoc - 9, 15, 15);
	
	fill(250, 233, 80); // yellow
	ellipse(this.xLoc + 8, this.yLoc - 4, 10, 10);
	} // end flowerDisplay bracket
	
}// class end bracket