class Game {
    constructor() {
        this.gameover = false;

        this.background = new Image();
        this.background.src = 'assets/sprites/background-day.png';
        
        this.base = new Image();
        this.base.src = 'assets/sprites/base.png';

        this.baseSx = 0;

        this.player = new Player();

        this.pipe = [];

        this.listener();
        this.drawBackground();
        this.generatePipe();
    }

    generatePipe() {
        setInterval(() => {
            this.pipe.push(new Pipe());
        }, 4000);
    }

    update() {
        this.checkCollision();

        ctx.clearRect(0, 0, w, h);

        this.baseSx += -2;

        if (this.baseSx <= -w) this.baseSx = 0;
        
        this.drawBackground();
        this.player.update();
        
        this.pipe.forEach((val, i) => {
            if (val.x <= -70) this.pipe.splice(i, 1);

            val.update();
        });
    }

    checkCollision() {
        for (let val of this.pipe) {
            if ((this.player.x <= val.x + val.width && this.player.x + this.player.width >= val.x && this.player.y <= 0 + val.y1 && this.player.y + this.player.height >= 0) || 
                (this.player.x <= val.x + val.width && this.player.x + this.player.width >= val.x && this.player.y <= h + val.y2 && this.player.y + this.player.height >= val.y2)) {
                this.gameover = true;
            }
        }
    }

    listener() {
        window.addEventListener('keyup', e => {
            if (e.keyCode == 32) {
                this.player.up();
            }
        });
    }

    drawBackground() {
        ctx.drawImage(this.background, 0, 0,w, h);
        ctx.drawImage(this.base, this.baseSx, h - 60, w, 100);
        ctx.drawImage(this.base, w + this.baseSx, h - 60, w, 100);
    }
}