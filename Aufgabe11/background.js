var seaworld_inheratance;
(function (seaworld_inheratance) {
    // Erstellen des Hintergrunds
    function drawBackground() {
        seaworld_inheratance.crc2.fillStyle = "rgb(135,206,235)";
        seaworld_inheratance.crc2.fillRect(0, 0, 1200, 900);
        //Sand zeichnen
        drawSand(0, 0);
        //Grashalme zeichnen
        drawSeaweed(1000, 750);
        drawSeaweed(950, 735);
        drawSeaweed(900, 720);
        drawSeaweed(850, 705);
        drawSeaweed(800, 690);
        drawSeaweed(750, 660);
        drawSeaweed(700, 645);
        drawSeaweed(650, 630);
        //Seestern zeichnen
        drawStar(100, 700);
        drawStar(200, 650);
        drawStar(220, 700);
        drawStones(400, 800);
        // imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
    }
    seaworld_inheratance.drawBackground = drawBackground;
    function drawStones(_x, _y) {
        seaworld_inheratance.crc2.beginPath();
        seaworld_inheratance.crc2.fillStyle = "rgb(140, 140, 140)";
        seaworld_inheratance.crc2.moveTo(_x, _y);
        seaworld_inheratance.crc2.lineTo(_x, _y - 40);
        seaworld_inheratance.crc2.lineTo(_x + 20, _y - 80);
        seaworld_inheratance.crc2.lineTo(_x + 80, _y - 90);
        seaworld_inheratance.crc2.lineTo(_x + 150, _y - 100);
        seaworld_inheratance.crc2.lineTo(_x + 200, _y - 70);
        seaworld_inheratance.crc2.lineTo(_x + 300, _y - 40);
        seaworld_inheratance.crc2.lineTo(_x + 325, _y + 0);
        seaworld_inheratance.crc2.lineTo(_x, _y);
        seaworld_inheratance.crc2.closePath();
        seaworld_inheratance.crc2.stroke();
        seaworld_inheratance.crc2.fill();
    }
    function drawSand(_x, _y) {
        seaworld_inheratance.crc2.fillStyle = "#c2b280"; //Farbe vom Sand
        //Sand zeichnen beginnen
        seaworld_inheratance.crc2.beginPath();
        seaworld_inheratance.crc2.moveTo(0, 600);
        //Kurven
        seaworld_inheratance.crc2.quadraticCurveTo(150, 700, 300, 600);
        seaworld_inheratance.crc2.quadraticCurveTo(450, 650, 600, 600);
        //LineTo erstellen einer Fläche
        seaworld_inheratance.crc2.lineTo(1200, 800);
        seaworld_inheratance.crc2.lineTo(0, 800);
        seaworld_inheratance.crc2.closePath();
        //Linien auffüllen
        seaworld_inheratance.crc2.stroke();
        seaworld_inheratance.crc2.fill();
    }
    function drawSeaweed(_x, _y) {
        seaworld_inheratance.crc2.fillStyle = "#088A4B";
        seaworld_inheratance.crc2.beginPath();
        seaworld_inheratance.crc2.moveTo(_x, _y);
        seaworld_inheratance.crc2.quadraticCurveTo(_x - 10, _y - 30, _x, _y - 60);
        seaworld_inheratance.crc2.quadraticCurveTo(_x + 10, _y - 80, _x, _y - 100);
        seaworld_inheratance.crc2.quadraticCurveTo(_x + 10, _y - 100, _x + 10, _y - 80);
        seaworld_inheratance.crc2.quadraticCurveTo(_x, _y - 25, _x + 10, _y);
        seaworld_inheratance.crc2.closePath();
        seaworld_inheratance.crc2.stroke();
        seaworld_inheratance.crc2.fill();
    }
    function drawStar(_x, _y) {
        seaworld_inheratance.crc2.fillStyle = "#F446C8";
        seaworld_inheratance.crc2.beginPath();
        seaworld_inheratance.crc2.moveTo(_x, _y);
        seaworld_inheratance.crc2.lineTo(_x + 15, _y + 35);
        seaworld_inheratance.crc2.lineTo(_x - 20, _y + 15);
        seaworld_inheratance.crc2.lineTo(_x + 20, _y + 15);
        seaworld_inheratance.crc2.lineTo(_x - 15, _y + 35);
        seaworld_inheratance.crc2.closePath();
        seaworld_inheratance.crc2.fill();
    }
})(seaworld_inheratance || (seaworld_inheratance = {}));
//# sourceMappingURL=background.js.map