class circle extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/circle.jpg");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.Visiblity = 255
  }

  display(){
    //console.log(this.body.speed);
    super.display()
    
  }
 
 
 
 };