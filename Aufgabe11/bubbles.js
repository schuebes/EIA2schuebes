var seaworld_animation;
(function (seaworld_animation) {
    class bubbles extends seaworld_animation.movingobjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        //Methode 1 - Zeichnen
        draw() {
            seaworld_animation.crc2.fillStyle = "#fbbce7";
            seaworld_animation.crc2.beginPath();
            seaworld_animation.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            seaworld_animation.crc2.closePath();
            seaworld_animation.crc2.stroke();
            seaworld_animation.crc2.fill();
        }
        move() {
            this.x -= 0;
            this.y -= 2;
            if (this.y < -5) {
                this.y = 600;
            }
        }
    }
    seaworld_animation.bubbles = bubbles;
})(seaworld_animation || (seaworld_animation = {}));
//# sourceMappingURL=bubbles.js.map