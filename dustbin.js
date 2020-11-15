class Dustbin {
    constuctor(x,y,width,height){
        var options = {
            isStatic:true,
            density :999,
            friction:999
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
         this.height = height;
        World.add(world,this.body);
    }
    display(){
        push();
    rectMode(CENTER);
        fill("red");
       rect(0,0,this.width,this.height);
        pop();
    }
}