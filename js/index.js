//initializing phaser 
var game = new Phaser.Game(600,360,Phaser.Auto);

var andarBetTotal; //text for total value of andar
var baharBetTotal; //text for total value of bahar

var andar_value = 0; //sum of total andarBetBox bet
var bahar_value = 0; //sum of total baharBetBox bet

var value; //value of chip

var andarCounter = 1; //initial counter value of andarBetBox clicks
var baharCounter = 1; //initial counter value of baharBetBox clicks

var chip_movement_bet5; //chip5 animation
var chip_movement_bet10; //chip10 animation
var chip_movement_bet50; //chip50 animation
var chip_movement_bet100; //chip100 animation
var chip_movement_bet500; //chip500 animation

var andarChipIcon5;
var baharaChipIcon5;
var andarChipIcon10;
var baharaChipIcon10;
var andarChipIcon50;
var baharaChipIcon50;
var andarChipIcon100;
var baharaChipIcon100;
var andarChipIcon500;
var baharaChipIcon500;

//initializing game state
var GameState = {
//preload function
    preload: function () {
//adding assets
        this.load.image('background','assets/images/background.jpg' );
        this.load.image('bet5','assets/images/chip5.png');
        this.load.image('bet10','assets/images/chip10.png');
        this.load.image('bet50','assets/images/chip50.png');
        this.load.image('bet100','assets/images/chip100.png');
        this.load.image('bet500','assets/images/chip500.png');
        this.load.image('betBox','assets/images/bet_box.jpg');
        this.load.image('bet5_1','assets/images/chip5_1.png');
        this.load.image('bet10_1','assets/images/chip10_1.png');
        this.load.image('bet50_1','assets/images/chip50_1.png');
        this.load.image('bet100_1','assets/images/chip100_1.png');
        this.load.image('bet500_1','assets/images/chip500_1.png');
    },
//create function
    create: function () {
//initializing keyboard input keys
        cursors = this.game.input.keyboard.createCursorKeys();
//scaling the dimensions of screen
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
//adding background image 
        this.background = this.game.add.sprite(0,0,'background');
//adding 5$ sprite to the game
        this.bet5 = this.game.add.sprite(100,250,'bet5');
        this.bet5.scale.setTo(0.13);
        this.bet5.anchor.setTo(0.5);
        this.bet5.inputEnabled = true; //enabling input
//adding 10$ sprite to the game
        this.bet10 = this.game.add.sprite(200,250,'bet10');
        this.bet10.scale.setTo(0.14);
        this.bet10.anchor.setTo(0.5);
        this.bet10.inputEnabled = true; //enabling input
//adding 50$ sprite to the game
        this.bet50 = this.game.add.sprite(300,250,'bet50');
        this.bet50.scale.setTo(0.37);
        this.bet50.anchor.setTo(0.5);
        this.bet50.inputEnabled = true; //enabling input
//adding 100$ sprite to the game
        this.bet100 = this.game.add.sprite(400,250,'bet100');
        this.bet100.scale.setTo(0.34);
        this.bet100.anchor.setTo(0.5);
        this.bet100.inputEnabled = true; //enabling input
//adding 500$ sprite to the game 
        this.bet500 = this.game.add.sprite(500,250,'bet500');
        this.bet500.scale.setTo(0.20);
        this.bet500.anchor.setTo(0.5);
        this.bet500.inputEnabled = true; //enabling input
//adding betBox to the game
        this.andarBetBox = this.game.add.sprite(70,100,'betBox');
        this.andarBetBox.inputEnabled = true; //enabling input
//setting up bet value on betbox         
        andarBetTotal = this.game.add.text(120,125,{
            fill: "#000000", //text color
         });
         andarBetTotal.anchor.setTo(0.5);
//setting up the baharBetBox         
        this.baharBetBox = this.game.add.sprite(550,100,'betBox');
        this.baharBetBox.anchor.setTo(1,0);
        this.baharBetBox.inputEnabled = true; //enabling input
//setting up bet value on betbox         
        baharBetTotal = this.game.add.text(500,125,{
            fill: "#000000",
         });
         baharBetTotal.anchor.setTo(0.5);
//onclick event for 5$ chip
        this.bet5.input.pixelPerfectClick = true;
        this.bet5.events.onInputDown.add(bet_five,this); 
//onclick event for 10$ chip
        this.bet10.input.pixelPerfectClick = true;
        this.bet10.events.onInputDown.add(bet_ten,this);
//onclick event for 50$ chip
        this.bet50.input.pixelPerfectClick = true;
        this.bet50.events.onInputDown.add(bet_fifty,this);
//onclick event for 100$ chip
        this.bet100.input.pixelPerfectClick = true;
        this.bet100.events.onInputDown.add(bet_hundred,this);
//onclick event for 500$ chip
        this.bet500.input.pixelPerfectClick = true;
        this.bet500.events.onInputDown.add(bet_five_hun,this);
//onclick event for baharBetBox 
        this.baharBetBox.input.pixelPerfectClick = true;
        this.baharBetBox.events.onInputDown.add(baharBetBox_fun,this);
//onclick event for andarBetBox
        this.andarBetBox.input.pixelPerfectClick = true;
        this.andarBetBox.events.onInputDown.add(andarBetBox_fun,this);
    },
//update function
    update: function () {
//updating andarBetbox with sum of total value
            andarBetTotal.text="$"+" "+andar_value;
//updating baharBetBox with sum of total value            
            baharBetTotal.text="$"+" "+bahar_value;
    }
};

//callback function for chip5
    function bet_five () {
        
        chip_movement_bet5 = this.game.add.tween(this.bet5);
        chip_movement_bet5.to({y:230},300);
        chip_movement_bet5.start();
        chip_movement_bet5.to({y:250},300);
        chip_movement_bet5.start();

        value = 5; 
        
    }
//callback function for chip10
    function bet_ten () {

        chip_movement_bet10 = this.game.add.tween(this.bet10);
        chip_movement_bet10.to({y:230},300);
        chip_movement_bet10.start();
        chip_movement_bet10.to({y:250},300);
        
        value = 10;        

        
    }
//callback function for chip50
    function bet_fifty () {
    
        chip_movement_bet50 = this.game.add.tween(this.bet50);
        chip_movement_bet50.to({y:230},300);
        chip_movement_bet50.start();
        chip_movement_bet50.to({y:250},300)       
        value = 50;
    
        
        
    }
//callback function for chip100
    function bet_hundred () {
        chip_movement_bet100 = this.game.add.tween(this.bet100);
        chip_movement_bet100.to({y:230},300);
        chip_movement_bet100.start(); 
        chip_movement_bet100.to({y:250},300)       
        value = 100;
    }
//callback functin for chip500
    function bet_five_hun () {
    
        chip_movement_bet500 = this.game.add.tween(this.bet500);
        chip_movement_bet500.to({y:230},300);
        chip_movement_bet500.start();
        chip_movement_bet500.to({y:250},300);
        chip_movement_bet500.start();
        
        value = 500;
         
    }
//callback function for andraBetBOx     
    function andarBetBox_fun () {
    
        if (value == null) {

            alert("select any chip value");

        }
        else {
            this.andarBetBox.inputEnabled = true;

            if (andarCounter > 1){

                andar_value = andar_value + value;
                console.log(andar_value);
               
            }
            else {
    
                let count = andarCounter++;
    
                andar_value = count * value;
    
                console.log(andar_value);
            }
        }

         andarBetBox_Icon();       
    }
//callback function for baharBetBox    
    function baharBetBox_fun () {
    
        if (value == null) {

            alert("select any chip value");

        }
        else {
            this.baharBetBox.inputEnabled = true;

            if (baharCounter > 1){

                bahar_value = bahar_value + value;
                console.log(bahar_value);
               
            }
            else {
    
                let count = baharCounter++;
    
                bahar_value = count * value;
    
                console.log(bahar_value);
            }
        }

        baharBetBox_Icon();
        
    }
    function andarBetBox_Icon () {
        if (value == 5) {
            andarChipIcon5 = this.game.add.sprite(175,100,'bet5_1');
            andarChipIcon5.scale.setTo(0.5);
            }
        else if (value == 10) {
            andarChipIcon10 = this.game.add.sprite(174,99,'bet10_1');
            andarChipIcon10.scale.setTo(0.530);
            }
        else if (value == 50) {
            andarChipIcon50 = this.game.add.sprite(175,100,'bet50_1');
            andarChipIcon50.scale.setTo(0.51);
            }
        else if (value == 100) {
            andarChipIcon100 = this.game.add.sprite(175,100,'bet100_1');
            andarChipIcon100.scale.setTo(0.5);
            }
        else {
            andarChipIcon500 = this.game.add.sprite(175,100,'bet500_1');
            andarChipIcon500.scale.setTo(0.5);
            }

    }
    function baharBetBox_Icon () {
        if (value == 5) {
            baharaChipIcon5 = this.game.add.sprite(445,100,'bet5_1');
            baharaChipIcon5.anchor.setTo(1,0);
            baharaChipIcon5.scale.setTo(0.5);
            }
        else if (value == 10) {
            baharaChipIcon10 = this.game.add.sprite(446,99,'bet10_1');
            baharaChipIcon10.anchor.setTo(1,0);
            baharaChipIcon10.scale.setTo(0.530);

            }
        else if (value == 50) {
            baharaChipIcon50 = this.game.add.sprite(445,100,'bet50_1');
            baharaChipIcon50.anchor.setTo(1,0);
            baharaChipIcon50.scale.setTo(0.51);

            }
        else if (value == 100) {
            baharaChipIcon100 = this.game.add.sprite(445,100,'bet100_1');
            baharaChipIcon100.anchor.setTo(1,0);
            baharaChipIcon100.scale.setTo(0.5);
            }
        else {
            baharaChipIcon500 = this.game.add.sprite(445,100,'bet500_1');
            baharaChipIcon500.anchor.setTo(1,0);
            baharaChipIcon500.scale.setTo(0.5);
            }
    }    
//adding gamestate to the phaser
game.state.add('GameState',GameState);
//starting game the state
game.state.start('GameState');