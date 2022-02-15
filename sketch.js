var boy; 
var boyImg;
var caminho,caminhoImg,invisibleBoundaryl,invisibleBoundaryr;

function preload(){
  //imagens pré-carregadas 

 caminhoImg = loadImage("path.png");  
 boyImg= loadAnimation ("Runner-1.png", "Runner-2.png");  
 
}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  caminho =createSprite(200,200,400,400);
  caminho.addImage("caminho",caminhoImg)
  caminho.scale = 1.2;
 

  boy = createSprite(50,160,20,50);
  boy.addAnimation ("Runner-1.png", "Runner-2.png") ;
 boy.scale = 0.1;

 leftBoundary = createSprite(-20,0,100,800);
 leftBoundary.visible = false;
 
 rightBoundary = createSprite(440,0,100,800);
 rightBoundary.visible = false;
 
 
}

function draw() {
  background(0);
  caminho.velocityY = 15;

  boy.x = World.mouseX;
 
  if(caminho.y > 400){
   caminho.y = caminho.width/2;
 }
  
 edges= createEdgeSprites();
 boy.collide(edges[3]);
 boy.collide(leftBoundary);
 boy.collide(rightBoundary);edges= createEdgeSprites();


 drawSprites();


}
