/*
 * We will add a bunch of these classes.
 */

class Soot {
    constructor( game, x, y ) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/soot-jump-long.png");
        this.spritesheet_aura = ASSET_MANAGER.getAsset("./sprites/soot-jump-long_aura.png");
        this.spritesheet_aura2 = ASSET_MANAGER.getAsset("./sprites/soot-jump-long_aura2.png");
        this.loadAnimations();

        // Constants for the x and y 
        const STARTx = [];
        const STARTy = [];
        let temp = 0;
        // initialize x1, x2, x3; y1, y2, y3
        this.x = [];
        this.y = [];

        for (let i = 0; i < 10; i++){
            STARTx[i] = this.x[i] = 0;
            STARTy[i] = this.y[i] = temp;
            temp = temp + 200;
        };

        const START_Vx = [];
        const START_Vy = [];

        temp = 50;
        let temp1 = 100;

        for (let i = 0; i < 10; i++){
            START_Vx[i] = temp;
            START_Vy[i] = temp1;
            temp += 50;
            temp1 += 100;
        };

        this.velocity = {   x1: START_Vx[0], y1: START_Vy[0], 
                            x2: START_Vx[1], y2: START_Vy[1], 
                            x3: START_Vx[2], y3: START_Vy[2], 
                            x4: START_Vx[3], y4: START_Vy[3], 
                            x5: START_Vx[4], y5: START_Vy[4], 
                            x6: START_Vx[5], y6: START_Vy[5], 
                            x7: START_Vx[6], y7: START_Vy[6], 
                            x8: START_Vx[7], y8: START_Vy[7], 
                            x9: START_Vx[8], y9: START_Vy[8], 
                            x10: START_Vx[9], y10: START_Vy[9]
        };

    };

    loadAnimations() {
        this.animations = [];
        this.animations[0] = new Animator(this.spritesheet, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[1] = new Animator(this.spritesheet_aura, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[2] = new Animator(this.spritesheet_aura2, 0, 0, 100, 200, 6, .1, 15, false, true);

        this.animations[3] = new Animator(this.spritesheet, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[4] = new Animator(this.spritesheet_aura, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[5] = new Animator(this.spritesheet_aura2, 0, 0, 100, 200, 6, .1, 15, false, true);

        this.animations[6] = new Animator(this.spritesheet, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[7] = new Animator(this.spritesheet_aura, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[8] = new Animator(this.spritesheet_aura2, 0, 0, 100, 200, 6, .1, 15, false, true);

        this.animations[9] = new Animator(this.spritesheet, 0, 0, 100, 200, 6, .1, 15, false, true);
    }

    // this is set to move the piece across the screen
    update() {

        const STOP_FALL_1 = 500;
        const STOP_FALL_A1 = 500;

        const STOP_FALL_2 = 200;
        const STOP_FALL_A2 = 200;

        const STOP_FALL_3 = 200;
        const STOP_FALL_A3 = 200;

   
        let curFrame = this.animations[1].currentFrame(); // determines the current frame

        if(curFrame < 3 && this.x[0] < 800) {
            this.velocity.y1 -= (STOP_FALL_1 - STOP_FALL_A1) * this.game.clockTick;
            this.x[0] += this.velocity.x1 * this.game.clockTick;
            this.y[0] -= this.velocity.y1 * this.game.clockTick;
        } 
        else if (curFrame >= 3 && curFrame < 6 && this.x[0] < 800) {
            this.velocity.y1 += (STOP_FALL_1 - STOP_FALL_A1) * this.game.clockTick;
            this.x[0] += this.velocity.x1 * this.game.clockTick;
            this.y[0] += this.velocity.y1 * this.game.clockTick;
        } 
        else if (this.x[0] >= 700) {
            this.x[0] = 0;
        }
        else {
            this.y[0] = this.STARTy[0];
            this.velocity.y1 = this.START_Vy[0];
        } 

        if(curFrame < 3 && this.x[1] < 800) {
            this.velocity.y2 -= (STOP_FALL_2 - STOP_FALL_A2) * this.game.clockTick;
            this.x[1] += this.velocity.x2 * this.game.clockTick;
            this.y[1] -= this.velocity.y2 * this.game.clockTick;
        } 
        else if (curFrame >= 3 && curFrame < 6 && this.x[1] < 800) {
            this.velocity.y2 += (STOP_FALL_2 - STOP_FALL_A2) * this.game.clockTick;
            this.x[1] += this.velocity.x2 * this.game.clockTick;
            this.y[1] += this.velocity.y2 * this.game.clockTick;
        } 
        else if (this.x[1] >= 700) {
            this.x[1] = 0;
        }
        else {
            this.y[1] = this.STARTy[1];
            this.velocity.y2 = this.START_Vy[1];
        }

        if(curFrame < 3 && this.x[2] < 800) {
            this.velocity.y3 -= (STOP_FALL_3 - STOP_FALL_A3) * this.game.clockTick;
            this.x[2] += this.velocity.x3 * this.game.clockTick;
            this.y[2] -= this.velocity.y3 * this.game.clockTick;
        } 
        else if (curFrame >= 3 && curFrame < 6 && this.x[2] < 800) {
            this.velocity.y3 += (STOP_FALL_2 - STOP_FALL_A2) * this.game.clockTick;
            this.x[2] += this.velocity.x3 * this.game.clockTick;
            this.y[2] += this.velocity.y3 * this.game.clockTick;
        } 
        else if (this.x[2] >= 700) {
            this.x[2] = 0;
        }
        else {
            this.y[2] = this.STARTy[2];
            this.velocity.y3 = this.START_Vy[2];
        }

        console.log(this.y[0] + " " + this.y[1]+ " " + this.y[2])
    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, this.x1, this.y1, 1);
        this.animations[1].drawFrame(this.game.clockTick, ctx, this.x2, this.y2, 1);
        this.animations[2].drawFrame(this.game.clockTick, ctx, this.x3, this.y3, 1);
    };

};