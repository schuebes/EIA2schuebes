var seaworld_animation;
(function (seaworld_animation) {
    class fishClass {
        draw() {
            seaworld_animation.crc2.fillStyle = "#32Cd32";
            seaworld_animation.crc2.beginPath();
            seaworld_animation.crc2.moveTo(this.x, this.y);
            seaworld_animation.crc2.quadraticCurveTo(this.x + 50, this.y - 70, this.x + 100, this.y);
            seaworld_animation.crc2.lineTo(this.x + 130, this.y + 30);
            seaworld_animation.crc2.lineTo(this.x + 130, this.y - 30);
            seaworld_animation.crc2.lineTo(this.x + 100, this.y);
            seaworld_animation.crc2.quadraticCurveTo(this.x + 50, this.y + 70, this.x, this.y);
            seaworld_animation.crc2.stroke();
            seaworld_animation.crc2.fill();
        }
        move() {
            this.x -= 1;
            this.y -= 0.2;
            if (this.x < -150) {
                this.x = seaworld_animation.crc2.canvas.width + 10;
            }
        }
    }
    seaworld_animation.fishClass = fishClass;
})(seaworld_animation || (seaworld_animation = {}));
//# sourceMappingURL=fish.js.map