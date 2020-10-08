class Dustbin{
      constructor(x,y,width,height){
       var options={
          'restitution':1,
          'friction':1,
           'density':1
       }
     }
    
    

  display(){

  // CREATE A DUSTBIN
  // DUSTBIN BOTTOM PART
  var dustbinG = createSprite(650,685,50,10);
  dustbinG.shapeColor("brown");
  
  //DUSTBIN LEFT PART
  var dustbinL = createSprite(600,650,10,35);
  dustbinL.shapeColor("brown");

  //DUSTBIN RIGHT PART 
  var dustbinR = createSprite(700,650,10,35);
  dustbinR.shapeColor("brown");



    
 }
}
