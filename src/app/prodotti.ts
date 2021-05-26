//voglio che la classe sia rappresentata come:

export class Prodotti{
    constructor(private name: string, private blob: Blob, private prezzo:number){}

    getPrezzo(){
        return this.prezzo;
    }

    getBlob(){
        return this.blob;
    }

    getName(){
        return this.name;
    }
}