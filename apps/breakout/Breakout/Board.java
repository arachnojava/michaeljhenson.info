package breakout;

import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.MouseInfo;
import java.awt.Point;
import java.awt.Toolkit;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;
import java.awt.event.MouseMotionListener;
import java.*;

import java.util.Timer;
import java.util.TimerTask;

import javax.swing.JPanel;


public class Board extends JPanel implements Commons
{
    Image image;
    Timer timer;
    String message = "Game Over";
    Ball ball;
    Paddle paddle1;
    Paddle paddle2;
    PaddleVert paddle3;
    PaddleVert paddle4;
    BlankArea blankArea;
    Brick bricks[];
    int bricksHorizontal = 4;
    int bricksVertical = 8;
    int padX = 0;
    int padY = 0;

    boolean ingame = true;
    int timerId;


    public Board() 
    {

        addKeyListener(new TAdapter());
        setFocusable(true);

        bricks = new Brick[bricksVertical*bricksHorizontal];
        setDoubleBuffered(true);
        timer = new Timer();
        timer.scheduleAtFixedRate(new ScheduleTask(), 1000, 10);
    }

        public void addNotify() 
        {
            super.addNotify();
            gameInit();
        }

    public void gameInit() 
    {

        ball = new Ball();
        paddle1 = new Paddle(200,360);
        paddle2 = new Paddle(200,40);
        paddle3 = new PaddleVert(10,200);
        paddle4 = new PaddleVert(280,200);
        blankArea = new BlankArea();


        int k = 0;
        for (int i = 0; i < bricksVertical; i++) 
        {
            for (int j = 0; j < bricksHorizontal; j++) 
            {
                bricks[k] = new Brick(j * 40 + 60, i * 10 + 150);
                k++;
            }
        }
    }


    public void paint(Graphics g) 
    {
        super.paint(g);

        if (ingame) 
        {
            g.drawImage(ball.getImage(), ball.getX(), ball.getY(),
                    ball.getWidth(), ball.getHeight(), this);
            g.drawImage(paddle1.getImage(), paddle1.getX(), paddle1.getY(),
            		paddle1.getWidth(), paddle1.getHeight(), this);
            g.drawImage(paddle2.getImage(), paddle2.getX(), paddle2.getY(),
            		paddle2.getWidth(), paddle2.getHeight(), this);
            g.drawImage(paddle3.getImage(), paddle3.getX(), paddle3.getY(),
            		paddle3.getWidth(), paddle3.getHeight(), this);
            g.drawImage(paddle4.getImage(), paddle4.getX(), paddle4.getY(),
            		paddle4.getWidth(), paddle4.getHeight(), this);

            for (int i = 0; i < 30; i++) 
            {
                if (!bricks[i].isDestroyed())
                    g.drawImage(bricks[i].getImage(), bricks[i].getX(),
                                bricks[i].getY(), bricks[i].getWidth(),
                                bricks[i].getHeight(), this);
            }
        } 
        else 
        {

            Font font = new Font("Verdana", Font.BOLD, 18);
            FontMetrics metr = this.getFontMetrics(font);

            g.setColor(Color.BLACK);
            g.setFont(font);
            g.drawString(message,
                         (Commons.WIDTH - metr.stringWidth(message)) / 2,
                         Commons.WIDTH / 2);
        }


        Toolkit.getDefaultToolkit().sync();
        g.dispose();
    }

    private class TAdapter extends KeyAdapter 
    {

        public void keyReleased(KeyEvent e) 
        {
        	paddle1.keyReleased(e);
        	paddle2.keyReleased(e);
        	paddle3.keyReleased(e);
        	paddle4.keyReleased(e);
        }

        public void keyPressed(KeyEvent e) 
        {
        	paddle1.keyPressed(e);
        	paddle2.keyPressed(e);
        	paddle3.keyPressed(e);
        	paddle4.keyPressed(e);
        }
    }


    class ScheduleTask extends TimerTask 
    {

        public void run() 
        {
            ball.move();
            paddle1.move(padX);
            paddle2.move(padX);
            paddle3.move(padY);
            paddle4.move(padY);
            checkCollision();
            repaint();

        }
    }

    public void stopGame() 
    {
        ingame = false;
        timer.cancel();
    }


    public void checkCollision() 
    {

        if (ball.getRect().getMaxY() > Commons.BOTTOM || ball.getRect().getMaxY() < 3) 
        {
            stopGame();
        }

        for (int i = 0, j = 0; i < bricksVertical*bricksHorizontal; i++) 
        {
            if (bricks[i].isDestroyed()) 
            {
                j++;
            }
            if (j == bricksVertical*bricksHorizontal) 
            {
                message = "Victory";
                stopGame();
            }
        }

        if ((ball.getRect()).intersects(paddle1.getRect()) || (ball.getRect()).intersects(paddle2.getRect())) 
        {
            int paddleLPos = (int)paddle1.getRect().getMinX();
            int ballLPos = (int)ball.getRect().getMinX();

            int firstPaddleSection = paddleLPos + 8;
            int secondPaddleSection = paddleLPos + 16;
            int thirdPaddleSection = paddleLPos + 24;
            int fourthPaddleSection = paddleLPos + 32;

            if (ballLPos < firstPaddleSection) 
            {
            	if (ball.getY() < 200)
            	{
                    ball.setXDir(-1);
                    ball.setYDir(1);
            	}
            	else
            	{
                    ball.setXDir(-1);
                    ball.setYDir(-1);
            	}
            }

            if (ballLPos >= firstPaddleSection && ballLPos < secondPaddleSection) 
            {
            	if (ball.getY() < 200)
            	{
                    ball.setYDir(1);
            	}
            	else
            	{
                    ball.setYDir(-1);
            	}
            }

            if (ballLPos >= secondPaddleSection && ballLPos < thirdPaddleSection) 
            {
            	if (ball.getY() < 200)
            	{
                    ball.setYDir(1);
            	}
            	else
            	{
                    ball.setYDir(-1);
            	}
            }

            if (ballLPos >= thirdPaddleSection && ballLPos < fourthPaddleSection) 
            {
            	if (ball.getY() < 200)
            	{
                    ball.setYDir(1);
            	}
            	else
            	{
                    ball.setYDir(-1);
            	}
            }

            if (ballLPos > fourthPaddleSection) 
            {
            	if (ball.getY() < 200)
            	{
                    ball.setXDir(1);
                    ball.setYDir(1);
            	}
            	else
            	{
                    ball.setXDir(1);
                    ball.setYDir(-1);
            	}
            }


        }
        
        if ((ball.getRect()).intersects(paddle3.getRect()) || (ball.getRect()).intersects(paddle4.getRect())) 
        {
            int paddleVertLPos = (int)paddle3.getRect().getMinY();
            int ballLVertPos = (int)ball.getRect().getMinY();

            int firstVertPaddleSection = paddleVertLPos + 8;
            int secondVertPaddleSection = paddleVertLPos + 16;
            int thirdVertPaddleSection = paddleVertLPos + 24;
            int fourthVertPaddleSection = paddleVertLPos + 32;

            if (ballLVertPos < firstVertPaddleSection) 
            {
            	if (ball.getX() < 150)
            	{
                    ball.setXDir(1);
                    ball.setYDir(-1);
            	}
            	else
            	{
                    ball.setXDir(-1);
                    ball.setYDir(-1);
            	}
            }

            if (ballLVertPos >= firstVertPaddleSection && ballLVertPos < secondVertPaddleSection) 
            {
            	if (ball.getX() < 150)
            	{
                    ball.setXDir(1);
            	}
            	else
            	{
                    ball.setXDir(-1);
            	}
            }

            if (ballLVertPos >= secondVertPaddleSection && ballLVertPos < thirdVertPaddleSection) 
            {
            	if (ball.getX() < 150)
            	{
                    ball.setXDir(1);
            	}
            	else
            	{
                    ball.setXDir(-1);
            	}
            }

            if (ballLVertPos >= thirdVertPaddleSection && ballLVertPos < fourthVertPaddleSection) 
            {
            	if (ball.getX() < 150)
            	{
                    ball.setXDir(1);
            	}
            	else
            	{
                    ball.setXDir(-1);
            	}
            }

            if (ballLVertPos > fourthVertPaddleSection) 
            {
            	if (ball.getY() < 200)
            	{
                    ball.setXDir(1);
                    ball.setYDir(1);
            	}
            	else
            	{
                    ball.setXDir(-1);
                    ball.setYDir(1);
            	}
            }

        }


        for (int i = 0; i < 30; i++) 
        {
            if ((ball.getRect()).intersects(bricks[i].getRect())) 
            {

                int ballLeft = (int)ball.getRect().getMinX();
                int ballHeight = (int)ball.getRect().getHeight();
                int ballWidth = (int)ball.getRect().getWidth();
                int ballTop = (int)ball.getRect().getMinY();

                Point pointRight =
                    new Point(ballLeft + ballWidth + 1, ballTop);
                Point pointLeft = new Point(ballLeft - 1, ballTop);
                Point pointTop = new Point(ballLeft, ballTop - 1);
                Point pointBottom =
                    new Point(ballLeft, ballTop + ballHeight + 1);

                if (!bricks[i].isDestroyed()) 
                {
                    if (bricks[i].getRect().contains(pointRight)) 
                    {
                        ball.setXDir(-1);
                    }

                    else if (bricks[i].getRect().contains(pointLeft)) 
                    {
                        ball.setXDir(1);
                    }

                    if (bricks[i].getRect().contains(pointTop)) 
                    {
                        ball.setYDir(1);
                    }

                    else if (bricks[i].getRect().contains(pointBottom)) 
                    {
                        ball.setYDir(-1);
                    }

                    bricks[i].setDestroyed(true);
                }
            }
        }
    }
}