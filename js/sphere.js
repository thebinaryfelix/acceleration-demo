class Sphere {
  constructor(board, x = 10, y = 10, r = 10, acceleration) {
    this.board = board;
    this.ctx = board.getContext('2d');
    this.radius = r;
    this.x = x;
    this.y = y;
    this.speedY = 0;
    this.time = 0;
    this.accelerated = acceleration;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    this.ctx.fill();
  }

  move() {
    if (this.accelerated) {
      if (this.y + this.radius < this.board.height) {
        this.y += ((GRAVITY * Math.pow(this.time, 2)) / 2) / TIME_DELTA;
        this.time += 1;
        this.speedY += (GRAVITY * this.time) / TIME_DELTA;
      }
    } else if (this.y + this.radius < this.board.height) {
      this.speedY = 100;
      this.y += this.speedY / TIME_DELTA;
      this.time += 1 / TIME_DELTA;
    }
    if (this.y + this.radius > this.board.height) {
      this.y = this.board.height - this.radius;
    }
  }
}
