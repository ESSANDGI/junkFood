//voglio che la classe sia rappresentata come:

export class Prodotto{
    constructor(private tipo:string, private name: string, private urlPath: string, private prezzo:number){}

    getPrezzo(){
        return this.prezzo;
    }

    getBlob(){
        return this.urlPath;
    }

    getName(){
        return this.name;
    }

    getTipo(){
        return this.tipo;
    }
}