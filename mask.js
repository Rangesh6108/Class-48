class Mask{
    constructor(x,y,width,height){
        var options={
            restitution:0.5,
            friction:0.2,
            density:0.1,
            isStatic:true
        }

     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     this.image=loadImage("Images/Mask.png");
     World.add(world,this.body);

    }
    display(){
        push();
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}



