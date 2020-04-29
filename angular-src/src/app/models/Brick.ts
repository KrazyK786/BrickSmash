export class Brick {
  private x: any;
  private y: any;
  private status: any;
  private height: any;
  private width: any;
  private brickPadding: number;
  private brickOffsetTop: number;
  private brickOffsetLeft: number;
  private color: string;


  constructor(private ctx: CanvasRenderingContext2D,
              x,
              y) {
    this.x = x;
    this.y = y;
    this.spawn();
  }
  //testingggg
  // this.velocity = {
  //   x: Math.random() * (5-2) + 2,
  //   y: -Math.random() * (5-2) - 2
  // };

  private spawn(): void{
    this.color = 'green';
    this.status = 1;
    this.height = 20;
    this.width = 75;

    this.brickPadding = 10;
    this.brickOffsetTop = 30;
    this.brickOffsetLeft = 30;
  }

  draw(): void{
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.closePath();

  }

  update(): void{
    if (this.status == 1){
      this.draw();

    }
    // collisionDetection(this,ball);
  }
}
