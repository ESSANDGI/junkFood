//voglio che la classe sia rappresentata come:

export class Prodotto{
    constructor(private name: string, private urlPath: string, private prezzo:number){}

    getPrezzo(){
        return this.prezzo;
    }

    getBlob(){
        return this.urlPath;
    }

    getName(){
        return this.name;
    }
}