package breakout;

import java.awt.event.KeyEvent;

import javax.swing.ImageIcon;


public class PaddleVert extends Sprite implements Commons 
{

    String thePaddle = "../images/thePaddleVert.png";

    int dy;
    private int initialX;
    private int initialY;

    public PaddleVert(int startX, int startY) 
    {
    	

        ImageIcon ii = new ImageIcon(this.getClass().getResource(thePaddle));
        image = ii.getImage();

        width = image.getWidth(null);
        heigth = image.getHeight(null);

        initialX = startX;
        initialY = startY;
        resetState();

    }

    public void move(int newY) 
    {
        y += dy;
        if (y <= 2) 
          y = 2;
        if (y >= 400-getHeight())
          y = 400-getHeight();
    }

    public void keyPressed(KeyEvent e) 
    {

        int key = e.getKeyCode();

        if (key == KeyEvent.VK_UP) 
        {
            dy = -3;

        }

        if (key == KeyEvent.VK_DOWN) 
        {
            dy = 3;
        }
    }

    public void keyReleased(KeyEvent e) 
    {
        int key = e.getKeyCode();

        if (key == KeyEvent.VK_UP) 
        {
            dy = 0;
        }

        if (key == KeyEvent.VK_DOWN) 
        {
            dy = 0;
        }
    }

    public void resetState() 
    {
    	x = initialX;
    	y = initialY;
    }
}