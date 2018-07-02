namespace seaworld_inheratance {
    
      export class Fish extends movingobjects {
        
        
        constructor (_x: number, _y:number) {
            super(_x, _y);
            }
        x: number;
        y: number;
        
        draw() : void {
        crc2.fillStyle = "#32Cd32";
        
        crc2.beginPath();
        crc2.moveTo(this.x,this.y);
        crc2.quadraticCurveTo(this.x+50, this.y-70, this.x+100, this.y);
        crc2.lineTo(this.x+130, this.y+30);
        crc2.lineTo(this.x+130, this.y-30);
        crc2.lineTo(this.x+100, this.y);
        crc2.quadraticCurveTo(this.x+50, this.y+70, this.x, this.y);
        
        crc2.stroke();
        crc2.fill();
        }
        
        move() : void {
            this.x -= 1;
            this.y -= 0.2;
            
            if (this.x < -150) {
                this.x=crc2.canvas.width+10;
                }
      
            }
            
 }
 }
