class Rubber{
	constructor(x,y,r)
	{
    
     var  OPTIONS={
         'restitution' :1.0,
		 'isStatic' : false
	   }

	// assign options to the rubber ball
	this.x=x;
	this.y=y;
	this.r=r;
		this.body=Bodies.circle(this.x, this.y , (this.r-20)/2 , OPTIONS ) ;
		World.add(world, this.body);

	}
	
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(CENTER);
			ellipse(100,200,30);
			strokeWeight(4);
			stroke("black");
			fill("red");
			pop()
	}

}