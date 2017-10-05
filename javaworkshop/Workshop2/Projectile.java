import java.awt.Color;
import java.awt.Graphics;


public class Projectile 
{
	private static float SPEED_ADJUST = 1.414f;
	private float x, y;
	private int diameter = 5;
	private int speed = 20;
	private float diagSpeed = speed / SPEED_ADJUST;
	private Color c = Color.YELLOW;
	private Direction dir;
	
	public Projectile(int startX, int startY, Direction d)
	{
		x = startX;
		y = startY;
		dir = d;
	}
	
	
	public void update()
	{
		
		// Move the projectile.
		switch (dir)
		{
			case UP:
				y = y - speed;
				break;
			case UP_RIGHT:
				x = x + diagSpeed;
				y = y - diagSpeed;
				break;
			case RIGHT:
				x = x + speed;
				break;
			case DOWN_RIGHT:
				x = x + diagSpeed;
				y = y + diagSpeed;
				break;
			case DOWN:
				y = y + speed;
				break;
			case DOWN_LEFT:
				x = x - diagSpeed;
				y = y + diagSpeed;
				break;
			case LEFT:
				x = x - speed;
				break;
			case UP_LEFT:
				x = x - diagSpeed;
				y = y - diagSpeed;
				break;
		}
		
		// TODO:  If the projectile is off screen, mark it as "dead".
	}
	
	public void paint(Graphics g)
	{
		g.setColor(c);
		g.fillOval((int)x, (int)y, diameter, diameter);
	}
}
