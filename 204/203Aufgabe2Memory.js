var Aufgabe2MemoryGame;
(function (Aufgabe2MemoryGame) {
    var cardcontent = ["Wald", "Berg", "Sarah", "Wiese", "Wanderweg", "Straße", "Fluss", "Bach", "Wasserfall", "Baum"];
    var card = [];
    var cardcharacter = ["hidden", "taken", "visible"];
    //Karten
    function inputPairs() {
        let pairs = prompt("Mit wievielen KartenPaaren möchtet ihr spielen ? (Zwischen 5 und 10)");
        let pairSum = parseInt(pairs);
        if (isNaN(pairSum) || pairSum < 5 || pairSum > 10) {
            alert("FALSCH");
            inputPairs();
        }
        else {
            console.log("inputPairs");
            console.log(pairSum);
            return pairSum;
        }
    }
    //Spieleranzahl
    function inputPlayer() {
        let n = prompt("Wieviele Spieler seid ihr (Zwischen 2 und 4 ?");
        let nSum = parseInt(n);
        if (isNaN(nSum) || nSum < 0 || nSum > 4) {
            alert("FALSCH");
            inputPlayer();
        }
        else {
            console.log("inputPlayer");
            console.log(nSum);
            return nSum;
        }
    }
    let amount = inputPairs();
    let players = inputPlayer();
    console.log("Cardcontent", cardcontent.length);
    console.log("Content on Card", cardcontent);
    function shuffelAray(x) {
        for (let i = 1; i <= x; i++) {
            var content = cardcontent[0];
            card.push(content);
            card.push(content);
            var removed = cardcontent.splice(0, 1);
        }
        console.log("Content CardList", card);
    }
    //    Erzeugen der Karten 
    function generateCards(y) {
        var node = document.getElementById("Game");
        var childNodeHTML;
        var i = 0;
        while (i < (y * 2)) {
            let min = 0;
            let max = (card.length);
            var random = Math.floor(Math.random() * (max - min)) + min;
            var classRandom = Math.floor(Math.random() * (3 - 0)) + 0;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div";
            // Random Karten Auswahl
            console.log("Random Test" + classRandom);
            childNodeHTML += " class='" + cardcharacter[classRandom] + "'";
            childNodeHTML += "id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += card[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            console.log("Länge Cardlist nach Generate, " + card.length);
            var content = card[random];
            console.log("classRandom: " + classRandom + ", " + cardcharacter[classRandom]);
            var removed = card.splice(random, 1);
            console.log(card);
            i++;
        }
    }
    function generatePlayers() {
        var node = document.getElementById("Gamer");
        var childNodeHTML;
        var i = 0;
        while (i < players) {
            childNodeHTML = "<div  class='player' id='Spieler" + i + "'>";
            childNodeHTML += "Player " + (i + 1);
            childNodeHTML += "<p>";
            childNodeHTML += "0";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            i++;
        }
    }
    // Hauptprogramm
    function main() {
        shuffelAray(amount);
        console.log("main");
        // Cards erzeugen
        generateCards(amount);
        generatePlayers();
    }
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main);
})(Aufgabe2MemoryGame || (Aufgabe2MemoryGame = {}));
//# sourceMappingURL=203Aufgabe2Memory.js.map