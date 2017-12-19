## Starting to code!
Now that we have our user interface laid out, we can start coding. Right from the start, there are some initial coding tasks to handle.

### How to start playing the game
Remember our __Main Scene__?

  ![](../03-creating-a-menu-screen/img/background_button.png)

We need to make the __Play__ button work! How do we do that? Remember that we have all the code logic for __Main Scene__ scene in __MainScene.js__. To make the __Play__ button work we just need a single line of code added to our __callback__ function, modified to be:

```js
callback: function (event) {
    	cc.director.loadScene('GameScene');   
}
```

Notice that we added a line of code: `cc.director.loadScene('GameScene');`. This line simple says to load our __GameScene__.  Running this change in a browser shows what happens.

![](../03-creating-a-menu-screen/img/background_button.png) __is replaced with__  ![](../04-laying-out-gameplay-ui/img/background_with_gameboard_stats_branding.png)
