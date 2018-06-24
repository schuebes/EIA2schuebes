var seaworld_animation;
(function (seaworld_animation) {
    class bubbleClass {
        //Methode 1 - Zeichnen
        draw() {
            seaworld_animation.crc2.fillStyle = "#fbbce7";
            seaworld_animation.crc2.beginPath();
            seaworld_animation.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI); //Formel um runde Objekte zu erzeugen in der maximalen Größe aus der for-Schleife
            seaworld_animation.crc2.closePath();
            seaworld_animation.crc2.stroke();
            seaworld_animation.crc2.fill();
        }
        //Methode 2 - Bewegen
        move() {
            this.x -= 0.1;
            this.y -= 1;
            if (this.y < -5) {
                this.y = 600;
            }
        }
    }
    seaworld_animation.bubbleClass = bubbleClass;
})(seaworld_animation || (seaworld_animation = {}));
//# sourceMappingURL=bubbles.js.map