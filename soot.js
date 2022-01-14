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

        // Constants
        const STARTX1 = 300;
        const STARTX2 = 200;
        const STARTX3 = 100;

        const STARTY1 = 300;
        const STARTY2 = 500;
        const STARTY3 = 100;

        // needed to move the piece across the screen
        this.x1 = STARTX1;
        this.x2 = STARTX2;
        this.x3 = STARTX3;

        this.y1 = STARTY1;
        this.y2 = STARTY2;
        this.y3 = STARTY3;

        const START_VX1 = 50;
        const START_VX2 = 100;
        const START_VX3 = 200;

        const START_VY1 = 100;
        const START_VY2 = 150;
        const START_VY3 = 250;

        this.velocity = { x1: START_VX1, y1: START_VY1, x2: START_VX2, y2: START_VY2, x3: START_VX3, y3: START_VY3  }; // number of pixels per second velocity

    };

    loadAnimations() {
        this.animations = [];
/*        for (let i = 0; i < 3; i++) {
            this.animations[i] = new Animator(spritesheet, 0, 0, 100, 200, 6, .1, 15, false, true);
        }
*/
        this.animations[0] = new Animator(this.spritesheet, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[1] = new Animator(this.spritesheet_aura, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[2] = new Animator(this.spritesheet_aura2, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[0] = new Animator(this.spritesheet, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[1] = new Animator(this.spritesheet_aura, 0, 0, 100, 200, 6, .1, 15, false, true);
        this.animations[2] = new Animator(this.spritesheet_aura2, 0, 0, 100, 200, 6, .1, 15, false, true);

    }

    // this is set to move the piece across the screen
    update() {

        const STOP_FALL_1 = 500;
        const STOP_FALL_A1 = 500;

        const STOP_FALL_2 = 200;
        const STOP_FALL_A2 = 200;

        const STOP_FALL_3 = 200;
        const STOP_FALL_A3 = 200;

        console.log(this.y1);
        console.log(this.y2);
        console.log(this.y3);
    
        let curFrame = this.animations[1].currentFrame(); // determines the current frame

        if(curFrame < 3 && this.x1 < 800) {
            this.velocity.y1 -= (STOP_FALL_1 - STOP_FALL_A1) * this.game.clockTick;
            this.x1 += this.velocity.x1 * this.game.clockTick;
            this.y1 -= this.velocity.y1 * this.game.clockTick;
        } 
        else if (curFrame >= 3 && curFrame < 6 && this.x1 < 800) {
            this.velocity.y1 += (STOP_FALL_1 - STOP_FALL_A1) * this.game.clockTick;
            this.x1 += this.velocity.x1 * this.game.clockTick;
            this.y1 += this.velocity.y1 * this.game.clockTick;
        } 
        else if (this.x1 > 700) {
            this.x1 = this.STARTX1;
        }
        else {
            this.y1 = this.STARTY1;
            this.velocity.y1 = this.START_VY1;
        } 

        if(curFrame < 3 && this.x2 < 800) {
            this.velocity.y2 -= (STOP_FALL_2 - STOP_FALL_A2) * this.game.clockTick;
            this.x2 += this.velocity.x2 * this.game.clockTick;
            this.y2 -= this.velocity.y2 * this.game.clockTick;
        } 
        else if (curFrame >= 3 && curFrame < 6 && this.x2 < 800) {
            this.velocity.y2 += (STOP_FALL_2 - STOP_FALL_A2) * this.game.clockTick;
            this.x2 += this.velocity.x2 * this.game.clockTick;
            this.y2 += this.velocity.y2 * this.game.clockTick;
        } 
        else if (this.x2 > 700) {
            this.x2 = this.STARTX2;
        }
        else {
            this.y2 = this.STARTY2;
            this.velocity.y2 = this.START_VY2;
        }

        if(curFrame < 3 && this.x3 < 800) {
            this.velocity.y3 -= (STOP_FALL_3 - STOP_FALL_A3) * this.game.clockTick;
            this.x3 += this.velocity.x3 * this.game.clockTick;
            this.y3 -= this.velocity.y3 * this.game.clockTick;
        } 
        else if (curFrame >= 3 && curFrame < 6 && this.x3 < 800) {
            this.velocity.y3 += (STOP_FALL_2 - STOP_FALL_A2) * this.game.clockTick;
            this.x3 += this.velocity.x3 * this.game.clockTick;
            this.y3 += this.velocity.y3 * this.game.clockTick;
        } 
        else if (this.x3 > 700) {
            this.x3 = this.STARTX3;
        }
        else {
            this.y3 = this.STARTY3;
            this.velocity.y3 = this.START_VY3;
        }
       

    };

    draw(ctx) {
        this.animations[0].drawFrame(this.game.clockTick, ctx, this.x1, this.y1, 1);
        this.animations[1].drawFrame(this.game.clockTick, ctx, this.x2, this.y2, 1);
        this.animations[2].drawFrame(this.game.clockTick, ctx, this.x3, this.y3, 1);
    };

};