var x, y;//the projectile
var a, b;//freefall ball
var g;//acceleration due to gravity?
var gravSlider;
var text;
var vSlider;
var text2;

function setup(){
  createCanvas(720,400);
  x=50
  y=100//Starting position of the projectile
  a=300
  b=100//Starting position of the freefall ball
  gravSlider = createSlider(0,99,1);
  gravSlider.position(500,20);
  text = createDiv("Use this to slow things down a bit");
  text.position(500,50);
  vSlider = createSlider(0,10,1);
  vSlider.position(50,20);
  text = createDiv("Use this to increase the blue ball's horizontal velocity")
  text.position(50,50);
}
function draw(){
  background(230);
  fill(20,20,180);//projectile color
  ellipse(x,y,24,24);//projectile
  fill(200,20,20);//freefall ball color
  ellipse(a,b,24,24);//freefall ball
  g = y - gravSlider.value();//acceleration due to gravity?
  x = x + vSlider.value();
  y = y + g/30;
  a = a;
  b = b + g/30;
  if(x > width){
    x=50;
    y=y;
  }
  if(y > height){
    x=50;
    y=100;
  }
  if(b > height){
    b=100
  }
}
