  class box {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.body = loadImage("pictures/boximg.png");
      this.visibility = 25;
    }
  display(){
   if(rec.body.speed>3){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    image(this.image,0, 0, this.width, this.height);
    pop();
   }
else{
    World.remove(world,this.body);
    this.visibility = this.visibility-5;
    push();
    translate(pos.x, pos.y);
    image(this.image,0, 0, this.width, this.height);
    tint(0,this.visibility);
    pop();  
  }
  }
  }