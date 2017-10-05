import java.awt.Color;


public enum AsteroidType 
{
	SMALL_ASTEROID(1, 20, 1, Color.BLUE),
	MEDIUM_ASTEROID(2, 40, 2, Color.CYAN),
	LARGE_ASTEROID(4, 80, 4, Color.RED);
	
	private int maxHP;
	private int size;
	private int pointValue;
	private Color color;
	
	private AsteroidType(int hitPoints, int diameter, int score, Color c)
	{
		maxHP = hitPoints;
		size = diameter;
		pointValue = score;
		color = c;
	}

	public int getMaxHP() 
	{
		return maxHP;
	}

	public int getSize() 
	{
		return size;
	}

	public int getPointValue() 
	{
		return pointValue;
	}

	public Color getColor() {
		return color;
	}
	
	
}
