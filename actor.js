let collision = false;

let mypoints = 0


function actormovement(){
  
  if(keyIsDown(UP_ARROW)){yactor -= 3}
    if(keyIsDown(DOWN_ARROW)){yactor += 3}

  
  
  
  
}

function actorcollision (){
  for(let i = 0; i < characterimgs.length; i=i+1){
  
  
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    
    collision = collideRectCircle(xcharacterimgs[i],ycharacterimgs[i],characterimgsw,characterimgsh, xactor, yactor, 30)
  
  if(collision){collided();collidedsound.play();
  
  
  if(mypoints > 0){mypoints -= 1}
               }
  }
  

  
}

function collided(){
  yactor = 366
  
  
  
  
  
  
  
}
function points(){
  
  text(mypoints, width/5, 27 )
  textSize(25)
  textAlign(CENTER)
  fill(color(255,165,0))
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}

function returnYactor (){
  
  if(yactor < 15){mypoints += 1;pointsounds.play(); collided()}
  
  
  
  
  
}

function dontpass (){
  
  
  if(yactor > 366){yactor = 366}
  
  
  
  
  
  
  
  
}