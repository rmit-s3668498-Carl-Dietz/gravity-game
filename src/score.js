var scoreSize = 20;
var addSize = 0;
var score = 0;
const XLOC = 30;
const YLOC = 40;

function readyScore()
{
  addSize = 0;
  score = 0;
}

function updateScore()
{
  score++;
  if(score%300 == 0)
  {
    addSize+=2;
  }
}

function renderScore()
{
  push();
  textSize((scoreSize+addSize));
  fill(255, 200, 220);
  if(score>0)
  {
    text(score, vary(XLOC), vary(YLOC));
  }
  textSize((scoreSize/1.2));
  pop();
}

function vary(num)
{
  let variance = 0;
  for(let i = addSize; i>=0; i--)
  {
    variance+=random([0,0,0,0,0.2,-0.2]);
  }
  
  return (num + variance);
}