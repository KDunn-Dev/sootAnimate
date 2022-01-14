/*
 * This is the same as the code from Dr. Marriott's EmptyGameEngine and SuperMarioBros.
 *
 */
class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop) {
        // copies all parameters into the object
        Object.assign(this, { spritesheet, xStart, yStart, height, width, frameCount, frameDuration, framePadding, reverse, loop }); 

        this.elapsedTime = 0; // how much time has elapsed since the animation started
        this.totalTime = this.frameCount * this.frameDuration; // calculates the total time that it will take for the animation to take place.

    };

    drawFrame(tick, ctx, x, y, scale) {
        // this will update the time by a tick
        // This will be used to determine which frame to draw the image in
        this.elapsedTime += tick;

        if(this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;

        if (this.isDone()) {
            if (this.loop) {
                this.elapsedTime -= this.totalTime;
            } else {
                return;
            }
        }

        // this will return the current frame
        let frame = this.currentFrame();
        if (this.reverse) frame = this.frameCount - frame - 1;
       
        // ctx.drawImage(this.spritesheet,... in and of itself will only draw one frame
        // draws the spritesheet
        ctx.drawImage(this.spritesheet,
            this.xStart + frame * (this.width + this.framePadding), this.yStart,    //source from sheet x & y
            this.width, this.height,                                                // source width and height
            x, y,                                                                   // destination x and y
            this.width * scale,                                                     // destination width and height of the image that is displayed.
            this.height * scale);

        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Green';
            ctx.strokeRect(x, y, this.width * scale, this.height * scale);
        }
    };

    // This tells you the current frame
    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration); 
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
};
