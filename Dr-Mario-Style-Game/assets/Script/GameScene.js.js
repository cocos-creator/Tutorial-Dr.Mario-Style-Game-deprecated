// the levels
const level1 = ["R","G","B","Y"];
const level2 = ["Y","Y","B","B","G","G","R","R"];
const level3 = ["R","G","B","Y","R","G","B","Y","R","G","B","Y"];

var _currentLevelValues = [];

var _currentLevel = 1;

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        // holds objects of current level
        //_currentLevel: {
        //    default: [],
        //    serializable: false
        //}
    },

    // LIFE-CYCLE CALLBACKS:
    
    onLoad () {

		switch (_currentLevel)
		{
			case 1:
				this.populateCurrentLevel(level1, _currentLevelValues);
			case 2:
				this.populateCurrentLevel(level2, _currentLevelValues);
			case 3:
				this.populateCurrentLevel(level3, _currentLevelValues);
		}
    },

    start () {
		
    },

	populateCurrentLevel: function (_level, _currentLevelValues) {
    
    	// iterate through level array and make objects in currentLevel
		for (let i = 0; i < _level.length; i++)
		{
			let germ = {
				id: i+1,
				germ: _level[i]
			};

			_currentLevelValues[i] = germ;
		}
	},
	
    update (dt) 
    {
        
    },
});
