package breakout;

import javax.swing.ImageIcon;


public class Ball extends Sprite implements Commons 
{

   private double dx;
   private double dy;

   protected String theBall = "../images/theBall.png";

   public Ball() 
   {

	 dx = 1;
     dy = -1;

     ImageIcon ii = new ImageIcon(this.getClass().getResource(theBall));
     image = ii.getImage();

     width = image.getWidth(null);
     heigth = image.getHeight(null);

     resetState();
    }


    public void move()
    {
      x += dx;
      y += dy;

      if (x <= 0) 
      {
    	x = 0;
        setXDir(1);
      }

      if (x >= WIDTH) 
      {
    	x = WIDTH;
        setXDir(dx*-1);
      }

    }

    public void resetState() 
    {
      x = 150;
      y = 355;
    }

    public void setXDir(double x)
    {
    	dx = x;
    }

    public void setYDir(double y)
    {
    	dy = y;
    }

    public double getXDir()
    {
      return dx;
    }
    public double getYDir()
    {
      return dy;
    }
}