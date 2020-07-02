class polygon {
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body =Bodies.circle(this.x,this.y,this.radius,options);
        this.x = x;
        this.y = y;
        this.radius=radius;

        //this.body = height;
        World.add(world,this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS) 
        ellipse(0,0,this.radius,this.radius)
        pop();
      }
}