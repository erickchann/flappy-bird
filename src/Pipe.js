class Pipe {
    constructor() {
        this.y1 = ~~(Math.random() * (h / 1.5) + 100);
        this.y2 = this.y1 + ~~((Math.random() * 50) + 100);

        this.x = w + 10;

        this.width = 55;

        this.image1 = new Image();
        this.image1.src = 'assets/sprites/pipe-green.png';

        this.image2 = new Image();
        this.image2.src = 'assets/sprites/pipe-green-rotate.png';

        this.update();
        this.draw();
    }

    update() {
        this.x += -1;
        
        this.draw();
    }

    draw() {
        ctx.drawImage(this.image1, this.x, this.y2, this.width, h);
        ctx.drawImage(this.image2, this.x, 0, this.width, this.y1);
    }
}