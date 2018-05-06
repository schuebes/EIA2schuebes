namespace Memory {
    
    //Speicherort für Spielername und Score
    
    export interface Player {

        name: string;
        points: number;
    }

    export interface Players {
        [players: string]: Player;
    }

    export let players: Players = {}
}
