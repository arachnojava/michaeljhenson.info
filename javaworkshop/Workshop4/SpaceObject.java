import java.awt.Color;
import java.awt.Graphics;


public abstract class SpaceObject 
{
	private float x, y;
	private float hSpeed, vSpeed;
	private Color color;
	private boolean dead = false;

	public abstract void draw(Graphics g);
	public abstract void update();
	
	public float getX() 
	{
		return x;
	}
	
	
	public void setX(float x) 
	{
		this.x = x;
	}
	
	
	public float getY() 
	{
		return y;
	}
	
	
	public void setY(float y) 
	{
		this.y = y;
	}
	
	
	public float getHSpeed() 
	{
		return hSpeed;
	}
	
	
	public void setHSpeed(float speed) 
	{
		hSpeed = speed;
	}
	
	
	public float getVSpeed() 
	{
		return vSpeed;
	}
	
	
	public void setVSpeed(float speed) 
	{
		vSpeed = speed;
	}
	public Color getColor() {
		return color;
	}
	public void setColor(Color color) {
		this.color = color;
	}
	public boolean isDead() {
		return dead;
	}
	public void setDead(boolean dead) {
		this.dead = dead;
	}
}
