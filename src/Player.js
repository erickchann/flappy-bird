class Player {
    constructor() {
        this.x = 20;
        this.y = h / 2;

        this.image = new Image();
        this.image.src = 'assets/sprites/yellowbird-midflap.png';

        this.width = 34;
        this.height = 24;

        this.gravity = 0.1;
        this.velocity = 0;
        this.lift = -4;

        this.update();
    }

    up() {
        this.velocity += this.lift;
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        
        if (this.y <= 5) {
            this.y = 5;
            this.velocity = 0;
        }

        if (this.y >= h - 25) {
            this.y = h - 25;
            this.velocity = 0;
        }

        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}