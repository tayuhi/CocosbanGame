var ResultLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();
        }

        var label = cc.LabelTTF.create("Game Clear!!", "Arial", 26);
                label.setPosition(size.width / 2, size.height * 5 / 6);
                this.addChild(label, 1);



        // タップイベントリスナーを登録する
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: this.onTouchBegan,
            onTouchMoved: this.onTouchMoved,
            onTouchEnded: this.onTouchEnded
        }, this);
        return true;
    },
    onTouchBegan: function(touch, event) {
        return true;
    },
    onTouchMoved: function(touch, event) {},
    onTouchEnded: function(touch, event) {
        cc.director.runScene(new secondgameScene());

        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();
        }

    },
});


var ResultScene = cc.Scene.extend({
    onEnter: function() {
        this._super();


        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(50, 250, 50, 250));
        this.addChild(backgroundLayer);

        //ラベルとタップイベント取得
        var layer3 = new ResultLayer();
        this.addChild(layer3);

    }
});
