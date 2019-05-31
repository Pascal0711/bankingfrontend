export class Adresse {

    id: number;
    streetName: string;
    streetNumber: number;
    postalCode: number;
    city: string;
    country: string;

    constructor (
        id: number,        
        streetName: string,
        streetNumber: number,
        postalCode: number,
        city: string,
        country: string){       
            
            this.id = id;
            this.streetName = streetName;
            this.streetNumber = streetNumber;
            this.postalCode = postalCode;
            this.city = city;
            this.country = country;
    }
}