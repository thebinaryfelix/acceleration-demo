class Canvas {
  constructor(container, canvas) {
    this.board = canvas;
    this.ctx = this.board.getContext('2d');
    this.board.width = container.offsetWidth;
    this.board.height = FLOOR;
    this.spheres = [];

    this.graphicX = 100;
    this.graphicY = this.board.height - 5;
  }

  clearBoard() {
    this.ctx.clearRect(0, 0, this.board.width, this.board.height);
  }

  createSphere(posX, posY, radius, acc) {
    this.spheres.push(new Sphere(this.board, posX, posY, radius, acc));
  }

  drawLine(initialX, initialY, finalX, finalY) {
    this.ctx.beginPath();
    this.ctx.moveTo(initialX, initialY);
    this.ctx.lineTo(finalX, finalY);
    this.ctx.stroke();
  }

  draw() {
    // draw floor
    this.drawLine(0, FLOOR, this.board.width, FLOOR);

    // draw Spheres
    if (this.spheres.length !== 0) {
      this.spheres.forEach(sphere => sphere.draw());
    }
  }

  move() {
    // move Spheres
    if (this.spheres.length !== 0) {
      this.spheres.forEach(sphere => sphere.move());
    }
  }

  updateBoard() {
    this.draw();
    this.move();
  }

  startAnimation() {
    setInterval(() => {
      this.clearBoard();
      this.updateBoard();
    }, TIME_DELTA);
  }
}
