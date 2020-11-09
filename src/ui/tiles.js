class Tile
{
  constructor(x,y,size,part)
  {
    this.x = x;
    this.y = y;
    this.size = size;
    this.part = part;
    this.selected = false;
    this.colour = 155;
  }
  
  update()
  {
    
     if(this.selected)
    {
      if(!this.isMouseInBounds())
      {
        this.selected = false;
      }
    }
    
    if(isMouseHovering(this))
    {
      this.selected = true;
    }
  }
  
  render()
  {
    noStroke();
    push();
    fill(this.colour);
    
    if(this.selected)
    {
      strokeWeight(7);
      stroke(255);
    }
    
    square(this.x, this.y, this.size);
    noStroke();

    translate(this.x+this.size/2,this.y+this.size/2);
    rotate(270);
    image(this.part.icon,0,0);
    pop();
  }
}

class BigTile extends Tile
{
  constructor(x,y,part,pieceName)
  {
      super(x,y,56,part[0]);
      this.piece = pieceName;
      this.selX = 0;
      this.selY = y;
      this.selSize = this.size*2; 
    
      this. subs = [];
      let subStrt = x/4;
      let subend = x-30
      for(let i = 1;i<part.length;i++)
      {
        this.subs.push(new SubTile((this.x-50)*i,this.y,random(0,255),part[1]));
      }
  }
  
  isMouseInBounds()
  {
    if(mouseX>this.selX && mouseX<this.x+this.size)
    {
      if(mouseY>this.y && mouseY<this.y+this.size)
      {
        return true;
      }
    }
    return false;
  }
  
  update()
  {
    super.update();
    if(this.selected)
    {
      for(let i = 0; i<this.subs.length;i++)
      {
        this.subs[i].update();
      }
    
      if(mouseClick)
      {
        for(let i = 0; i<this.subs.length;i++)
        {
          if(this.subs[i].selected)
          {
            let c = this.colour;
            let p = this.part;
            this.colour = this.subs[i].colour;
            this.part = this.subs[i].part;
            this.subs[i].colour = c;
            this.subs[i].part = p;

            this.changeRocket();
            mouseClick = false;
            return;
          }
        }
      }
    }
  }
   
  renderSubs()
  {
     if(this.selected)
    {
      for(let i = 0; i<this.subs.length;i++)
      {
        this.subs[i].render();
      }
    }
  }
  
  changeRocket()
  {
    switch(this.piece)
    {
      case 'nose':
        gameState.entities.r.setNose(this.part);
        break;
      case 'body':
        gameState.entities.r.setBody(this.part);
        break;
      case 'engine':
        gameState.entities.r.setEngine(this.part);
        break;
    }
  }
}

class SubTile extends Tile
{
  constructor(x,y, colour,part)
  {
    super(x,y,32,part);
    this.colour = color('#fda172');
  }
  
   update()
  { 
    if(isMouseHovering(this))
    {
      this.selected = true;     
    }
    else
    {
      this.selected = false;
    }
  }
  
  render()
  {
    super.render();
    if(this.selected == true)
    {
      drawPane(this.x,this.y,this.part.name,this.part.desc,this.colour);
    }
  }
}

function isMouseHovering(obj)
{
  if(mouseX>obj.x && mouseX<obj.x+obj.size)
  {
    if(mouseY>obj.y && mouseY<obj.y+obj.size)
    {
      return true;
      
    }
  }
 return false;
} 
