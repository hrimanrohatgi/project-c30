class rectangle{
          constructor(x, y) {
          var options = {
              'restitution':0.8,
              'friction':1.0,
              'density':1.5
          }
          this.body = Bodies.rectangle(x, y, 50,50, options);
          this.width = 30;
          this.height = 30;
          
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          strokeWeight(4);
          stroke("red")
          fill("blue");
          rect(0, 0, this.width, this.height);
          pop();
        }
      };