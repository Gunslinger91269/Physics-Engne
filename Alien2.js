class alien extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,50,height,angle);
    this.image = loadImage("sprites/alien.jpg");
  }

display(){

   super.display();
  }

}