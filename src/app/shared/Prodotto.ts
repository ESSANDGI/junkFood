export class Prodotto{
    constructor(private type:string, private name: string, private urlPath: string, private price:number){}

    getPrice(){
        return this.price;
    }

    getBlob(){
        return this.urlPath;
    }

    getName(){
        return this.name;
    }

    getType(){
        return this.type;
    }
}