var seaworld_inheratance;
(function (seaworld_inheratance) {
    window.addEventListener("load", init);
    let movingobjects = [];
    let n = 6; //Zählvariable für Fische
    function init(_event) {
        seaworld_inheratance.canvas = document.getElementsByTagName("canvas")[0];
        seaworld_inheratance.crc2 = seaworld_inheratance.canvas.getContext("2d");
        seaworld_inheratance.drawBackground();
        seaworld_inheratance.imgData = seaworld_inheratance.crc2.getImageData(0, 0, seaworld_inheratance.canvas.width, seaworld_inheratance.canvas.height);
        seaworld_inheratance.canvas.addEventListener("click", insertFlakes);
        // Fische erstellen
        for (let i = 0; i < n; i++) {
            let fish = new seaworld_inheratance.Fish(Math.random() * seaworld_inheratance.crc2.canvas.width, Math.random() * seaworld_inheratance.crc2.canvas.height);
            movingobjects.push(fish);
        }
        // Luftblasen erstellen
        for (let i = 0; i < 17; i++) {
            let bubbles = new seaworld_inheratance.Bubbles(Math.random() * (300 - 10) + 400, Math.random() * 180);
            bubbles.radius = Math.random() * 10;
            movingobjects.push(bubbles);
        }
        animate();
    } // Ende init
    function animate() {
        window.setTimeout(animate, 10);
        seaworld_inheratance.crc2.putImageData(seaworld_inheratance.imgData, 0, 0);
        drawObjects();
        moveObjects();
    }
    function drawObjects() {
        for (let i = 0; i < movingobjects.length; i++) {
            movingobjects[i].draw();
        }
    }
    function moveObjects() {
        for (let i = 0; i < movingobjects.length; i++) {
            movingobjects[i].move();
        }
    }
    // Futter  
    function insertFlakes(_event) {
        let _x = _event.pageX;
        let _y = _event.pageY;
        let flake = new seaworld_inheratance.flakeClass(_x, _y);
        flake.r = Math.random() * 5;
        movingobjects.push(flake);
    }
})(seaworld_inheratance || (seaworld_inheratance = {}));
//# sourceMappingURL=main.js.map