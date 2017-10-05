import java.awt.Color;
import java.awt.Graphics;


public class Projectile extends SpaceObject 
{
	private static float SPEED_ADJUST = 1.414f;
	private int diameter = 5;
	private int speed = 20;
	private float diagSpeed = speed / SPEED_ADJUST;
	private Direction dir;
	
	public Projectile(float startX, float startY, Direction d)
	{
		setX(startX);
		setY(startY);
		setColor(Color.YELLOW);
		dir = d;
	}
	
	
	public void update()
	{
		
		// Move the projectile.
		switch (dir)
		{
			case UP:
				setY(getY() - speed);
				break;
			case UP_RIGHT:
				setX(getX() + diagSpeed);
				setY(getY() - diagSpeed);
				break;
			case RIGHT:
				setX(getX() + diagSpeed);
				break;
			case DOWN_RIGHT:
				setX(getX() + diagSpeed);
				setY(getY() + diagSpeed);
				break;
			case DOWN:
				setY(getY() + speed);
				break;
			case DOWN_LEFT:
				setX(getX() - diagSpeed);
				setY(getY() + diagSpeed);
				break;
			case LEFT:
				setX(getX() - diagSpeed);
				break;
			case UP_LEFT:
				setX(getX() - diagSpeed);
				setY(getY() - diagSpeed);
				break;
		}
		
		// TODO:  If the projectile is off screen, mark it as "dead".
		if (getX() < 0 || getY() < 0 || 
				getX() > HelloApplet.SCREEN_WIDTH ||
				getY() > HelloApplet.SCREEN_HEIGHT)
			setDead(true);
	}
	
	public void draw(Graphics g)
	{
		g.setColor(getColor());
		g.fillOval((int)getX(), (int)getY(), diameter, diameter);
	}
}
