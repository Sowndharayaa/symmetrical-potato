class Ground {
    constructor(x,y,width,height){
        var options = {
            'isStatic' : true,
            'density': 999,
        }
        this.body = Bodies.rectangle (x,y,width,height,options);
        this.width = width;
        this.height = height;


        World.add(world,this.body);
    }
    display(){
        var groundP=this.body.position;		

        push()
        translate(groundP.x, groundP.y);
        rectMode(CENTER)
        fill(128,128,128)
        rect(0,0,this.width, this.height);
        pop();
    }
}