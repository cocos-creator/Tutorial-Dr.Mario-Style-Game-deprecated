## Creating more of the game play interface.
We need to create the rest of our game play interface. The goal here is to make this look like the game we planned at the beginning. Remember this picture:

  ![](../02-starting-development/img/drmario-simple.png)

We need to create more aspects of this to build up our game. Once we have the user interface elements laid out we can start to build logic and add code.

* First, create another __Sprite Node (Splash)__ and call it __GameBoard__. Give it an __anchor point__ of __0.5 x 0.5__, __size__ of __490 x 750__ and a __position__ of __111 x -98__. This will act as the area where the game play happens.

* Second, let's add some place holders for statistics, like __level__, __counts__, etc. To do this, lets create another __Sprite Node (Splash)__ as a __child__ of our __UI__ node and call it __Stats__. Give it an __anchor point__ of __0.5 x 0.5__, __size__ of __200 x 600__ and a __position__ of __-208 x -61__.

* Third, let's repeat the same concept as the above steps and make a third place holder to hold some sort of branding, possibly a logo or text. To do this, lets create another __Sprite Node (Splash)__ as a __child__ of our __UI__ node and call it __Branding__. Give it an __anchor point__ of __0.5 x 0.5__, __size__ of __155 x 155__ and a __position__ of __-225 x 385__. The `Scene` should look like the following:

    ![](img/background_with_gameboard_stats_branding.png)

* Next,
