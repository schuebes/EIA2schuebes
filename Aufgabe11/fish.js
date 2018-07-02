var seaworld_inheratance;
(function (seaworld_inheratance) {
    class Fish extends seaworld_inheratance.movingobjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            seaworld_inheratance.crc2.fillStyle = "#32Cd32";
            seaworld_inheratance.crc2.beginPath();
            seaworld_inheratance.crc2.moveTo(this.x, this.y);
            seaworld_inheratance.crc2.quadraticCurveTo(this.x + 50, this.y - 70, this.x + 100, this.y);
            seaworld_inheratance.crc2.lineTo(this.x + 130, this.y + 30);
            seaworld_inheratance.crc2.lineTo(this.x + 130, this.y - 30);
            seaworld_inheratance.crc2.lineTo(this.x + 100, this.y);
            seaworld_inheratance.crc2.quadraticCurveTo(this.x + 50, this.y + 70, this.x, this.y);
            seaworld_inheratance.crc2.stroke();
            seaworld_inheratance.crc2.fill();
        }
        move() {
            this.x -= 1;
            this.y -= 0.2;
            if (this.x < -150) {
                this.x = seaworld_inheratance.crc2.canvas.width + 10;
            }
        }
    }
    seaworld_inheratance.Fish = Fish;
})(seaworld_inheratance || (seaworld_inheratance = {}));
//# sourceMappingURL=fish.js.map