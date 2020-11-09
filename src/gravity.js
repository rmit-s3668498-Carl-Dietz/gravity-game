function setup() 
{
  imageMode(CENTER); 
}

class GravityObject
{
  constructor(x,y, img, mass)
  {
    this.location = createVector(x+img.width/2,y+img.height/2); 
    this.thrust = createVector(this.location.x, this.location.y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.icon = img;
    this.mass = mass;
    this.bound = img.width/2;
    this.gravityOff = false;
  }
  
  render()
  {
    push();
    image(this.icon, this.location.x, this.location.y);
    pop();
  }
  
  update(planet)
  {
    this.applyGravity(planet);
    this.velocity.add(this.acceleration); 
    this.velocity.limit(SPEEDLIMIT);
    this.location.add(this.velocity);
    //set acceleration to 0 for next update
    this.acceleration.mult(0);
  }
  
  applyGravity(planet)
  {
    if(this.gravityOff)
    {
      return;
    }
    var otherLoc = createVector(planet.location.x, planet.location.y);
    
    var direction = p5.Vector.sub(otherLoc, this.location);
    
    var distance = direction.mag();
    direction.normalize();
    
    var force = ((GRAVITY * planet.mass)/(distance*distance));
    
    direction.mult(force);
   
    this.acceleration.add(direction);
  }
  
  boundsCheck(oth)
  {
    //only run every other frame
    if(frameCount%2==0)
    {
      //return false;
    }
    let x = this.location.x;
    let y = this.location.y;
    
    let ox = oth.location.x;
    let oy = oth.location.y;
    
    //object hitboxes are smaller than themselves
    let d = dist(x, y, ox, oy);
    
    if(d < this.bound+oth.bound)
    {
      return true;
    }
    return false;
  }
  
  collide(oth)
  {
    this.gravityOff = true;
    
    // get the mtd
    let delta = (p5.Vector.sub(this.location, oth.location));
    let d = delta.mag();
    
    // minimum translation distance to push balls apart after intersecting
    let mtd = delta.mult(((this.bound + oth.bound)-d)/d); 


    // resolve intersection --
    // inverse mass quantities
    let im1 = 1 / this.mass; 
    let im2 = 1 / oth.mass;

    // push-pull them apart based off their mass
    this.location.add(p5.Vector.mult(mtd,(im1 / (im1 + im2))));

    oth.location.sub(p5.Vector.mult(mtd,(im2 / (im1 + im2))));
    
    // impact speed
    let v = p5.Vector.sub(this.velocity, oth.velocity);
    let mtd2 = mtd;
    let v2 = v;
    let vn = v2.dot(mtd2.normalize());

    // sphere intersecting but moving away from each other already
    if (vn > 0.0) 
    {
      return;
    }

    // collision impulse
    let i = (-(1.0 + RESTITUTION) * vn) / (im1 + im2);
    let impulse = mtd.normalize().mult(i);
    let impulse2 = impulse;

    // change in momentum
    this.velocity.add(impulse.mult(im1));
    oth.velocity.sub(impulse2.mult(im2));
  }
}

class Planet extends GravityObject
{
  constructor(x, y, icon, mass, initThrust, thrustAngle)
  {
    super(x,y, icon, mass);
    
    this.thrust.rotate(thrustAngle);
    this.thrust.limit(initThrust);
    this.acceleration.add(this.thrust);
  }
}

class Comet extends GravityObject
{
  constructor(x, y, initThrust, target)
  {
    super(x,y, flamIcon, 4);
    let targetPoint =  p5.Vector.cross(target.location, this.location);
    this.thrust.rotate(target.location.heading());
    this.thrust.limit(initThrust);
    this.acceleration.add(this.thrust);
  }
}

class TheSun extends GravityObject
{
  constructor(x,y)
  {
    super(x,y, earthIcon, 1000);
  }
  
  render()
  {
    noStroke();
    fill('#f8d568');
    ellipse(this.location.x, this.location.y,SCREENSIZE/1.3);
  }
}

