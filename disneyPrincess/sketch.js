var girl,girlImg;
var dress;
var dblueImg,dGreenImg,dYellowImg,dMaroonImg,dvioletImg,dPinkImg;
var play,playBg,end,start,buttonImg,button
var gameState =1;//start state
var title,titleImg
var score 

function preload(){
girlImg = loadAnimation("images/girl1.png","images/girl2.png","images/girl3.png","images/girl4.png","images/girl5.png")
dblueImg = loadImage("images/dressBlue.png")
dPinkImg = loadImage("images/dressPink.png")
dvioletImg = loadImage("images/dressViolet.png")
dYellowImg = loadImage("images/dressYellow.png")
dGreenImg = loadImage("images/dressGreen.png")
dMaroonImg = loadImage("images/dressMaroon.png")
start = loadImage("images/startScreen.jpg")
play = loadImage("images/back1.jpg")
end = loadImage("images/back2.jpg")
buttonImg = loadImage("images/play.png")
 titleImg=loadImage("images/Disney_Princess.png")

}

function setup(){
    createCanvas(windowWidth,windowHeight)

    playBg = createSprite(width/2,height/2,width,height)
    playBg.addImage(end)
    playBg.visible = false
    playBg.scale = 2.2
    playBg.velocityX = 4


    girl=createSprite(width-100,height-120)
    girl.addAnimation("running",girlImg);
    girl.scale=0.2
    girl.visible=false

    button= createSprite(width/2,height/2,10,10)
    button.addImage(buttonImg)
    button.scale=0.2
    button.visible=false

    title= createSprite(width/2-250,150,10,10)
    title.addImage(titleImg)
    title.scale=0.2
    title.visible=false

    score = 0;


}

function draw(){
background(80)
    
if(gameState ===1){
    background(start)
    title.visible = true
    button.visible=true
    if(mousePressedOver(button)){
        gameState=2;//playState
    }
    drawSprites()
}

else if(gameState===2){
    drawSprites()
    textSize(30)
    fill("red")
    text("score: "+score,3*width/4 +100,30)

    
    playBg.visible = true
    if(playBg.x>width-600){
        playBg.x =width/2
    }
    button.visible = false;
    title.visible=false
    girl.visible = true;
    spawnDress()
    
    
}

    
   
    
}

function spawnDress(){

    if (frameCount % 180 === 0){
        var dress = createSprite(-50,165,10,40);
        dress.velocityX = 5;
        dress.scale=0.2
        dress.lifetime = 1200

         dress.y = Math.round(random(100,250))
         var rand = Math.round(random(1,6));
         switch(rand) {

           case 1: dress.addImage(dvioletImg);
                   score+=2
                   break;
           case 2: dress.addImage(dPinkImg);
                   score+=5 
                   break;
           case 3: dress.addImage(dYellowImg);
                    score++
                   break;
           case 4: dress.addImage(dblueImg);
                    score+=3
                   break;
           case 5: dress.addImage(dMaroonImg);
                    score+=4
                   break;
           case 6: dress.addImage(dGreenImg);
                    score+=6
                   break;
           default: break;
         }

        } 
        
}

