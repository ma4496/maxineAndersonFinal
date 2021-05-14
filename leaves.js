class Leaves {
	constructor(){

	}
	
	display(x, y){
		noStroke();
		fill(147, 168, 103); // olive green
		this.xLoc = x;
		this.yLoc = y;
		
		bezier(this.xLoc, this.yLoc, this.xLoc + 30, this.yLoc, this.xLoc + 35, this.yLoc + 25, this.xLoc + 30, this.yLoc + 20);
		bezier(this.xLoc, this.yLoc, this.xLoc, this.yLoc, this.xLoc + 7, this.yLoc + 20, this.xLoc + 30, this.yLoc + 20);
		
		bezier(this.xLoc + 5, this.yLoc + 17, this.xLoc + 10, this.yLoc + 22, this.xLoc + 20, this.yLoc + 22, this.xLoc + 20, this.yLoc + 52);
		bezier(this.xLoc + 5, this.yLoc + 17, this.xLoc, this.yLoc + 22, this.xLoc + 2, this.yLoc + 37, this.xLoc + 20, this.yLoc + 52);
		
		bezier(this.xLoc - 30, this.yLoc + 40, this.xLoc - 35, this.yLoc + 30, this.xLoc - 25, this.yLoc + 10, this.xLoc - 10, this.yLoc + 10);
		bezier(this.xLoc - 30, this.yLoc + 40, this.xLoc - 10, this.yLoc + 35, this.xLoc - 5, this.yLoc + 5, this.xLoc - 10, this.yLoc + 10);
		
		bezier(this.xLoc - 25, this.yLoc + 55, this.xLoc - 25, this.yLoc + 45, this.xLoc - 9, this.yLoc + 40, this.xLoc + 5, this.yLoc + 45);
		bezier(this.xLoc -25, this.yLoc + 55, this.xLoc - 15, this.yLoc + 60, this.xLoc, this.yLoc + 55, this.xLoc + 5, this.yLoc + 45);
	}
	
} // class end bracket 



