namespace MemoryGameAufgabe2 {
    

    
    var cardcontent: string []=["Haus", "Kirche", "Berg", "Fluss", "Wald", "Hügel", "Straße", "Hütte", "Wasserfall", "Gasthaus", "Wanderweg"];
    var cardList: string[]=[];
  
    
    
   function getPairs() : number{
       
    let pairsquestion : string = prompt("Mit vielen Karten Paaren möchtest du spielen ? (mindestens 4 und maximum 11) Anzahl bitte eingeben.")
    let pairsinsert : number = parseInt(pairsquestion)
       
       return pairsinsert;
    }
       
   
    let amount :number =  getPairs();
   
        
    console.log(cardcontent.length);
    console.log(cardcontent);
    
    
    
    
    function shuffle(x:number): void {
        
        for (let i: number = 1; i <= x; i++) {
             
            
        var content : string = cardcontent[0];  
        cardList.push (content);
            cardList.push(content);
             
            var removed = cardcontent.splice(0, 1);
            
            
            
        }
    
        console.log(cardList);
   
    
    }
    
    
    
    function getcards(y:number) : void{
        var node : any= document.getElementById("game");
        var childNodeHTML : string;
        var i : number = 0;
        
        
        while (i < (y*2)) {
            let min: number = 0;
        let max: number = (cardList.length);
  
            var random:number=Math.floor(Math.random() * (max - min)) + min; 
            console.log("Card:" + i);
              console.log(random); 
          
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
                        var content : string = cardList[random];  
             
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            
            i++;
        }
    }
    
     
      
    // Hauptprogramm... Erzeugen des Games, der Karten
    function main () : void {
        
         shuffle(amount);
        
       
        
        
        console.log("main");
        
      
         getcards(amount);
        }
    
    
    
    
    
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main); 
}
