//Unten wird ein Fehler angezeigt....dadurch wird das neue TypeScript nicht umgewandelt. Ich finde den Fehler aber nicht.




namespace Aufgabe2MemoryGame {
    

 
    var cardcontent: string []=["Wald", "Berg", "Sarah", "Wiese", "Wanderweg", "Straße", "Fluss", "Bach", "Wasserfall", "Baum"];
    var card: string[]=[];
    var cardcharacter: string[]=["hidden", "taken", "visible"];
    
       let cardId: string[] = [];
    let flippedCards: number = 0;
  
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
   
    
    
    
    window.addEventListener('DOMContentLoaded', main); 
        
    
    function init(_event: Event): void {
        console.log(_event);
        let div = document.getElementsByClassName("card");
        for (let i: number = 0; i < div.length; i++) {

            div[i].addEventListener("click", clickHandler);
        }
    }

    function clickHandler(_event: MouseEvent): void {

        console.log(_event.target);
        let x: HTMLElement = <HTMLElement>_event.target; 
        if (x.className = "card") {
            flippedCards += 2;
            if (x.className = "hidden") {
                x.classList.remove("hidden");
                x.classList.add("visible");
            }
        } if (flippedCards == 2) {
            
        }
    }
function flipCards(card: string, value: string): void { 
        
    
    if (cardId.length == 0 && cardList.length < 2) {
            //CSS: visible
            if (cardList.length == 0) {
                cardList.push(value);
                cardId.push(card);
            }
            else if (cardList.length == 1) {
                cardList.push(value);
                cardId.push(card);
                
                
      if (cardList[0] == cardList[1]) {
                    flippedCards += 2;
                    card.splice(0, 2);
                    
                    cardId.splice(0, 2);

                    if (flippedCards == cardcontent.length) {
                   

                        document.getElementById('Game')
                    }
                } else 
                
        
                }
            