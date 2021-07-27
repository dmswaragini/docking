var ISS,spacecraft
var bg,ISSImg,SCImg
var hasdock=false

function preload(){
  ISSImg=loadImage("iss.png")
  bg= loadImage("space.jpg")
SCImg=loadImage("spacecraft1.png")
SCImg1=loadImage("spacecraft2.png")
SCImg2=loadImage("spacecraft3.png")
SCImg3=loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(800,400);
 spacecraft=createSprirte(285,240);
 spacecraft.addImg(SCImg)
 spacecraft.scale=0.15
 ISS=createSprirte(330,130);
 ISS.addImg(ISSImg)
 ISS.scale=0.25
}

function draw() {
  background(bg);  
spacecraft.addImg(SCImg)
if(!hasdock){
spacecraft.x=spacecraft.x + random(-1,1)

}
if(keyDown("UP_ARROW"))
{ spacecraft.y = spacecraft.y -2; }
 if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(SCImg3); spacecraft.x = spacecraft.x - 1; }
     if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(SCImg2); spacecraft.x = spacecraft.x + 1; }
         if(keyDown("DOWN_ARROW")){ spacecraft.addImage(SCImg1);
         } } 
         if(spacecraft.y <= (ISS.y+70) && spacecraft.x <= (ISS.x-10))
         { hasdock = true; textSize(25); 
          fill("white")
          text("Docking Successful!", 200, 300);
         } drawSprites();

        }