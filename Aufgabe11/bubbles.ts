namespace seaworld_animation {
    
    export class bubbles extends movingobjects {
       radius: number;
        
        constructor (_x:number, _y:number) {
            super (_x, _y);
            }
        
        //Methode 1 - Zeichnen
        draw() : void {
        crc2.fillStyle = "#fbbce7";
        
        crc2.beginPath();
        crc2.arc (this.x, this.y, this.radius, 0, 2*Math.PI); 
        crc2.closePath();
              
        crc2.stroke();
        crc2.fill();
            }
        
        
        move() : void {
            this.x -= 0;
            this.y -= 2;
            
            if (this.y < -5) {
                this.y = 600;
                }
            }
        

        }
    
    
    }