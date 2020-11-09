class PauseState extends State
{
  constructor()
  {
    super();
    this.tiles = [];
    let icons = 
        [NoseA,NoseB,
         BodyA,BodyB,
         EngineA,EngineB];
    let parts = ['nose','body','engine'];
    let a = 0;
    let y = SCREENSIZE/8
    for(let i = 0;i<parts.length;i++)
    {
      this.tiles.push(new BigTile(SCREENSIZE/2.5,y+(SCREENSIZE/4)*i,[icons[a++],icons[a++]],parts[i]));
    }
  }
  
  update()
  {
    for(let i = 0; i<this.tiles.length;i++)
    {
      this.tiles[i].update();
    }
  }
  
  render()
  {
    push();
    background(220);
    for(let i = 0; i<this.tiles.length;i++)
    {
      this.tiles[i].render();
    }
    for(let i = 0; i<this.tiles.length;i++)
    {
      this.tiles[i].renderSubs();
    }
    
    this.writeValues();
    this.writeTitles();
    pop();
  }
  
  deselectAll()
  {
    for(let i = 0; i<this.tiles.length;i++)
    {
      this.tiles[i].selected = false;
    }
  }
  
  writeValues()
  {
    let vals = [gameState.entities.r.torque, gameState.entities.r.mass, gameState.entities.r.thrustLimit];
    let y = SCREENSIZE/6;
    for(let v=0;v<vals.length;v++)
    {
      push();
      fill(0, 60, 153);
      textSize(34);
      text(vals[v],SCREENSIZE/5*3.2,y);
      pop();
      y+=SCREENSIZE/4
    }
  }
  
  writeTitles()
  {
    let ttls = ['Torque', 'Hull', 'Thrust'];
    let y = SCREENSIZE/4.5;
    for(let t=0;t<ttls.length;t++)
    {
      push();
      fill(60, 102, 153);
      textSize(24);
      text(ttls[t],SCREENSIZE/5*3,y);
      pop();
      y+=SCREENSIZE/4
    }
  }

}   