var MemoryGameAufgabe2;
(function (MemoryGameAufgabe2) {
    var cardcontent = ["Haus", "Kirche", "Berg", "Fluss", "Wald", "Hügel", "Straße", "Hütte", "Wasserfall", "Gasthaus", "Wanderweg"];
    var cardList = [];
    function getPairs() {
        let pairsquestion = prompt("Mit vielen Karten Paaren möchtest du spielen ? (mindestens 4 und maximum 11) Anzahl bitte eingeben.");
        let pairsinsert = parseInt(pairsquestion);
        return pairsinsert;
    }
    let amount = getPairs();
    console.log(cardcontent.length);
    console.log(cardcontent);
    function shuffle(x) {
        for (let i = 1; i <= x; i++) {
            var content = cardcontent[0];
            cardList.push(content);
            cardList.push(content);
            var removed = cardcontent.splice(0, 1);
        }
        console.log(cardList);
    }
    function getcards(y) {
        var node = document.getElementById("game");
        var childNodeHTML;
        var i = 0;
        while (i < (y * 2)) {
            let min = 0;
            let max = (cardList.length);
            var random = Math.floor(Math.random() * (max - min)) + min;
            console.log("Card:" + i);
            console.log(random);
            childNodeHTML = "<div  class='card' id='Karte" + i + "'>";
            childNodeHTML += "<p>";
            childNodeHTML += cardList[random];
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            var content = cardList[random];
            var removed = cardList.splice(random, 1);
            console.log(cardList);
            i++;
        }
    }
    // Hauptprogramm... Erzeugen des Games, der Karten
    function main() {
        shuffle(amount);
        console.log("main");
        getcards(amount);
    }
    // Add EventListener 
    document.addEventListener('DOMContentLoaded', main);
})(MemoryGameAufgabe2 || (MemoryGameAufgabe2 = {}));
//# sourceMappingURL=203Aufgabe2Memory.js.map