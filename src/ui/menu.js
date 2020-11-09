class Menu
{
  constructor()
  {
    this.playButton = createButton('B E G I N');
    this.playButton.attribute('font-family','futura');
    this.playButton.position(SCREENSIZE/3,SCREENSIZE/1.4);
    this.playButton.class('menuBtn');
    this.playButton.mousePressed(function()
        {
          crrntState = gameState;
          hideClass('menuBtn');
        });
    showClass('menuBtn');
    /*this.infoButton = createButton('INFO');
    this.infoButton.position(SCREENSIZE/2,SCREENSIZE/1.4);
    this.infoButton.class('menuBtn');
    this.infoButton.mousePressed(function()
        {
          crrntState = tuteState;
          hideClass('menuBtn');
          showClass('infoBtn');
        });*/
    }
  
  updateMenu()
  {
  }
  
  drawMenu()
  {
    //this.drawGradientSky();
    gameState.render();
    //this.stars.render();
  }
  
  drawGradientSky() 
  {
    push();
    let col1 = color('#000080');
    let col2 = color('#FD5E53');
    noFill();
  // Top to bottom gradient
    for (let i = 0; i <= height; i++) 
    {
      let inter = map(i, 0, height, 0, 1);
      let c = lerpColor(col1, col2, inter);
      stroke(c);
      line(0, i, width, i);
    }
    pop();
  }
}

function hideClass(className)
{
  elements = document.getElementsByClassName(className);
  
  for(let i = 0; i < elements.length; i++)
  {
    elements[i].style.display = 'none';
  }
}

function showClass(className)
{
  elements = document.getElementsByClassName(className);
  
  for(let i = 0; i < elements.length; i++)
  {
    elements[i].style.display = 'block';
  }
}