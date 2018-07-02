namespace seaworld_inheratance{
    
    window.addEventListener("load", init);
    export let crc2 : CanvasRenderingContext2D;
    let movingobjects: movingobjects[] = [];
    
   export let canvas: HTMLCanvasElement;
   export let imgData: ImageData;
    
    let n: number = 6; //Zählvariable für Fische
    
    

    function init (_event: Event): void {
        
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        
        drawBackground(); 
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        canvas.addEventListener("click", insertFlakes); 
        
        
        // Fische erstellen
        for (let i: number = 0; i < n; i++) {
            let fish : Fish = new Fish(Math.random() *crc2.canvas.width, Math.random()*crc2.canvas.height);
            movingobjects.push(fish);
        }
        
        
       // Luftblasen erstellen
       for (let i: number = 0; i < 17; i++) {
            let bubbles : Bubbles = new Bubbles(Math.random()* (300-10) + 400, Math.random() * 180);
            bubbles.radius = Math.random() *10;
            movingobjects.push(bubbles);
       }
        
        
       
        animate();
        
        
        } // Ende init
    
    
    function animate(): void {
        window.setTimeout(animate, 10);
        
        crc2.putImageData(imgData, 0, 0);
  
        
        drawObjects();
        moveObjects();
        
        }
    

    function drawObjects(): void {

        for (let i: number = 0; i < movingobjects.length; i++) {
            movingobjects[i].draw();
        }

    }
    
    
    function moveObjects(): void {
        for (let i: number = 0; i < movingobjects.length; i++) {
            movingobjects[i].move();
            }
        
        }
    
    
    // Futter  
    function insertFlakes(_event: MouseEvent): void {
        let _x: number = _event.pageX;
        let _y: number = _event.pageY;
        let flake: flakeClass = new flakeClass(_x, _y);
        flake.r = Math.random() * 5;
        movingobjects.push(flake);
        
        
        }
    
    
    
    
    }