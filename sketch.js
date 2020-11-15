const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	binImg = loadImage('dustbingreen.png');
	bg = loadImage ('bg.png');
}

function setup() {
	
	
    createCanvas(1500,700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;	
	bin1 = new Dustbin(998,495,300,300);
	bin2 = new Dustbin(1185,420,15,170);
	bin3 = new Dustbin(1015,420,15,170);
	
	ground = new Ground(285,650,20000,30);
	
	paper1 = new Paper(150,450,70);
	//paper1.scale = 0.09;
	 Engine.run(engine);
  
}


function draw() {
	background(bg);
	if (paper1.x > binImg.x){
		paper1.destroy
	}
	Engine.update(engine);
	if (mouseIsPressed) {
        strokeWeight(5);
        point(mouseX, mouseY);
        fill(0, 0, 0);
        textSize(12);
        text(mouseX + " " +"," + " "+ mouseY, mouseX-26,mouseY-10);        
	} 
	//paper1.scale = 0.09;
	paper1.display();
	ground.display();
	/*bin1.display();
	bin2.display();
	bin3.display();*/
	image(binImg,1020,330,300,300);

	if (paper1.x > binImg.x){
		paper1.destroy
	}
     
    }

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200,y:-400});

		}
	}