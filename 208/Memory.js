var Memory;
(function (Memory) {
    let numPlayers = 0;
    Memory.numPairs = 5;
    let openCards = [];
    let currentCardDeck = undefined;
    let flippedCards = 0;
    let l = 0;
    let clickGo = true;
    let cardArray = [];
    //Spieleranzahl und Punktzahl
    let playerNames = [];
    let score = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    window.addEventListener("click", clickCard);
    Memory.createDecks();
    function clickCard(_event) {
        let target = _event.target;
        console.log(_event);
        if (target.classList.contains("hidden") && clickGo) {
            if (flippedCards < 2) {
                target.classList.remove("hidden");
                openCards.push(target);
            }
            flippedCards++;
            if (flippedCards == 2) {
                clickGo = false;
                flippedCards = 0;
                if (openCards[0].innerText === openCards[1].innerText) {
                    setTimeout(() => {
                        openCards[0].classList.add("taken");
                        openCards[1].classList.add("taken");
                        openCards = [];
                        clickGo = true;
                        if (document.getElementsByClassName("hidden").length == 0) {
                            alert("Gratuliere Dir!");
                        }
                    }, 2000);
                }
                else {
                    //setTimeout Funktion
                    setTimeout(() => {
                        openCards[0].classList.add("hidden");
                        openCards[1].classList.add("hidden");
                        openCards = [];
                        clickGo = true;
                    }, 2000);
                }
            }
        }
    }
    function shuffleCards() {
        let i = cardArray.length;
        let j = 0;
        let temp = "";
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1));
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }
    //Spielfeld 
    function createGame() {
        let node = document.getElementById("Game");
        //AufrufshuffleCards damit die Karten bei jedem Spiel gemischt werden
        shuffleCards();
        //Überschrift wird erstellt
        let header = document.createElement("h2");
        header.innerText = "Spielbrett";
        node.appendChild(header);
        //Spielfeld innerhalb eines Divs
        let spielFeld = document.createElement("div");
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement("div");
            card.id = i.toString();
            card.setAttribute("attr", i.toString());
            card.classList.add(cardArray[i]);
            card.classList.add("hidden");
            card.textContent = cardArray[i];
            card.style.backgroundColor = currentCardDeck.color;
            card.style.fontFamily = currentCardDeck.font;
            card.style.fontSize = currentCardDeck.size + "px";
            card.style.color = currentCardDeck.textColor;
            spielFeld.appendChild(card);
        }
        node.appendChild(spielFeld);
    }
    //Spieleranzeige erstellen
    function playerInfo() {
        //Zugriff auf das Html Dokument
        let node = document.getElementById("Gamer");
        let childNodeHTML = "";
        childNodeHTML += "<div>";
        for (let i = 0; i < playerNames.length; i++) {
            childNodeHTML += "<div class='player' id=Spieler";
            childNodeHTML += i;
            childNodeHTML += ">";
            //
            childNodeHTML += "<p class='playerInfo'> ";
            childNodeHTML += playerNames[i];
            childNodeHTML += "</p>";
            childNodeHTML += "<p class='punkte'>Punktestand: ";
            childNodeHTML += score[i];
            childNodeHTML += "</p></div>";
        }
        childNodeHTML += "</div>";
        node.innerHTML += childNodeHTML;
        console.log(childNodeHTML);
    }
    //Funktion gratulation erstellen
    function gratulation() {
        if (l == Memory.numPairs) {
        }
    }
    //Hauptfunktion
    function main() {
        let spielerAnzahl;
        let eingabe = document.getElementById("spieleranzahl").getElementsByTagName("input");
        for (let i = 0; i < eingabe.length; i++) {
            if (eingabe[i].checked) {
                spielerAnzahl = i + 1;
                break;
            }
        }
        //Eingabe Spielernamen
        eingabe = document.getElementById("name").getElementsByTagName("input");
        for (let i = 0; i < eingabe.length; i++) {
            if (eingabe[i].value == "" && i == 0) {
                playerNames.push("");
            }
            else if (eingabe[i].value != "") {
                playerNames.push(eingabe[i].value);
            }
        }
        //Auswahl des Kartensatzes
        eingabe = document.getElementById("kartensatz").getElementsByTagName("input");
        if (currentCardDeck == undefined)
            currentCardDeck = Memory.decks["animals"];
        createCardArray(currentCardDeck.content);
        createGame();
        playerInfo();
        //Starteinstellung bzw. userinterface wird nach der Einstellung gelöscht
        document.getElementById("starteinstellungen").remove();
    }
    Memory.main = main;
    function onInputEvent(value) {
        document.getElementById("kartenpaare-label").innerText = value.toString();
        Memory.numPairs = value;
    }
    Memory.onInputEvent = onInputEvent;
    function createCardArray(karten) {
        for (let i = 0; i < Memory.numPairs; i++) {
            cardArray.push(karten[i]);
            cardArray.push(karten[i]);
        }
    }
    function radioCardClick(element) {
        currentCardDeck = Memory.decks[element.value];
        repopulateCardForm();
    }
    Memory.radioCardClick = radioCardClick;
    //SliderAnzahl
    function repopulateCardForm() {
        let kartenPaareElement = document.getElementById("kartenpaare");
        kartenPaareElement.max = currentCardDeck.content.length.toString();
        let maxWert = currentCardDeck.content.length;
        let momentanerWert = parseInt(kartenPaareElement.value);
        if (maxWert < momentanerWert) {
            kartenPaareElement.value = maxWert.toString();
        }
        document.getElementById("kartenpaare-label").innerText = kartenPaareElement.value;
    }
    function radioSpielerClick(element) {
        let spielerZahl = parseInt(element.value);
        for (let i = 1; i <= 4; i++) {
            let inputElement = document.getElementById(`player${i}`);
            let labelElement = document.getElementById(`player${i}-label`);
            if (i <= spielerZahl) {
                inputElement.disabled = false;
                labelElement.style.opacity = "1";
            }
            else {
                inputElement.disabled = true;
                labelElement.style.opacity = "0.33";
                inputElement.value = "";
            }
        }
    }
    Memory.radioSpielerClick = radioSpielerClick;
})(Memory || (Memory = {}));
//# sourceMappingURL=Memory.js.map