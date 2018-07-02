var seaworld_inheratance;
(function (seaworld_inheratance) {
    class flakeClass extends seaworld_inheratance.movingobjects {
        constructor(_x, _y) {
            super(_x, _y);
        }
        draw() {
            seaworld_inheratance.crc2.fillStyle = "#B45F04";
            seaworld_inheratance.crc2.beginPath();
            seaworld_inheratance.crc2.arc(this.x, this.y, this.r, 0, 2 * Math.PI); //Formel um runde Objekte zu erzeugen in der maximalen Größe aus der for-Schleife
            seaworld_inheratance.crc2.closePath();
            seaworld_inheratance.crc2.stroke();
            seaworld_inheratance.crc2.fill();
        }
        move() {
            this.y += 2; //Geschwindigkeit des fallenden Essens
            if (this.y > 740) {
                this.y = 740;
            }
        }
    }
    seaworld_inheratance.flakeClass = flakeClass; // Class Ende
})(seaworld_inheratance || (seaworld_inheratance = {}));
//# sourceMappingURL=food.js.map