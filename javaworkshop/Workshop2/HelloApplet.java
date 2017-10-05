import java.awt.Color;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.ArrayList;

import javax.swing.JApplet;


public class HelloApplet extends JApplet implements Runnable, KeyListener
{
	public static final int SCREEN_WIDTH = 640;
	public static final int SCREEN_HEIGHT = 480;
    private static final long GAME_DELAY = 50L;
    private boolean movingUp, movingDown, movingLeft, movingRight;

	private PlayerCharacter guy;
	private Thread runner;
	
	ArrayList<Projectile> projectiles = 
		                    new ArrayList<Projectile>();

	@Override
    public void init()
	{
		guy = new PlayerCharacter();
		movingUp = false;
        movingDown = false;
        movingLeft = false;
        movingRight = false;

		addKeyListener(this);
	}


    @Override
    public void start()
    {
        if (runner == null)
        {
            runner = new Thread(this);
            runner.start();
        }
    }


	@Override
    public void paint(final Graphics g)
	{
		Image buffer = createImage(SCREEN_WIDTH, SCREEN_HEIGHT);
		Graphics offScreen = buffer.getGraphics(); 
		
		offScreen.setColor(Color.BLACK);
		offScreen.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

        for (Projectile p : projectiles)
        {
      	  p.paint(offScreen);
        }

		guy.draw(offScreen);
		
		g.drawImage(buffer, 0, 0, null);
	}


    @Override
    public void stop()
    {
        if (runner != null)
            runner = null;
    }



	@Override
    public void update(final Graphics g)
	{
	    paint(g);
	}

    @Override
    public void run()
    {
        while (runner == Thread.currentThread())
        {
          // BEGIN GAME LOGIC
          final long startTime = System.currentTimeMillis();

          if (movingUp && guy.getY() > 0)
              guy.setY(guy.getY() - guy.getVSpeed());
          if (movingDown && guy.getY() < SCREEN_HEIGHT - guy.getHeight())
              guy.setY(guy.getY() + guy.getVSpeed());
          if (movingRight && guy.getX() < SCREEN_WIDTH - guy.getWidth())
              guy.setX(guy.getX() + guy.getHSpeed());
          if (movingLeft && guy.getX() > 0)
              guy.setX(guy.getX() - guy.getHSpeed());

          // For each projectile in the list...
          for (Projectile p : projectiles)
          {
        	  // ...move the projectile...
        	  p.update();
        	  // TODO:  When we get the asteroids in here, we'll need to check for collisions.
        	  // TODO:  If a projectile is "dead", remove it from the list.
          }
         
          
          // Tell the OS that we're ready to be refreshed.
          repaint();

          // Pause to steady our frame rate and to let other OS processes run.
          try
          {
              if (System.currentTimeMillis() - startTime < GAME_DELAY)
                  Thread.sleep(GAME_DELAY - (System.currentTimeMillis() - startTime));
          }
          catch (final InterruptedException e)
          {}
      } // end while (runner == . . .
    } // end run()


    @Override
    public void keyPressed(final KeyEvent e)
    {
    	// W, S, A, D are the movement keys.
        if (e.getKeyCode() == KeyEvent.VK_W)
            movingUp = true;
        if (e.getKeyCode() == KeyEvent.VK_S)
            movingDown = true;
        if (e.getKeyCode() == KeyEvent.VK_D)
            movingRight = true;
        if (e.getKeyCode() == KeyEvent.VK_A)
            movingLeft = true;
        
        // The numeric keypad provides firing directions.
        // Note that I'm using the character's center point
        // as the origin for the projectiles.
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD8)
        	projectiles.add(new Projectile(guy.getX()+guy.getWidth()/2, guy.getY()+guy.getHeight()/2, Direction.UP));
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD9)
        	projectiles.add(new Projectile(guy.getX()+guy.getWidth()/2, guy.getY()+guy.getHeight()/2, Direction.UP_RIGHT));
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD6)
        	projectiles.add(new Projectile(guy.getX()+guy.getWidth()/2, guy.getY()+guy.getHeight()/2, Direction.RIGHT));
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD3)
        	projectiles.add(new Projectile(guy.getX()+guy.getWidth()/2, guy.getY()+guy.getHeight()/2, Direction.DOWN_RIGHT));
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD2)
        	projectiles.add(new Projectile(guy.getX()+guy.getWidth()/2, guy.getY()+guy.getHeight()/2, Direction.DOWN));
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD1)
        	projectiles.add(new Projectile(guy.getX()+guy.getWidth()/2, guy.getY()+guy.getHeight()/2, Direction.DOWN_LEFT));
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD4)
        	projectiles.add(new Projectile(guy.getX()+guy.getWidth()/2, guy.getY()+guy.getHeight()/2, Direction.LEFT));
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD7)
        	projectiles.add(new Projectile(guy.getX()+guy.getWidth()/2, guy.getY()+guy.getHeight()/2, Direction.UP_LEFT));
    }

    @Override
    public void keyReleased(final KeyEvent e)
    {
        if (e.getKeyCode() == KeyEvent.VK_W)
            movingUp = false;
        if (e.getKeyCode() == KeyEvent.VK_S)
            movingDown = false;
        if (e.getKeyCode() == KeyEvent.VK_D)
            movingRight = false;
        if (e.getKeyCode() == KeyEvent.VK_A)
            movingLeft = false;
    }


    @Override
    public void keyTyped(final KeyEvent e)
    {
        // We don't care about this event, so we can just
    	// leave this method empty.
    }

    
    // Don't worry about this last line.  I just put it in here to
    // disable a stupid warning.
    private static final long serialVersionUID = 4228827511707603402L;
}










