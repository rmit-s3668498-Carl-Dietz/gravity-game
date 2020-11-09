var crrntState;
var menuState;
var gameState;
var pauseState;

function setup() 
{
  imageMode(CENTER);
  frameRate(60);
  createCanvas(SCREENSIZE, SCREENSIZE);
  textFont(uiFont);
  
  mouseClick = false;
  menuState = new MenuState();
  gameState = new GameState();
  pauseState = new PauseState();
  tuteState = new TutorialState();
  crrntState = menuState;
}

function draw() 
{
  crrntState.update();
  crrntState.render();
}


function mousePressed() 
{
  mouseClick=true;
}

function mouseReleased()
{
  mouseClick=false;
}