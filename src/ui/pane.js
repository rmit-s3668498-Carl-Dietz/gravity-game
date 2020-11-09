function drawPane(x,y,title,desc)
{
  push();
  
  
  fill(color(108, 108, 108)); 
  rect(mouseX,mouseY,100,140);
  
  fill('F8F8FF'); 
  textStyle(BOLD);
  textSize(20);
  text(title,mouseX+5,mouseY+20);
  
  textStyle(ITALIC);
  textSize(16);
  text(desc,mouseX+12,mouseY+50);
  pop();
  
}