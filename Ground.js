   class Ground{
      constructor(x,y,width,height){
         var options={
         isStatic: true  
      }
      // CREATE GROUND AS A PHYSICS BODY
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
   }

 display(){

   var pos =this.body.position;

      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);

      // GIVE COLOR TO GROUND
      fill("brown");
      
   }
    
}
  
