//thirdScene.js
//nextScene.js

var ThirdLayer = cc.Layer.extend({

    ctor: function() {
        this._super();
        var size = cc.director.getWinSize();

        //音楽再生エンジン
        audioEngine = cc.audioEngine;
        if (!audioEngine.isMusicPlaying()) {
            //audioEngine.playMusic("res/bgm_main.mp3", true);
            audioEngine.playMusic(res.soup, true);
        }

        //画像
        var sprite = cc.Sprite.create(res.kage);
        sprite.setPosition(size.width / 2, size.height / 3.5);
        sprite.setScale(1.9, 1.7);
        this.addChild(sprite, 0);

        var sprite = cc.Sprite.create(res.hand);
        sprite.setPosition(size.width / 2.8, size.height / 2.5);
        sprite.setScale(0.15);
        this.addChild(sprite, 0);

        var sprite = cc.Sprite.create(res.hand);
        sprite.setPosition(size.width / 1.2, size.height / 2.5);
        sprite.setScale(0.4);
        this.addChild(sprite, 0);

        /*//画像
        var sprite = cc.Sprite.create(res.kage);
        sprite.setPosition(size.width / 1.3, size.height / 7);
        sprite.setScale(0.8);
        this.addChild(sprite, 0);
*/
        var label = cc.LabelTTF.create("倉庫番", "Arial", 76);
        label.setPosition(size.width / 2, size.height * 1 / 6);
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
        cc.director.runScene(new gameScene());

        //bgmの再生をとめる
        if (audioEngine.isMusicPlaying()) {
            audioEngine.stopMusic();
audioEngine.playEffect(res.warai);
        }

    },
});


var FirstScene = cc.Scene.extend({
    onEnter: function() {
        this._super();

        // 背景レイヤーをその場で作る
        var backgroundLayer = new cc.LayerColor(new cc.Color(150, 0, 0, 250));
        this.addChild(backgroundLayer);

        //ラベルとタップイベント取得
        var layer3 = new ThirdLayer();
        this.addChild(layer3);

    }
});
