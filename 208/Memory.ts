namespace Memory {


    let numPlayers: number = 0;
    export let numPairs: number = 5;

    
    
    let openCards: HTMLElement[] = [];

   
    let currentCardDeck: Deck = undefined;

    let flippedCards: number = 0;

    let l: number = 0;

    let clickGo: boolean = true;

    
    let cardArray: string[] = [];

    //Spieleranzahl und Punktzahl
    let playerNames: string[] = [];
    let score: number[] = [0, 0, 0, 0]; //Punktestand = 0, ist vordefiniert
    window.addEventListener("click", clickCard);

    createDecks();



    function clickCard(_event: Event): void {
        let target: HTMLDivElement = <HTMLDivElement>_event.target;


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
                            alert("Gratuliere Dir!")
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



    function shuffleCards(): void {

        let i: number = cardArray.length;

        let j: number = 0;

        let temp: string = "";

        while (--i > 0) {

            j = Math.floor(Math.random() * (i + 1));
            temp = cardArray[j];
            cardArray[j] = cardArray[i];
            cardArray[i] = temp;
        }
    }

    //Spielfeld 
    
    function createGame(): void {

        let node: any = document.getElementById("Game");

        //AufrufshuffleCards damit die Karten bei jedem Spiel gemischt werden
        shuffleCards();

        //Überschrift wird erstellt
        let header = document.createElement("h2");
        header.innerText = "Spielbrett";
        node.appendChild(header);

        //Spielfeld innerhalb eines Divs
      
        let spielFeld = document.createElement("div");

        for (let i: number = 0; i < cardArray.length; i++) {

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
    function playerInfo(): void {

        //Zugriff auf das Html Dokument
        let node: any = document.getElementById("Gamer");

        let childNodeHTML: string = "";

        childNodeHTML += "<div>";

        for (let i: number = 0; i < playerNames.length; i++) {

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
    function gratulation(): void {

        if (l == numPairs) {

          

        }
    }

    //Hauptfunktion
    export function main(): void {

        let spielerAnzahl: number;

        let eingabe: NodeListOf<Element> = document.getElementById("spieleranzahl").getElementsByTagName("input");

        for (let i = 0; i < eingabe.length; i++) {

            if ((<HTMLInputElement>eingabe[i]).checked) {
                spielerAnzahl = i + 1;
                break;
            }
        }

        //Eingabe Spielernamen
        eingabe = document.getElementById("name").getElementsByTagName("input");

        for (let i = 0; i < eingabe.length; i++) {
            if ((<HTMLInputElement>eingabe[i]).value == "" && i == 0) {
                playerNames.push("")
            }


            else if ((<HTMLInputElement>eingabe[i]).value != "") {
                playerNames.push((<HTMLInputElement>eingabe[i]).value)
            }
        }

        //Auswahl des Kartensatzes
        eingabe = document.getElementById("kartensatz").getElementsByTagName("input");


        if (currentCardDeck == undefined)
            currentCardDeck = decks["animals"];

        createCardArray(currentCardDeck.content);

        createGame();

        playerInfo();

        //Starteinstellung bzw. userinterface wird nach der Einstellung gelöscht
        document.getElementById("starteinstellungen").remove()

    }

    export function onInputEvent(value: number) {
        document.getElementById("kartenpaare-label").innerText = value.toString();
        numPairs = value;
    }


    function createCardArray(karten: string[]) {

        for (let i = 0; i < numPairs; i++) {
            cardArray.push(karten[i]);
            cardArray.push(karten[i]);
        }

    }

    export function radioCardClick(element: HTMLInputElement) {
        currentCardDeck = decks[element.value];
        repopulateCardForm();
    }

    //SliderAnzahl
    function repopulateCardForm() {
        let kartenPaareElement = <HTMLInputElement>document.getElementById("kartenpaare");
        kartenPaareElement.max = currentCardDeck.content.length.toString();

        let maxWert = currentCardDeck.content.length;
        let momentanerWert = parseInt(kartenPaareElement.value);

        if (maxWert < momentanerWert) {
            kartenPaareElement.value = maxWert.toString()
        }
        document.getElementById("kartenpaare-label").innerText = kartenPaareElement.value;
    }
    export function radioSpielerClick(element: HTMLInputElement) {

        let spielerZahl = parseInt(element.value);

        for (let i = 1; i <= 4; i++) {

            let inputElement = <HTMLInputElement>document.getElementById(`player${i}`);
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
}