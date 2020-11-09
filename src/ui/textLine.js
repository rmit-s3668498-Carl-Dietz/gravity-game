class TextLine
{
  constructor(x,y,targetY,text)
  {
    this.x = x;
    this.y = y;
    this.targetY = targetY;
    this.text = text;
  }
  
  update()
  {
    
  }
  
  render()
  {
    text(this.text,this.x,this.y);
  }
  
}