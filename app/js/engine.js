
class Engine {
  
  constructor(time_step, update, render) {
    this.accumulated_time = 0; // Amount of time that's accumulated since the last update.
    this.animation_frame_request = undefined, // reference to the AFR
    this.time = undefined, // The most recent timestamp of loop execution.
    this.time_step = time_step, // 1000/30 = 30 frames per second
    this.updated = false; // Whether or not the update function has been called since the last cycle.
    this.update = update; // The update function
    this.render = render; // The render function
  }

  run(time_stamp) {
    this.accumulated_time += time_stamp - this.time;
    this.time = time_stamp;

    if (this.accumulated_time >= this.time_step * 3) {
      this.accumulated_time = this.time_step;
    }

    while (this.accumulated_time >= this.time_step) {
      this.accumulated_time -= this.time_step;
      this.update(time_stamp);
      this.updated = true; 
    }

    if (this.updated) {
      this.updated = false;
      this.render(time_stamp);
    }
    this.animation_frame_request = window.requestAnimationFrame(this.handleRun);
  };
  
  handleRun = time_step => { 
    this.run(time_step); 
  };

  start() {

    this.accumulated_time = this.time_step;
    this.time = window.performance.now();
    this.animation_frame_request = window.requestAnimationFrame(this.handleRun);

  }

  stop() {

    window.cancelAnimationFrame(this.animation_frame_request); 
  
  }

}

module.exports = Engine