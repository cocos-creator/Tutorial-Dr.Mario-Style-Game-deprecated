## What logic does our game need?
We know how we want our game to play and we have the user interface laid out. We have also started some code to change __scenes__ when the user presses __play__. Now, we need to implement the logic for our game so that it starts to become playable. But what game logic do we need to implement?

We need the following:
* The game board to be populated with pieces for the player to destroy. (AKA the __germs__).

* Pieces to be presented to the player to help then line up and destroy the __germs__. (AKA the __pills__).

* The player must be able to rotate the __pills__ to help match them up with the __germs__.

* When the player stacks three __pills__ on top of a __germ__ of the same color the __germ__ and __pills__ must disappear and then update the __statistics__.

* Sound effects and some background music.

* When the player clears all the __germs__, show a success message and load the next level.

This is a fair amount of work, let's get going!

__Task:__ Now is a good time to save your project! From the __File__ menu, select __Save Scene__ or use your operating system's shortcut key.
