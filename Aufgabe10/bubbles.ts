namespace seaworld_animation {
    
    export class bubbleClass{
        x: number;
        y: number;
        radius: number;
        
        //Methode 1 - Zeichnen
        draw() : void {
        crc2.fillStyle = "#fbbce7";
        
        crc2.beginPath();
        crc2.arc (this.x, this.y, this.radius, 0, 2*Math.PI); //Formel um runde Objekte zu erzeugen in der maximalen Größe aus der for-Schleife
        crc2.closePath();
              
        crc2.stroke();
        crc2.fill();
            }
        
        //Methode 2 - Bewegen
        move() : void {
            this.x -= 0.1;
            this.y -= 1;
            
            if (this.y < -5) {
                this.y = 600;
                }
            }
        

        }
    
    
    }