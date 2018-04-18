namespace Aufgabe2MemoryGame {
    

 
    var cardcontent: string []=["Wald", "Berg", "Hügel", "Wiese", "Wanderweg", "Straße", "Fluss", "Bach", "Wasserfall", "Baum"];
    var card: string[]=[];
    var cardcharacter: string[]=["hidden", "taken", "visible"];
  
 //Karten
    
   function inputPairs() : number{
       
    let pairs : string = prompt("Mit wievielen KartenPaaren möchtet ihr spielen ? (Zwischen 5 und 10)");
    let pairSum : number = parseInt(pairs);
       if (isNaN(pairSum) || pairSum < 5 || pairSum > 10) {
        alert("FALSCH")
        inputPairs();    
    }
    
        else {
       
      
       console.log("inputPairs")
        
       console.log(pairSum);
       return pairSum;
           
    }
       }
 
    
    //Spieleranzahl
       function inputPlayer():number{
           let n : string = prompt ("Wieviele Spieler seid ihr (Zwischen 2 und 4 ?");
           let nSum : number = parseInt(n);
            if (isNaN(nSum) || nSum < 0 || nSum > 4) {
        alert("FALSCH")
        inputPlayer();    
    }
    
        else {
       
      
       console.log("inputPlayer")
        
    console.log(nSum);
       return nSum;
           
    }
     }      
   let amount :number =  inputPairs();
   let players : number = inputPlayer();
        
    console.log("Cardcontent", cardcontent.length);
    console.log("Content on Card", cardcontent);
    
   
    
    function shuffelAray(x:number): void {
        
        for (let i: number = 1; i <= x; i++) {
             
            
        var content : string = cardcontent[0];  
        card.push (content);
            card.push(content);
             
            var removed = cardcontent.splice(0, 1);
            
            
            
        }
    console.log("Content CardList", card);
   
    
    }
    
//    Erzeugen der Karten 
    
    function generateCards(y:number) : void{
        var node : any= document.getElementById("Game");
        var childNodeHTML : string;
        var i : number = 0;
        
        
        while (i < (y*2)) {
            let min: number = 0;
        let max: number = (card.length);
            var random:number=Math.floor(Math.random() * (max - min)) + min; 
            var classRandom : number= Math.floor(Math.random() * (3 - 0)) + 0;
            console.log("Card:" + i);
              console.log(random); 
          
            childNodeHTML = "<div  class='card' class='"; 
// Random Karten Auswahl
            childNodeHTML += cardcharacter[classRandom];
            childNodeHTML += "' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += card[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + card.length)
            var content : string = card[random]; 
            console.log ("classRandom: " + classRandom + ", " + cardcharacter[classRandom]);
             
            var removed = card.splice(random, 1);
            console.log(card);
            
            i++;
        }
    }
    function generatePlayers() : void{
        var node : any= document.getElementById("Gamer");
        var childNodeHTML : string;
        var i : number = 0;
        while (i < players) {
          
            childNodeHTML = "<div  class='player' id='Spieler" + i + "'>";
            childNodeHTML += "Player " + (i+1);
            childNodeHTML += "<p>";
            childNodeHTML += "0";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            i++;
        }
        }
// Hauptprogramm
    function main () : void {
        
         shuffelAray(amount);
        
       
        
        
         console.log("main");
        
// Cards erzeugen
         generateCards(amount);
         generatePlayers();
         }
    
    
    
    
    
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main); 
}