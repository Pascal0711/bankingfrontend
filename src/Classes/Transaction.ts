import { Customer } from './Customer';

export class Transaction {
    id: number;
    origin: Account;
    destination: Account;
    amount: number;
    customer: Customer;
    account: Account;

    constructor (
        id: number,
        origin: Account,
        destination: Account,
        amount: number,
        customer?: Customer,
        account?: Account) {

            this.id = id;
            this.origin = origin;
            this.destination = destination;
            this.amount = amount;
            this.customer = customer;
            this.account = account;
        }

}