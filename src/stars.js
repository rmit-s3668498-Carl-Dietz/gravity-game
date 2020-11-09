class StarryNight
{
  constructor(x,y)
  {
    this.stars = [];
    
    let rx = x;
    let ry = y;
    print(width + ","+height);
    for(let a = rx-width; a < rx+width; a+=60)
    {  
      for(let b = ry-height; b < ry+height; b+=60)
      {
        if(random(0,10) > 3)
        {
          this.stars.push(new Star(random(a-20,a+20),random(b-20,b+20)));
        }
      }
    }
  }
  
  update(x,y)
  {
    let rx = x;
    let ry = y;
    
    this.stars.forEach(function (star, index)
    {
      if(star.x < rx-width)
      {
        star.x = rx+width - random(15);
      }
      if(star.x > rx+width)
      {
        star.x = rx-width + random(15);
      }
      if(star.y < ry-width)
      {
        star.y = ry+width - random(15);
      }
      if(star.y > ry+width)
      {
        star.y = ry-width + random(15);
      }
    });
  }
  
  render()
  {
    this.stars.forEach(function (star, index)
    {
      star.render();
    });
  }
}

class Star
{
 constructor(x,y)
 {
   this.x = x;
   this.y = y;
   this.size = random(2,5);
 }
  
 render()
 {
   noStroke();
   ellipse(this.x, this.y, this.size, this.size);
   
   if(this.size <=1)
   {
     this.size = random(2.5,5);
   }
   else
   {
     this.size-= random([0,0.03,0.1,0.005,0.005]);
   }
 }
}