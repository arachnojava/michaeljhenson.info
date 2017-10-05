import java.awt.Graphics;


public class Asteroid extends SpaceObject 
{
	private static final int MIN_SPEED = -10;
	private static final int MAX_SPEED = 10;
	
	private int hp;
	private AsteroidType type;
	
	public Asteroid(AsteroidType t)
	{
		type = t;
		hp = type.getMaxHP();
		setColor(type.getColor());
		
		initialize();
	}

	public Asteroid(AsteroidType t, float x, float y)
	{
		this(t);
		setX(x);
		setY(y);
	}

	
	private void initialize()
	{
		double startSide = Math.random();
		
		if (startSide < 0.25)
		{
			setX((float)(Math.random() * HelloApplet.SCREEN_WIDTH));
			setY(0 - type.getSize());
		}
		else if (startSide < 0.5)
		{
			setX(HelloApplet.SCREEN_WIDTH);
			setY((float)(Math.random() * HelloApplet.SCREEN_HEIGHT));
		}
		else if (startSide < 0.75)
		{
			setX((float)(Math.random() * HelloApplet.SCREEN_WIDTH));
			setY(HelloApplet.SCREEN_HEIGHT);
		}
		else
		{
			setX(0 - type.getSize());
			setY((float)(Math.random() * HelloApplet.SCREEN_HEIGHT));
		}

		setHSpeed((float)(MIN_SPEED + Math.random() * MAX_SPEED*2));
		setVSpeed((float)(MIN_SPEED + Math.random() * MAX_SPEED*2));
	}
	
	@Override
	public void draw(Graphics g) 
	{
		g.setColor(getColor());
		g.fillOval((int)getX(), (int)getY(), type.getSize(), type.getSize());
	}

	@Override
	public void update() 
	{
		setX(getX() + getHSpeed());
		setY(getY() + getVSpeed());
		
		if (getX() < 0 - type.getSize())
			setX(HelloApplet.SCREEN_WIDTH);
		else if (getX() > HelloApplet.SCREEN_WIDTH)
			setX(0 - type.getSize());
		
		if (getY() < 0 - type.getSize())
			setY(HelloApplet.SCREEN_HEIGHT);
		else if (getY() > HelloApplet.SCREEN_HEIGHT)
			setY(0 - type.getSize());
		
	}

	public int getRadius()
	{
		return type.getSize()/2;
	}

	public AsteroidType getType() 
	{
		return type;
	}
	
	
	public float getCenterX()
	{
		return getX() + type.getSize()/2;
	}

	public float getCenterY()
	{
		return getY() + type.getSize()/2;
	}
}
