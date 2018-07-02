var seaworld_animation;
(function (seaworld_animation) {
    class flakeClass extends seaworld_animation.MovingObjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            seaworld_animation.crc2.fillStyle = "#B45F04";
            seaworld_animation.crc2.beginPath();
            seaworld_animation.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI); //Formel um runde Objekte zu erzeugen in der maximalen Größe aus der for-Schleife
            seaworld_animation.crc2.closePath();
            seaworld_animation.crc2.stroke();
            seaworld_animation.crc2.fill();
        }
        move() {
            this.y += 2; //Geschwindigkeit des fallenden Essens
            if (this.y > 740) {
                this.y = 740;
            }
        }
    }
    seaworld_animation.flakeClass = flakeClass; // Class Ende
})(seaworld_animation || (seaworld_animation = {}));
//# sourceMappingURL=food.js.map