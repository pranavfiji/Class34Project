 var dog;
 var dogKneel;


function preload()
{
   dog=loadImage("dogImg1.png");
dogKneel=loadImage("dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  dog.createSprite(250,250,50,50);

}


function draw() {  

  
  if(KeyWentDown(UP_BUTTOM)){
    dog.addImage(dogKneel)
  }

  
  drawSprites();
  //add styles here

}



