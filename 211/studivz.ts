namespace Aufgabe6 {
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        studiengang: string;
    }

    // Struktur des Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis {         [matrikel: string]: Studi;
    }
 
    export let studiHomoAssoc: Studis = {};  
}
