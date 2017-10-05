package breakout;

import javax.swing.JApplet;

public class BreakoutApplet extends JApplet
{
    private static final long serialVersionUID = -6483190106412061708L;

    public void init()
    {
        this.getContentPane().add(new Board());
    }

}
