class EntityDirector
{
 constructor()
  {
    this.r = new Rocket(width/2,height/2-160);
    this.earth = new Planet(EARTHPOS+100, EARTHPOS, earthIcon, PLANETMASS, 0, 0);
    
    this.moon = new Planet(EARTHPOS - 200, EARTHPOS+moonIcon.height/2, moonIcon, PLANETMASS*0.3, 0, 0);
    
    this.sun = new TheSun(EARTHPOS+2400, EARTHPOS-2400);
    
    this.comet = new Comet(EARTHPOS, EARTHPOS, 2, this.r);
    this.planets = [this.earth,this.moon];
    this.stars = new StarryNight(this.r.location.x,this.r.location.y);
    this.xOffset = 0;
    this.yOffset = 0;
  }
  
  update()
  {
    this.keyCheck();
    
    //move objects
    for (let i = 0; i<this.planets.length; i++)
    {
      for (let j = 0; j<this.planets.length; j++)
      {
        if(this.planets[i]!=this.planets[j]&&isOddFrame())
        {
          this.planets[i].update(this.planets[j]);
        }
      }
      this.planets[i].update(this.r);
      this.r.update(this.planets[i]);
      this.updateCam();
    }
    
    //check collisions
    for (let i = 0; i<this.planets.length; i++)
    {
      for (let j = 0; j<this.planets.length; j++)
      {
        if(i!=j&&this.planets[i].boundsCheck(this.planets[j]))
        {
            this.planets[i].collide(this.planets[j]);
        }
        if(this.r.boundsCheck(this.planets[i]))
        {
            this.r.isCrashed = true;
        }
      }
    }
    
    this.stars.update(this.r.location.x,this.r.location.y);
  }
  
  render()
  {
    translate(this.xOffset, this.yOffset);
    push();
    this.stars.render();
    this.r.render();
    for (let i = 0; i<this.planets.length; i++)
    {
      if(isNear(this.planets[i].location, this.r.location,LOADDIST))
      {
        this.planets[i].render();
      } 
    }
    pop();
  }
  
  updateCam()
  {
    let s = (this.r.velocity.mag());
    if(this.r.location.x < SCREENBOUND-this.xOffset)
    {
      this.xOffset+=s;
    }
    if(this.r.location.x > SCREENSIZE-SCREENBOUND-this.xOffset)
    {
      this.xOffset-=s;
    }
    if(this.r.location.y < SCREENBOUND-this.yOffset)
    {
      this.yOffset+=s;
    }
    if(this.r.location.y > SCREENSIZE-SCREENBOUND-this.yOffset)
    {
      this.yOffset-=s;
    }
  }
  
  keyCheck() 
  {
    if(keyIsDown(68))
    {
      this.r.rotateThrust(this.r.torque);
    } 
    else if (keyIsDown(65)) 
    {
      this.r.rotateThrust(-this.r.torque);
    }
    if(keyIsDown(87))
    {
      this.r.applyThrust();
    }
    
    clear();
  }
}

function isNear(subject, object, dist)
{
  if(subject.dist(object) < dist)
  {
    return true;
  }
  return false;
}

function isOddFrame()
{
  if(frameCount%3==0)
  {
    return true;
  }
  return true;
}