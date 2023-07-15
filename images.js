
//ACTOR
let yactor = 366

let xactor = 100

//SOUNDS

let pointsounds;
let ost;
let collidedsound;




let streetimage;
let characteractor;
let characterimg;
let characterimg2;
let characterimg3;

function preload(){
  
  
  streetimage = loadImage("imagens/estrada.png")
  characteractor=loadImage("imagens/ator-1.png")
  characterimg= loadImage("imagens/carro-1.png")
  characterimg2=loadImage("imagens/carro-2.png")
  characterimg3=loadImage("imagens/carro-3.png")
  
  pointsounds = loadSound("sounds/pontos.wav")
  ost = loadSound("sounds/trilha.mp3")
  collidedsound = loadSound("sounds/colidiu.mp3")
  
  characterimgs= [characterimg,characterimg2,characterimg3,characterimg,characterimg2,characterimg3]
    
}


  