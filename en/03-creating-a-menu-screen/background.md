## Setting a colored background
Unless you want a black background, the first step is to start building up the UI simulating a "layered" look. You might remember `Layer` objects from __Cocos2d-x__. However, in __Cocos Creator__ `Layer` objects do not exist. Instead you can use a `Node` and set some __properties__ to achieve the same concept as you could before with a `Layer` object.

### Creating a background layer
*  In the  __Node tree__ panel, __Right click__ on __UI__ node and select: __Create --> Create Render Nodes --> Sprite Node (Splash)__.

    ![](img/create_background_layer_node.png)

* You should see a small white colored `Node` appear on the `Scene`. Example:

    ![](img/create_background_layer_node_2.png)

  It is important to note that __Cocos Creator__ informs us of the  newly created `Node` objects parent, in this case the `Node` named __UI__ we created above.

    ![](img/create_background_layer_node_3.png)

* Last, __Right click__ on __New Sprite(Splash)__ and rename it to __Background__.

### Customizing our background layer
Now that we have our `Node` we need to assign it a color and how much space it will occupy on the `Canvas`. Typically a background layer might take up the entire `Canvas`. Let's adjust the __Background__ node's properties to do exactly this.

* First, select the __Background__ node from the __Node Tree__ panel.

* Second, in the __Properties__ panel, set the __color__ to anything you like. I am going to choose __white__ for simplicity as this is already the default.

* Third, in the __Properties__ panel, set the __size__ and __position__ of our __Background__ node. We want it to take up the entire canvas, so this this should be set to the same size as the __design resolution__ or in this case __640 x 960__. Also, the __position__ should be set to __0, 0__ so the node starts at the bottom left corner of the canvas.

    ![](img/size.png)  ![](img/position.png)

* Last, double check to make sure what you have matches our progress so far.

    ![](img/background_finished.png)

### Adding a game title
Now that we have a background we need to add items to it to make it look more like a menu screen. Let's add a game title. To do this we will be using the __Label__ node from the __Node Library__ panel.

  ![](img/node_library_label.png)

* First, from the __Node Library__ panel, drag and drop a __Label__  on to the __Background__ node in the __Node Tree__ panel.

    ![](img/background_label_hierarchy.png)

* Second, rename the label to __Title__ in the __Node Tree__ panel.

* Third, with __Title__ selected, change some properites for the label. This should include __color__, __label string__, __font__, __font size__, etc. Make it look how you wish. I ended up with:

    ![](img/background_title.png)

### Adding a few graphics
Besides a __Title__ we should add a few __Sprites__ to jazz it up. Why don't we add a few of our squares and circles that will take the place of the germs and pills in the original Dr. Mario game. To do this we will be using the __Sprite__ node from the __Node Library__ panel.

  ![](img/node_library_sprite.png)

The layout of these can be up to you. Just drag and drop from the __Assets__ panel on to the __Background__ node. You will end up with some variation of:

  ![](img/node_tree_sprites.png)

  ![](img/background_sprites.png)

### Adding a Play button



### Making the Play button work





__Task:__ Now is a good time to save your project! From the __File__ menu, select __Save Scene__ or use your operating systems shortcut key.
