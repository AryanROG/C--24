class Paper{
      constructor(x,y,radius){
        var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,
        }
   
   Matter.Bodies.circle(600,660,0.9);
     
     }
 display(){
   
   rectmode(CENTRE);

   // GIVE COLOR
   fill("yellow");

 }
}