namespace Aufgabe9UnterwasserWelt {
    window.addEventListener("load", init);
    
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
       
        // Hintergrund für das gesamte 1200*900 Canvas Feld
        
        crc2.fillStyle = "rgba(0,0,500,0.7)";
        // Koordinaten für das gesamte Fläche für Canvas
        crc2.fillRect(0,0,1200,800);
        
        
        
        //Sand zeichnen
        drawSand(0,0);
        
        //Fische zeichnen
        for (let i: number = 0; i<4; i++) {
            let x : number = Math.random() * (crc2.canvas.width-50);
            let y: number = Math.random() * 500;
            drawFish(x,y);
            }

        //Grashalme zeichnen
        drawSeaweed(1000,750);
        drawSeaweed(950,735);
        drawSeaweed(900,720);
        drawSeaweed(850,705);
        drawSeaweed(800,690);
        drawSeaweed(750,660);
        drawSeaweed(700,645);
        drawSeaweed(650,630);
        
        
        //Seestern zeichnen
        drawStar(100, 700);
        drawStar(200, 650);
        drawStar(220, 700);
        
        drawStones(400, 800);
        
        //Luftblasen zeichnen
        for (let i:number = 0; i < 15; i++) {
            let x: number = Math.random () * (1200-50) + 0; //Gibt an, wo auf der x-Achse die Blasen sind. +300 ist eine Konstante Stelle. (600-200) gibt den Bereich an.
            let y : number = Math.random () * 630; //y-Koordinate: von wo bis wo die Blasen wandern können
            let z : number = Math.random() * 20; // z lässt Blasen in einer bestimmten Größe entstehen
            
            drawBubble(x,y,z);
            }
        
       
    }
        
     function drawStones(_x : number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(140, 140, 140)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 40);
        crc2.lineTo(_x + 20, _y -80);
        crc2.lineTo(_x + 80, _y -90);
        crc2.lineTo(_x + 150, _y -100);
        crc2.lineTo(_x +200, _y -70);
        crc2.lineTo(_x +300, _y -40);
        crc2.lineTo(_x +325, _y +0)
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
      }    
    
    function drawSand(_x:number, _y:number) : void {
        crc2.fillStyle = "#c2b280"; //Farbe vom Sand
        
        //Sand zeichnen beginnen
        crc2.beginPath();
        crc2.moveTo(0,600);
        //Kurven
        crc2.quadraticCurveTo(150,700,300,600); 
        crc2.quadraticCurveTo(450,650,600, 600);
        
        //LineTo erstellen einer Fläche
        crc2.lineTo(1200,800);
        crc2.lineTo(0,800);
        crc2.closePath();

        
        //Linien auffüllen
        crc2.stroke();
        crc2.fill();
        }
    
    function drawSeaweed(_x:number, _y:number) : void {
        crc2.fillStyle = "#088A4B";
        
        crc2.beginPath();
        crc2.moveTo (_x, _y);
        crc2.quadraticCurveTo(_x-10,_y-30,_x,_y-60);
        crc2.quadraticCurveTo(_x+10,_y-80,_x,_y-100);
        crc2.quadraticCurveTo(_x+10, _y-100, _x+10, _y-80);
        crc2.quadraticCurveTo(_x, _y-25, _x+10, _y);
        crc2.closePath();
        
        
        crc2.stroke();
        crc2.fill();
        }
    
    
    function drawFish (_x:number, _y:number) : void {
        crc2.fillStyle = "#32Cd32 ";
        
        crc2.beginPath();
        crc2.moveTo(_x,_y);
        crc2.quadraticCurveTo(_x+50, _y-70, _x+100, _y);
        crc2.lineTo(_x+130, _y+30);
        crc2.lineTo(_x+130, _y-30);
        crc2.lineTo(_x+100, _y);
        crc2.quadraticCurveTo(_x+60, _y+60, _x, _y);
        
        
        crc2.stroke();
        crc2.fill();
        }

    function drawStar(_x: number, _y:number) : void {
        crc2.fillStyle ="#F446C8";
        
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x+15, _y+35);
        crc2.lineTo(_x-20, _y+15);
        crc2.lineTo(_x+20, _y+15);
        crc2.lineTo(_x-15, _y+35);
        crc2.closePath();
        
       
        crc2.fill();
        }
    
    
    function drawBubble(_x:number, _y:number, _bubbleSize:number) : void { 
        crc2.fillStyle = "#fbbce7";
        
        crc2.beginPath();
        crc2.arc (_x, _y, _bubbleSize, 0, 3*Math.PI); 
        crc2.closePath();
        
        
        crc2.stroke();
        crc2.fill();
        }

}
