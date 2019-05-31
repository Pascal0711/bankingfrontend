import { Adresse } from './Adresse';
import { Account} from './Account';

export class Customer {
    id: number;
    customerPreName: string;
    customerLastName: string;
    adresse: Adresse;
    account: Account[];

    constructor (id: number,
        customerPreName: string,
        customerLastName: string,
        adresse?: Adresse,
        account?: Account[]) {

        this.id = id;
        this.adresse = adresse;
        this.account = account;
        this.customerPreName = customerPreName;
        this.customerLastName = customerLastName;
        }
}