class Butterfly {
	
	constructor(){
		
	}
	
	display(){
		noStroke();
		fill(213, 113, 247); // magenta
		this.xPos = 750;
		this.yPos = 350;
		ellipse(this.xPos, this.yPos, 20, 20);
		ellipse(this.xPos + 15, this.yPos, 20, 20);
		ellipse(this.xPos, this.yPos + 15, 23, 23);
		ellipse(this.xPos + 15, this.yPos + 15, 24, 24);
		
		fill(247, 214, 139);
		ellipse(this.xPos + 7, this.yPos + 10, 8, 35);
		
		noFill();
		strokeWeight(1.5)
		stroke(247, 214, 139); // orange/yellow
		bezier(this.xPos + 7, this.yPos - 5, this.xPos + 10, this.yPos - 10, this.xPos, this.yPos - 30, this.xPos - 5, this.yPos - 20);
		bezier(this.xPos + 7, this.yPos - 5, this.xPos + 4, this.yPos - 10, this.xPos + 14, this.yPos - 30, this.xPos + 19, this.yPos - 20);
		
	}