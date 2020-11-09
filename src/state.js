class State
{
  constructor(){}
  
  render(){}
  
  update(){}
}

class GameState extends State
{
  constructor()
  {
    super();
    this.entities = new EntityDirector();
    this.textLines = new TextConsole();
    readyScore();
  }
  
  update()
  {
    if(keyIsDown(70))
    {
      pauseState.update();
      return;
    }
    else
    {
      pauseState.deselectAll();
    }
    this.entities.update();
    this.textLines.update();
    if(!this.entities.r.isCrashed)
    {
      updateScore();
    }
    if(keyIsDown(82))
    {
      setup();
    } 
  }
  
  render()
  {
    push();
    background('#0c1114');
    renderScore();
    if(keyIsDown(70))
    {
      pauseState.render();
      return;
    }
    this.entities.render();
    pop();
    
    this.textLines.render();
  }
}

class MenuState extends State
{
  constructor()
  {
    super();
    this.menu = new Menu();
  }
  
  update()
  {
    this.menu.updateMenu();
  }
  
  render()
  {
    this.menu.drawMenu();
  }
}