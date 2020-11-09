function preload() 
{
  angleMode(DEGREES);
  
  rocketIcon = loadImage('res/rocketImg.png');
  
  noseIconA = loadImage('res/parts/noseA.png');
  bodyIconA = loadImage('res/parts/bodyA.png');
  engineIconA = loadImage('res/parts/engineA.png');
  
  noseIconB = loadImage('res/parts/noseB.png');
  bodyIconB = loadImage('res/parts/bodyB.png');
  engineIconB = loadImage('res/parts/engineB.png');
  
  flamIcon = loadImage('res/flame.png');
  flamIcon.resize(20,20);
  earthIcon = loadImage('res/earthImg.png');
  moonIcon = loadImage('res/moon.png');
  
  uiFont = loadFont('res/Futura.ttf');
  
  GRAVITY = 1.8;
  PLANETMASS = 120;
  SPEEDLIMIT = 10;
  
  //rocket spinny
  BASEROTATION = 2;
  THRUST = 0.02;
  COLLISIONLEEWAY = 7;
  RESTITUTION = 1;
  
  SCREENSIZE = 600;
  EARTHPOS = SCREENSIZE/2;
  SCREENBOUND = 250;
  LOADDIST = 5000
}