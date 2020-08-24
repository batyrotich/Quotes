export class Quote {
    showDescription: boolean;
    constructor(
         public id: number,
         public name: string, 
         public author: string, 
         public blogger: string, 
         public postingDate: Date
         ) {
        this.showDescription = false;
    }
}
