class TutorialState extends State
{
   constructor()
  {
    super();
    
    this.backButton = createButton('B A C K');
    this.backButton.attribute('font-family','futura');
    this.backButton.position(SCREENSIZE/7,SCREENSIZE/1.4);
    this.backButton.class('infoBtn');
    this.backButton.mousePressed(function()
        {
          crrntState = menuState;
          hideClass('infoBtn');
          showClass('menuBtn');
        });
    hideClass('infoBtn');

  }
  
  update()
  {
    if(keyIsDown(27))
    {
      crrntState = gameState;
    }
  }
  
  render()
  {
    background(100);
  }
}