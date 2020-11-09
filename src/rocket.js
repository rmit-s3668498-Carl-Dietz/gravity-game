class Rocket extends GravityObject
{
  constructor(x, y)
  {
    super(x,y, rocketIcon,0); 
    this.nose = noseIconA;
    this.body = bodyIconA;
    this.engine = engineIconA;
    this.flameOn = true;
    this.trail = [];
    this.trailLength = 0;
    this.isCrashed = false;
    
    this.torque = BASEROTATION;
    this.hull = 7;
    this.thrustLimit = THRUST;
    
    initParts();
  }
  
  update(planet)
  {
    super.update(planet);
    if(this.isCrashed)
    {
      this.rotateThrust(-7);
      this.gravityOff = true;
    }
  }
  
  render()
  {
    let x= this.location.x;
    let y = this.location.y;
    
    
    push();
    let angle = this.thrust.heading()+180;
    this.drawThrust(x+22*cos(angle), y+22*sin(angle));
    translate(x, y);
    rotate(this.thrust.heading(), this.location);
    this.drawRocket(0,0);
    if(this.flameOn)
    {
      this.flameOn = false;
    }
    pop();
  }
  
  rotateThrust(x)
  {
      this.thrust.rotate(x);
  }
  
  applyThrust()
  {
      this.thrust.limit(this.thrustLimit);
      this.acceleration.add(this.thrust);
      this.flameOn = true;
  }
  
  drawRocket(x,y)
  {
    push();
    image(this.nose,x+this.nose.width,y);
    image(this.body,x,y);
    image(this.engine,x-this.body.width/1.5,y);
    pop();
  }
  
  drawThrust(x,y)
  {
    let size;
    if(this.isCrashed)
    {
       size = random(7,24);
    }
    else if(!this.flameOn)
    {
      size = random(1,3);
    }
    else
    {
      size = random(4,9);
    }
    this.trail.push([x, y, size]);
    for(let i = 0; i < this.trail.length; i++) 
    {
      noStroke();
      if(!this.isCrashed)
      {
        fill(255, 255, 255, this.trailLength);
      }
      else
      {
        fill(255, 60, 0, this.trailLength);
      }
      
      ellipse(this.trail[i][0], this.trail[i][1], this.trail[i][2]);
      if(this.trailLength > 255) 
      {
        this.trail.shift();
        this.trailLength = 0;
      }
      this.trailLength += 6;
    }
  }
  
  setNose(part)
  {
    this.nose = part.icon;
    this.torque = part.value;
  }
  
  setBody(part)
  {
    this.body = part.icon;
    this.hull = part.value;
  }
  
  setEngine(part)
  {
    this.engine = part.icon;
    this.thrustLimit = part.value;
  }
}

class RocketPart
{
  constructor(icon,value,name,desc)
  {
    this.icon = icon;
    this.value = value;
    this.name = name;
    this.desc = desc;
  }
}

function initParts()
{
  NoseA = new RocketPart(noseIconA, 2,"Red Nose 1","2 Torque");
  
  NoseB = new RocketPart(noseIconB, 3, "Green 1","3 Torque");
  
  NoseC = new RocketPart(noseIconA, 2,"Red Nose 2","2 Torque");
  
  BodyA = new RocketPart(bodyIconA, 7, "Red A","0 Hull");
  
  BodyB = new RocketPart(bodyIconB, 5, "Green A","0 Hull");
  
  BodyC = new RocketPart(bodyIconB, 5, "Green B","0 Hull");
  
  EngineA = new RocketPart(engineIconA, THRUST,"Red v1","0.02 Thrust");
  
  EngineB = new RocketPart(engineIconB, THRUST*2,"Green v1","0.0 4Thrust");
  
  EngineC = new RocketPart(engineIconB, THRUST*2,"Slippy Boi","0.0 4Thrust");
}