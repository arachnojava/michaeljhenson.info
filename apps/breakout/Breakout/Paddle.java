package breakout;

import java.awt.event.KeyEvent;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionListener;

import javax.swing.ImageIcon;


public class Paddle extends Sprite
{

    String thePaddle = "../images/thePaddle.png";

    int dx;
    private int initialX;
    private int initialY;
    int mouseX;
    int mouseY;

    public Paddle(int startX, int startY) 
    {

        ImageIcon ii = new ImageIcon(this.getClass().getResource(thePaddle));
        image = ii.getImage();

        width = image.getWidth(null);
        heigth = image.getHeight(null);

        initialX = startX;
        initialY = startY;
        mouseX = 0;
        mouseY = 0;
        resetState();

    }

    public void move(int newX) 
    {
        x += dx;
        if (x <= 2) 
          x = 2;
        if (x >= 250)
          x = 250;
    }

    public void keyPressed(KeyEvent e) 
    {

        int key = e.getKeyCode();

        if (key == KeyEvent.VK_LEFT) 
        {
            dx = -3;

        }

        if (key == KeyEvent.VK_RIGHT) 
        {
            dx = 3;
        }
    }

    public void keyReleased(KeyEvent e) 
    {
        int key = e.getKeyCode();

        if (key == KeyEvent.VK_LEFT) 
        {
            dx = 0;
        }

        if (key == KeyEvent.VK_RIGHT) 
        {
            dx = 0;
        }
    }

    public void resetState() 
    {
    	x = initialX;
    	y = initialY;
    }
}