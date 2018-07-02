namespace seaworld_inheratance {
    
    export class flakeClass extends movingobjects {
        r: number;
      
        constructor(_x:number, _y:number) {
            super(_x, _y);
            
            }
        
        draw() : void {
        crc2.fillStyle = "#B45F04";
        
        crc2.beginPath();
        crc2.arc (this.x, this.y, this.r, 0, 2*Math.PI); //Formel um runde Objekte zu erzeugen in der maximalen Größe aus der for-Schleife
        crc2.closePath();
              
        crc2.stroke();
        crc2.fill();
            }
        
        
        move(): void {
            this.y += 2; //Geschwindigkeit des fallenden Essens
            if (this.y > 740) {
                this.y = 740;
            }

        }
        
        
        
        } // Class Ende
    }