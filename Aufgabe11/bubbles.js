var seaworld_inheratance;
(function (seaworld_inheratance) {
    class Bubbles extends seaworld_inheratance.movingobjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        //Methode 1 - Zeichnen
        draw() {
            seaworld_inheratance.crc2.fillStyle = "#fbbce7";
            seaworld_inheratance.crc2.beginPath();
            seaworld_inheratance.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            seaworld_inheratance.crc2.closePath();
            seaworld_inheratance.crc2.stroke();
            seaworld_inheratance.crc2.fill();
        }
        move() {
            this.x -= 0;
            this.y -= 2;
            if (this.y < -5) {
                this.y = 600;
            }
        }
    }
    seaworld_inheratance.Bubbles = Bubbles;
})(seaworld_inheratance || (seaworld_inheratance = {}));
//# sourceMappingURL=bubbles.js.map