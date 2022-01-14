// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class Timer {
    constructor() {
        this.gameTime = 0; // keeps track of how much game time has passed
        this.maxStep = 0.05; // error checking to make sure that we don't have too large of a jump.
        this.lastTimestamp = 0; // keeps track of the last time that we updated
    };

    // The tick is one tick of the timer. 
    tick() {
        const current = Date.now();                             // time right now in milliseconds
        const delta = (current - this.lastTimestamp) / 1000;    // the elapsed time and convert to seconds
        this.lastTimestamp = current;                           // update the lastTimestamp

        const gameDelta = Math.min(delta, this.maxStep);        // make sure that the time isn't too big 
        this.gameTime += gameDelta;                             
        return gameDelta;                                       // return the how long it has been since the last update
    };
};
