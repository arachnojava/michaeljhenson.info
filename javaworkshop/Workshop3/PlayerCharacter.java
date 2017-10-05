import java.awt.Color;
import java.awt.Graphics;


public class PlayerCharacter extends SpaceObject
{
	private int width, height;
	private boolean movingUp, movingDown, movingLeft, movingRight;
	private boolean firingUp, firingUpRight, firingDownRight, firingRight,
	                firingDown, firingDownLeft, firingLeft, firingUpLeft;


	public PlayerCharacter()
	{
		setColor(Color.GREEN);
		setX(10);
		setY(10);
		setHSpeed(10);
		setVSpeed(10);
		width = 40;
		height = 40;
		
		movingUp = false;
        movingDown = false;
        movingLeft = false;
        movingRight = false;
	}


	public void draw(final Graphics g)
	{
		g.setColor(getColor());
		g.fillOval((int)getX(), (int)getY(), width, height);
	}
	
	
	public void update()
	{
        if (movingUp && getY() > 0)
            setY(getY() - getVSpeed());
        if (movingDown && getY() < HelloApplet.SCREEN_HEIGHT - getHeight())
            setY(getY() + getVSpeed());
        if (movingRight && getX() < HelloApplet.SCREEN_WIDTH - getWidth())
            setX(getX() + getHSpeed());
        if (movingLeft && getX() > 0)
            setX(getX() - getHSpeed());
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


	public void setMovingUp(boolean movingUp) 
	{
		this.movingUp = movingUp;
	}


	public void setMovingDown(boolean movingDown) 
	{
		this.movingDown = movingDown;
	}


	public void setMovingLeft(boolean movingLeft) 
	{
		this.movingLeft = movingLeft;
	}


	public void setMovingRight(boolean movingRight) 
	{
		this.movingRight = movingRight;
	}


	public boolean isFiringUp() {
		return firingUp;
	}


	public void setFiringUp(boolean firingUp) {
		this.firingUp = firingUp;
	}


	public boolean isFiringUpRight() {
		return firingUpRight;
	}


	public void setFiringUpRight(boolean firingUpRight) {
		this.firingUpRight = firingUpRight;
	}


	public boolean isFiringDownRight() {
		return firingDownRight;
	}


	public void setFiringDownRight(boolean firingDownRight) {
		this.firingDownRight = firingDownRight;
	}


	public boolean isFiringRight() {
		return firingRight;
	}


	public void setFiringRight(boolean firingRight) {
		this.firingRight = firingRight;
	}


	public boolean isFiringDown() {
		return firingDown;
	}


	public void setFiringDown(boolean firingDown) {
		this.firingDown = firingDown;
	}


	public boolean isFiringDownLeft() {
		return firingDownLeft;
	}


	public void setFiringDownLeft(boolean firingDownLeft) {
		this.firingDownLeft = firingDownLeft;
	}


	public boolean isFiringLeft() {
		return firingLeft;
	}


	public void setFiringLeft(boolean firingLeft) {
		this.firingLeft = firingLeft;
	}


	public boolean isFiringUpLeft() {
		return firingUpLeft;
	}


	public void setFiringUpLeft(boolean firingUpLeft) {
		this.firingUpLeft = firingUpLeft;
	}
}
