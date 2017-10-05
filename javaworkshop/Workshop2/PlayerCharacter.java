import java.awt.Color;
import java.awt.Graphics;


public class PlayerCharacter
{
	private Color color;
	private int x;
    private int y;
	private int hSpeed, vSpeed;
	private int width, height;

	public PlayerCharacter()
	{
		color = Color.GREEN;
		x = 10;
		y = 10;
		hSpeed = 10;
		vSpeed = 10;
		width = 40;
		height = 40;
	}


	public void draw(final Graphics g)
	{
		g.setColor(color);
		g.fillOval(x, y, width, height);
	}


    public int getHSpeed()
    {
        return hSpeed;
    }


    public int getX()
    {
        return x;
    }


    public void setX(final int px)
    {
        x = px;
    }


    public Color getColor()
    {
        return color;
    }


    public void setColor(final Color color)
    {
        this.color = color;
    }


    public int getY()
    {
        return y;
    }


    public void setY(final int y)
    {
        this.y = y;
    }


    public void setHSpeed(final int hSpeed)
    {
        this.hSpeed = hSpeed;
    }


    public int getVSpeed()
    {
        return vSpeed;
    }


    public void setVSpeed(final int vSpeed)
    {
        this.vSpeed = vSpeed;
    }


    public int getWidth()
    {
        return width;
    }


    public void setWidth(final int width)
    {
        this.width = width;
    }


    public int getHeight()
    {
        return height;
    }


    public void setHeight(final int height)
    {
        this.height = height;
    }
}
