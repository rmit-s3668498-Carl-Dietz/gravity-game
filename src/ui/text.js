class TextConsole
{
 constructor()
  {
    this.lines =["W: Boost  A/D: Rotate  F: Build  R: Reset"];
    this.colour =  color(255);
    this.alpha = 255;
    this.size = 18;
  }
  
  update()
  {
    this.alpha--;
    this.colour.setAlpha(this.alpha);
  }
  
  render()
  {
    push();
    textSize(this.size);
    fill(this.colour);
    
    let y = SCREENSIZE-50;
    for(let i =0; i < this.lines.length;i++)
    {
      text(this.lines[i],30,y);
      y+=10
    }
    
    pop();
  }
  
  addText(text)
  {
    this.alpha = 255;
    this.lines.push(text);
    while(this.lines.length >= 6)
    {
      this.lines.shift();
    }
  }
}