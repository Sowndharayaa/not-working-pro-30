class Box{
  constructor(x,y,width,height){
      var options = {
          'restitution': 0.8,
          'friction': 0.3,
          'density': 1.0,
          isStatic: true
      }
   this.body = Bodies.rectangle(x,y,width,height,options);
   
   this.width = width;
   this.height = height;

   World.add(world,this.body);
  }
  display () {
      //fill ("pink");
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, this.width, this.height);
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      image(this.image,this.body.position.x,this.body.position.y,60,60);
      pop();
      pop();
  }
}
