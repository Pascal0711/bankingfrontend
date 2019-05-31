export class Account {

id: number;
balance: number;
iban: string;
accountType: string;

constructor (
    id: number,
    balance: number,
    iban: string,
    accountType: string){ 
    
        this.id = id;
        this.balance = balance;
        this.iban = iban;
        this.accountType = accountType;
    }
}

