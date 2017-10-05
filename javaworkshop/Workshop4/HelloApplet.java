import java.awt.Color;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.ArrayList;

import javax.swing.JApplet;
import javax.swing.JOptionPane;
/*
 * Game Rules 
 * to be implemented
 * 
 * Three lives
 * One-hit kill for player
 * No powerups or bonuses
 * Three asteroid sizes -- different HP and score value
 * 
 */

public class HelloApplet extends JApplet implements Runnable, KeyListener
{
	public static final int SCREEN_WIDTH = 640;
	public static final int SCREEN_HEIGHT = 480;
    private static final long GAME_DELAY = 50L;
    private static final int NUM_ASTEROIDS = 10;
    
	private PlayerCharacter guy;
	private Thread runner;
	
	private int lives = 3;
	private int score = 0;
	
	ArrayList<Projectile> projectiles = new ArrayList<Projectile>();
	ArrayList<Asteroid> asteroids = new ArrayList<Asteroid>();

	@Override
    public void init()
	{
		guy = new PlayerCharacter();

		for (int a = 0; a < NUM_ASTEROIDS; a++)
		{
			double asteroidType = Math.random();
			
			if (asteroidType      < 0.333333333333333333333)
				asteroids.add(new Asteroid(AsteroidType.SMALL_ASTEROID));
			else if (asteroidType < 0.666666666666666666666)
				asteroids.add(new Asteroid(AsteroidType.MEDIUM_ASTEROID));
			else
				asteroids.add(new Asteroid(AsteroidType.LARGE_ASTEROID));
		}
		
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

        for (Asteroid a : asteroids)
      	    a.draw(offScreen);

        for (Projectile p : projectiles)
      	    p.draw(offScreen);
        

		guy.draw(offScreen);
		
		offScreen.drawString("Score:  " + score, 10, 20);
		offScreen.drawString("Lives:  " + lives, 10, 40);
		
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

          guy.update();
          
          float centerX = guy.getX()+guy.getWidth()/2;
          float centerY = guy.getY()+guy.getHeight()/2;

          if (guy.isFiringUp())
        	  projectiles.add(new Projectile(centerX, centerY, Direction.UP));
          if (guy.isFiringUpRight())
        	  projectiles.add(new Projectile(centerX, centerY, Direction.UP_RIGHT));
          if (guy.isFiringRight())
        	  projectiles.add(new Projectile(centerX, centerY, Direction.RIGHT));
          if (guy.isFiringDownRight())
        	  projectiles.add(new Projectile(centerX, centerY, Direction.DOWN_RIGHT));
          if (guy.isFiringDown())
        	  projectiles.add(new Projectile(centerX, centerY, Direction.DOWN));
          if (guy.isFiringDownLeft())
        	  projectiles.add(new Projectile(centerX, centerY, Direction.DOWN_LEFT));
          if (guy.isFiringLeft())
        	  projectiles.add(new Projectile(centerX, centerY, Direction.LEFT));
          if (guy.isFiringUpLeft())
        	  projectiles.add(new Projectile(centerX, centerY, Direction.UP_LEFT));

          for (int a = 0; a < asteroids.size(); a++)
          {
        	  Asteroid asteroid = asteroids.get(a);
        	  
        	  asteroid.update();
        	  
        	  double distance = Math.sqrt(Math.pow(guy.getCenterX() - asteroid.getCenterX(), 2)+Math.pow(guy.getCenterY() - asteroid.getCenterY(), 2));
        	  
        	  if (distance < guy.getRadius() + asteroid.getRadius())
        	  {
        		  lives--;
        		  destroyAsteroid(asteroid);
        	  }
        	  
        	  if (asteroids.get(a).isDead())
        		  asteroids.remove(a);
          }
          
          // For each projectile in the list...
          for (int p = 0; p < projectiles.size(); p++)
          {
        	  Projectile bullet = projectiles.get(p); 
          	  // ...move the projectile...
           	  bullet.update();

        	  // TODO:  When we get the asteroids in here, we'll need to check for collisions.
              for (int a = 0; a < asteroids.size(); a++)
              {
            	  Asteroid asteroid = asteroids.get(a);
            	  
            	  // d = sqrt((x2-x1)^2 + (y2 - y1)^2)
            	  double distance = Math.sqrt(Math.pow(bullet.getCenterX() - asteroid.getCenterX(), 2)+Math.pow(bullet.getCenterY() - asteroid.getCenterY(), 2));
            	  
            	  if (distance < bullet.getRadius() + asteroid.getRadius())
            	  {
            		  bullet.setDead(true);
            		  
            		  score += asteroid.getType().getPointValue();

            		  destroyAsteroid(asteroid);
            	  }
              }
        	  // If a projectile is "dead", remove it from the list.
        	  if (bullet.isDead())
        	  {   
        		  // remove it from the list
        		  projectiles.remove(p);
        	  }
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

    private void destroyAsteroid(Asteroid asteroid)
    {
    	  asteroid.setDead(true);

		  switch(asteroid.getType())
		  {
		  	case LARGE_ASTEROID:
		  			asteroids.add(new Asteroid(AsteroidType.MEDIUM_ASTEROID, asteroid.getCenterX(), asteroid.getCenterY()));
		  			asteroids.add(new Asteroid(AsteroidType.MEDIUM_ASTEROID, asteroid.getCenterX(), asteroid.getCenterY()));
		  			break;
		  	case MEDIUM_ASTEROID:
		  			asteroids.add(new Asteroid(AsteroidType.SMALL_ASTEROID, asteroid.getCenterX(), asteroid.getCenterY()));
		  			asteroids.add(new Asteroid(AsteroidType.SMALL_ASTEROID, asteroid.getCenterX(), asteroid.getCenterY()));
		  			break;
		  }
    }
    

    @Override
    public void keyPressed(final KeyEvent e)
    {
    	// W, S, A, D are the movement keys.
        if (e.getKeyCode() == KeyEvent.VK_W)
        	guy.setMovingUp(true);
        if (e.getKeyCode() == KeyEvent.VK_S)
        	guy.setMovingDown(true);
        if (e.getKeyCode() == KeyEvent.VK_D)
        	guy.setMovingRight(true);
        if (e.getKeyCode() == KeyEvent.VK_A)
        	guy.setMovingLeft(true);
        
        // The numeric keypad provides firing directions.
        // Note that I'm using the character's center point
        // as the origin for the projectiles.
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD8)
        	guy.setFiringUp(true);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD9)
        	guy.setFiringUpRight(true);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD6)
        	guy.setFiringRight(true);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD3)
        	guy.setFiringDownRight(true);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD2)
        	guy.setFiringDown(true);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD1)
        	guy.setFiringDownLeft(true);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD4)
        	guy.setFiringLeft(true);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD7)
        	guy.setFiringUpLeft(true);
    }

    @Override
    public void keyReleased(final KeyEvent e)
    {
        if (e.getKeyCode() == KeyEvent.VK_W)
        	guy.setMovingUp(false);
        if (e.getKeyCode() == KeyEvent.VK_S)
        	guy.setMovingDown(false);
        if (e.getKeyCode() == KeyEvent.VK_D)
        	guy.setMovingRight(false);
        if (e.getKeyCode() == KeyEvent.VK_A)
        	guy.setMovingLeft(false);
        
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD8)
        	guy.setFiringUp(false);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD9)
        	guy.setFiringUpRight(false);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD6)
        	guy.setFiringRight(false);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD3)
        	guy.setFiringDownRight(false);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD2)
        	guy.setFiringDown(false);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD1)
        	guy.setFiringDownLeft(false);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD4)
        	guy.setFiringLeft(false);
        if (e.getKeyCode() == KeyEvent.VK_NUMPAD7)
        	guy.setFiringUpLeft(false);
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










