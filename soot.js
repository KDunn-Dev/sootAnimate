/*
 * We will add a bunch of these classes.
 */

class Soot {
    constructor( game, x, y ) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/soot-jump-long.png");
        this.spritesheet_aura = ASSET_MANAGER.getAsset("./sprites/soot-jump-long_aura.png");
        this.spritesheet_aura2 = ASSET_MANAGER.getAsset("./sprites/soot-jump-long_aura2_bidir.png");

        this.loadAnimations();

        const NUM_SOOTS = 6; // must be an even number
        const NUM_SOOTS_HALF = NUM_SOOTS / 2;

        // Constants for the x and y
        const STARTx = [];
        const STARTy = [];

        //
        this.x = [];
        this.y = [];

        let level1 = 25;
        let level2 = 600;
        for (let i = 0; i < NUM_SOOTS_HALF; i++){
            this.x[i] = 0;
            this.y[i] = level1;
            level1+= 200;
        }

        for (let i = NUM_SOOTS_HALF; i < NUM_SOOTS; i++){
            this.x[i] = 0;
            this.y[i] = level2;
            level2+= 20;
        }

        console.log(this.y);

        for (let i = 0; i < NUM_SOOTS; i++){

            if (i < 5) {
                STARTx[i]= 0;
            } else {
                STARTx[i]  = 700;
            }
            STARTy[i] = this.y[i];
        };

        console.log(this.y +" "+ this.x);

        const START_Vx = [];
        const START_Vy = [];

        for (let i = 0; i < NUM_SOOTS; i++){
            START_Vx[i] = 100;
            START_Vy[i] = 100;
        };

        this.velocityx = [];
        this.velocityy = [];

        for (let i = 0; i < NUM_SOOTS; i++) {
            this.velocityx[i] = START_Vx[i];
            this.velocityy[i] = START_Vy[i];
        };

    };

    loadAnimations() {
        this.animations = [];
        this.animations[0] = new Animator(this.spritesheet, 0, 0, 100, 100, 6, .1, 14, false, true);
        this.animations[1] = new Animator(this.spritesheet_aura, 0, 0, 100, 100, 6, .1, 14, false, true);
        this.animations[2] = new Animator(this.spritesheet_aura2, 0, 0, 100, 100, 6, .1, 14, false, true);

        this.animations[3] = new Animator(this.spritesheet_aura2, 0, 125, 100, 100, 6, .1, 14, false, true);
        this.animations[4] = new Animator(this.spritesheet_aura2, 0, 125, 100, 100, 6, .1, 14, false, true);
        this.animations[5] = new Animator(this.spritesheet_aura2, 0, 125, 100, 100, 6, .1, 14, false, true);

    }

    // this is set to move the piece across the screen
    update() {
        const NUM_SOOTS = 6; // must be an even number
        const NUM_SOOTS_HALF = NUM_SOOTS / 2;
        const STOP_FALL = [];
        const STOP_FALL_A = [];

        for(let i = 0; i < NUM_SOOTS; i++ ) {
            STOP_FALL[i] = 240;
            STOP_FALL_A[i] = 240;
        }

        let curFrame = this.animations[0].currentFrame(); // determines the current frame

        for(let i = 0; i < NUM_SOOTS; i++){

            if (i < NUM_SOOTS_HALF){     // soots moving left to right

                if(curFrame < 3 && this.x[i] < 800) {
                    this.velocityy[i] -= (STOP_FALL[i] - STOP_FALL_A[i]) * this.game.clockTick;
                    this.x[i] += this.velocityx[i] * this.game.clockTick;
                    this.y[i] -= this.velocityy[i] * this.game.clockTick;
                }
                else if (curFrame  >= 3 && curFrame < 6 && this.x[i] < 800) {
                    this.velocityy[i] += (STOP_FALL[i] - STOP_FALL_A[i]) * this.game.clockTick;
                    this.x[i] += this.velocityx[i] * this.game.clockTick;
                    this.y[i] += this.velocityy[i] * this.game.clockTick;
                }
                else if (this.x[i] >= 700) {
                    this.x[i] = 0;

                }
                else {
                    this.y[i] = this.STARTy[i];
                    this.velocityy[i] = this.START_Vy[i];
                }

            } else {        // soots moving right to left
                if(curFrame < 3 && this.x[i] >= 0) {
                    this.velocityy[i] -= (STOP_FALL[i] - STOP_FALL_A[i]) * this.game.clockTick;
                    this.x[i] -= this.velocityx[i] * this.game.clockTick;
                    this.y[i] -= this.velocityy[i] * this.game.clockTick;
                }
                else if (curFrame  >= 3 && curFrame < 6 && this.x[i] >= 0) {
                    this.velocityy[i] += (STOP_FALL[i] - STOP_FALL_A[i]) * this.game.clockTick;
                    this.x[i] -= this.velocityx[i] * this.game.clockTick;
                    this.y[i] += this.velocityy[i] * this.game.clockTick;
                }
                else if (this.x[i] < 0) {
                    this.x[i] = 800;
                }
                else {
                    this.y[i] = this.STARTy[i];
                    this.velocityy[i] = this.START_Vy[i];
                }
            }
        }

    };

    draw(ctx) {
        const NUM_SOOTS = 6;
        const NUM_SOOTS_HALF = 3;

        for(let i = 0; i < NUM_SOOTS_HALF; i++) {
            this.animations[i].drawFrame(this.game.clockTick, ctx, this.x[i], this.y[i], 1.5);
        }
        let size = .1;
        for(let i = NUM_SOOTS_HALF; i < NUM_SOOTS; i++) {
            this.animations[i].drawFrame(this.game.clockTick, ctx, this.x[i], this.y[i], size);
            size += .1
        }

    };

};