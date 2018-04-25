namespace Aufgabe2MemoryGame {
    

    var cardcontent: string []=["Wald", "Berg", "Sarah", "Wiese", "Wanderweg", "Straße", "Fluss", "Bach", "Wasserfall", "Baum"];
    var card: string[]=[];
    var cardcharacter: string[]=["hidden", "taken", "visible"];
    
    let playerList: number[] = [];

    let players: number[] = [1, 2, 3, 4];
   
    
    let cardId: string[] = [];
    let flippedCards: number = 0;
    let takenCards: number = 0;


    
   function inputPairs() : number{
       
    let pairs : string = prompt("Mit wievielen KartenPaaren möchtet ihr spielen ? (Zwischen 5 und 10)");
    let pairSum : number = parseInt(pairs);
        if (pairSum >= 1 && pairSum <= 10) {
        return pairSum;   
    }
    
        else {
       alert("Deine Zahl liegt nicht zwischen 5 und 10");
            return inputPairs();
      
      
           
       }
       }
 let menge: number = inputPairs();

    console.log(menge)
    
 //Spieleranzahl
      
    function inputPlayer():number{
           let n : string = prompt ("Wieviele Spieler seid ihr (Zwischen 2 und 4");
           let sumSpieler : number = parseInt(n);
            if (sumSpieler >= 1 && sumSpieler <= 4) {
       
        return  sumSpieler;    
    }
    
        else {
            alert("Sorry dude, es können nicht mehr wie 4 Spieler spielen.");

      
   return inputPlayer();
           
    }
     }      
    let output: number = inputPlayer();
   
   
 // Funktion für das Mischen der Karten
    
   
    
    function shuffelAray(x:number): void {
        
        for (let i: number = 1; i <= x; i++) {
             
            
        var content : string = cardcontent[0];  
        card.push (content);
            card.push(content);
             
            var removed = cardcontent.splice(0, 1);
            
            }
            
        }
    console.log("Content CardList", card);
   
        
        
          function showPlayers(x: number): void {

        for (let i: number = 0; i <= x; i++) {

            let inhalt: number = players[0];
            playerList.push(inhalt);

            let removed = players.splice(0, 1);


            console.log("showPlayers");
    
    }
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
          
            childNodeHTML = "<div class='card'>"; 
// Random Karten Auswahl
            childNodeHTML += "<div class='hidden";
            //childNodeHTML += cardcharacter[classRandom];
            childNodeHTML += "' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += card[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> "; 
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
    function generatePlayers(x: number) : void{
        var node : any= document.getElementById("Gamer");
        var childNodeHTML : string;
        var i : number = 0;
        while (i < (playerList.length - 1)) {
          
            childNodeHTML = "<div  class='player' id='Spieler" + i + "'>";
            childNodeHTML += "Player " + (i+1);
            childNodeHTML += "<p>";
            childNodeHTML += "0";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";      
            node.innerHTML += childNodeHTML;
            
           /* childNodeHTML = "";
            childNodeHTML += "<div class='player' id='Spieler" + i + "'>";
            childNodeHTML += "<p class='playerInfo'>";
            childNodeHTML += playerList[i];
            childNodeHTML += ".player</p>";
            childNodeHTML += "<p class ='punkte'>";
            childNodeHTML += "Punkte"; 
            childNodeHTML += "</div>";
            */
            let inhaltPlayer: number = players[output];

            console.log("inhaltPlayers:" + players);

            i++;
            
            
        }
        }

    
    
    
    
    
    // Add EventListener 
   
    
    
    
    window.addEventListener("load", init); 
     
    
    
        function init(_event: Event): void {
        console.log(_event);
        let div = document.getElementsByClassName("card");
        for (let i: number = 0; i < div.length; i++) {

            div[i].addEventListener("click", clickCard);
        }
    }

        function clickCard(_event: Event): void {

        console.log(_event.target);
        let x: HTMLElement = <HTMLElement>_event.target; //hiermit greife ich auf die classes 
        
        if (x.classList.contains("hidden")) {
            x.classList.remove("hidden");
            x.classList.add("visible");
            flippedCards++;
            if (flippedCards == 2) {
                setTimeout(compareCards, 2000);
            }
            if (flippedCards > 2) {
                x.classList.remove("visible");
                x.classList.add("hidden");
            }
        }
    }
    
      function compareCards() {
        let card1: HTMLElement = <HTMLElement>document.getElementsByClassName("visible")[0];
        let card2: HTMLElement = <HTMLElement>document.getElementsByClassName("visible")[1];


        console.log("cardList.length:" + card.length);

        console.log("cardId:" + cardId);

        console.log("card1:" + card1)
        console.log("card2:" + card2)

        if (card1.innerHTML == card2.innerHTML) {
            if (card1.className = "visible") {
                card1.classList.remove("visible");
                card1.classList.add("taken");

                console.log("taken1");
            }
            if (card2.className = "visible") {
                card2.classList.remove("visible");
                card2.classList.add("taken");
                takenCards++;
                console.log("taken2");
            }
            takenCards++;
            

        }

    else {
            if (card1.className = "visible") {
                card1.classList.remove("visible");
                card1.classList.add("hidden");

                console.log("hidden1");
            }
            if (card2.className = "visible") {
                card2.classList.remove("visible");
                card2.classList.add("hidden");

                console.log("hidden2");
            }
       } 
          console.log("flippedCards:" + flippedCards);
        flippedCards = 0;

       // if (takenCards == card.length) {
        //    alert("Yeah du hast es gepackt.");
        //}
    }


    function main () : void {
        
         shuffelAray(menge);
        showPlayers(output);
             console.log("main");
        
// Cards erzeugen
         generateCards(menge);
         generatePlayers(output);
         }
          
          
    
    document.addEventListener('DOMContentLoaded', main);
    
  }
