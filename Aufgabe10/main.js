var seaworld_animation;
(function (seaworld_animation) {
    window.addEventListener("load", init);
    let imgData;
    //Arrays 
    let fishArray = [];
    let bubblesArray = [];
    //Variablen für Anzahl der Fische
    let n = 4;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        seaworld_animation.crc2 = canvas.getContext("2d");
        // Hintergrund für das gesamte 1200*900 Canvas Feld
        seaworld_animation.crc2.fillStyle = "rgba(0,0,500,0.7)";
        // Koordinaten für das gesamte Fläche für Canvas
        seaworld_animation.crc2.fillRect(0, 0, 1200, 800);
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
        imgData = seaworld_animation.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // Animationsfeld Fisch
        for (let i = 0; i < n; i++) {
            let fish = new seaworld_animation.fishClass();
            fish.x = Math.random() * seaworld_animation.crc2.canvas.width;
            fish.y = Math.random() * 300; // Bis zu welcher Höhe dürfen die Fische erscheinen
            fishArray.push(fish);
        }
        // Animationsfeld Bubbles
        for (let i = 0; i < 17; i++) {
            let bubbles = new seaworld_animation.bubbleClass();
            bubbles.x = Math.random() * (800 - 400) + 650;
            bubbles.y = Math.random() * 700;
            bubbles.radius = Math.random() * 15;
            bubblesArray.push(bubbles);
        }
        animate();
    }
    // ständiges Neu laden der Seite
    function animate() {
        window.setTimeout(animate, 10);
        seaworld_animation.crc2.putImageData(imgData, 0, 0);
        drawObjects();
        moveObjects();
    }
    // function draw
    function drawObjects() {
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].draw();
        }
        for (let i = 0; i < bubblesArray.length; i++) {
            bubblesArray[i].draw();
        }
    }
    // function move
    function moveObjects() {
        for (let i = 0; i < fishArray.length; i++) {
            fishArray[i].move();
        }
        for (let i = 0; i < bubblesArray.length; i++) {
            bubblesArray[i].move();
        }
    }
    function drawStones(_x, _y) {
        seaworld_animation.crc2.beginPath();
        seaworld_animation.crc2.fillStyle = "rgb(140, 140, 140)";
        seaworld_animation.crc2.moveTo(_x, _y);
        seaworld_animation.crc2.lineTo(_x, _y - 40);
        seaworld_animation.crc2.lineTo(_x + 20, _y - 80);
        seaworld_animation.crc2.lineTo(_x + 80, _y - 90);
        seaworld_animation.crc2.lineTo(_x + 150, _y - 100);
        seaworld_animation.crc2.lineTo(_x + 200, _y - 70);
        seaworld_animation.crc2.lineTo(_x + 300, _y - 40);
        seaworld_animation.crc2.lineTo(_x + 325, _y + 0);
        seaworld_animation.crc2.lineTo(_x, _y);
        seaworld_animation.crc2.closePath();
        seaworld_animation.crc2.stroke();
        seaworld_animation.crc2.fill();
    }
    function drawSand(_x, _y) {
        seaworld_animation.crc2.fillStyle = "#c2b280"; //Farbe vom Sand
        //Sand zeichnen beginnen
        seaworld_animation.crc2.beginPath();
        seaworld_animation.crc2.moveTo(0, 600);
        //Kurven
        seaworld_animation.crc2.quadraticCurveTo(150, 700, 300, 600);
        seaworld_animation.crc2.quadraticCurveTo(450, 650, 600, 600);
        //LineTo erstellen einer Fläche
        seaworld_animation.crc2.lineTo(1200, 800);
        seaworld_animation.crc2.lineTo(0, 800);
        seaworld_animation.crc2.closePath();
        //Linien auffüllen
        seaworld_animation.crc2.stroke();
        seaworld_animation.crc2.fill();
    }
    function drawSeaweed(_x, _y) {
        seaworld_animation.crc2.fillStyle = "#088A4B";
        seaworld_animation.crc2.beginPath();
        seaworld_animation.crc2.moveTo(_x, _y);
        seaworld_animation.crc2.quadraticCurveTo(_x - 10, _y - 30, _x, _y - 60);
        seaworld_animation.crc2.quadraticCurveTo(_x + 10, _y - 80, _x, _y - 100);
        seaworld_animation.crc2.quadraticCurveTo(_x + 10, _y - 100, _x + 10, _y - 80);
        seaworld_animation.crc2.quadraticCurveTo(_x, _y - 25, _x + 10, _y);
        seaworld_animation.crc2.closePath();
        seaworld_animation.crc2.stroke();
        seaworld_animation.crc2.fill();
    }
    function drawStar(_x, _y) {
        seaworld_animation.crc2.fillStyle = "#F446C8";
        seaworld_animation.crc2.beginPath();
        seaworld_animation.crc2.moveTo(_x, _y);
        seaworld_animation.crc2.lineTo(_x + 15, _y + 35);
        seaworld_animation.crc2.lineTo(_x - 20, _y + 15);
        seaworld_animation.crc2.lineTo(_x + 20, _y + 15);
        seaworld_animation.crc2.lineTo(_x - 15, _y + 35);
        seaworld_animation.crc2.closePath();
        seaworld_animation.crc2.fill();
    }
})(seaworld_animation || (seaworld_animation = {}));
//# sourceMappingURL=main.js.map