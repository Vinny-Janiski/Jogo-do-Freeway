//list
let ycharacterimgs = [40,100,150,210,270,318]
let xcharacterimgs = [600,600,600,600,600,600]
let characterspeedy = [-3,-2.5,-2,-2,-2.5,-3]
let characterimgsw = 30
let characterimgsh = 30











function carmovement(){
  for(let i = 0; i < characterimgs.length; i=i+1){
  
  xcharacterimgs[i] += characterspeedy[i]
  xcharacterimgs[i] += characterspeedy[i]
  xcharacterimgs[i] += characterspeedy[i]
    
  }
  
  
  }

function showcharacterimg1(){
  for(let i = 0;i < characterimgs.length; i = i+1){
  
  image(characterimgs[i],xcharacterimgs[i],ycharacterimgs[i],characterimgsw,characterimgsh)
  image(characterimgs[i],xcharacterimgs[i],ycharacterimgs[i],characterimgsw,characterimgsh)
  image(characterimgs[i],xcharacterimgs[i],ycharacterimgs[i],characterimgsw,characterimgsh)
  image(characteractor,xactor,yactor,30,30)
  }
}

function returnsource (){
  for(let i = 0; i < characterimgs.length; i =i +1){
  
  if(xcharacterimgs[i] < -50){xcharacterimgs[i] = 600}
  
  }
  
  
  
  
  
  
  
  
  
  
  
  
}