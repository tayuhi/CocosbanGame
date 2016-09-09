var stage_num = 0;

var ResultLayer = cc.Layer.extend({
  sprite: null,
    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();
        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();
        }

        var sprite = cc.Sprite.create(res.egao);
        sprite.setPosition(size.width / 1.5, size.height / 2.5);
        sprite.setScale(0.5);
        this.addChild(sprite, 0);

        var sprite = cc.Sprite.create(res.egao2);
        sprite.setPosition(size.width / 3, size.height / 2.5);
        sprite.setScale(0.8);
        this.addChild(sprite, 0);



        var label = cc.LabelTTF.create("Game Clear!?", "Arial", 36);
                label.setPosition(size.width / 2, size.height * 5 / 6);
                this.addChild(label, 1);

                var label = cc.LabelTTF.create("It is a healing smile.", "Arial", 36);
                        label.setPosition(size.width / 2, size.height  / 7);
                        this.addChild(label, 1);

                if (!audioEngine.isMusicPlaying()) {
                    //audioEngine.playMusic("res/bgm_main.mp3", true);
                    audioEngine.playMusic(res.bgm_title, true);
                }

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
      stage_num++;
        cc.director.runScene(new gameScene());

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
        var backgroundLayer = new cc.LayerColor(new cc.Color(0, 0, 0, 250));
        this.addChild(backgroundLayer);

        //ラベルとタップイベント取得
        var layer3 = new ResultLayer();
        this.addChild(layer3);

    }
});
