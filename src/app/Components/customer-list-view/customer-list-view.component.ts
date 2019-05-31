import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Classes/Customer';
import { RestService } from 'src/Services/rest.service';
import { Adresse } from 'src/Classes/Adresse';
import { Account } from 'src/Classes/Account';

@Component({
  selector: 'app-customer-list-view',
  templateUrl: './customer-list-view.component.html',
  styleUrls: ['./customer-list-view.component.css']
})
export class CustomerListViewComponent implements OnInit {
  customers: Customer[] = [];
  adresses: Adresse[] = [];
  accounts: Account[] = [];
  saveId: number;

  idFound = {};

  showAllCustomers(){
    this.rest.getSingleCustomer().subscribe(response => this.customers=response)
    this.rest.getSingleAdresse().subscribe(response => this.adresses=response)
    this.rest.getSingleAccount().subscribe(response => this.accounts=response)
  }

  constructor(private rest: RestService) { }

  ngOnInit() {
    this.rest.getAllCustomers().subscribe(allCustomers => this.customers = allCustomers);
    this.rest.getAllAdresses().subscribe(allAdresses => this.adresses = allAdresses);
    this.rest.getAllAccount().subscribe(allAccount => this.accounts = allAccount);
  }
  deleteSingleCustomer(customerId: number){
    this.rest.deleteCustomer(customerId).subscribe(
    response => alert(response)
    );
  }
  showCustomers(id: number){
    this.idFound = {};
    this.rest.getCostumerById(id).subscribe(found=>  {
      this.idFound = {...found, ...this.idFound};
      console.log(found);
    });
 
    this.rest.getAdresseById(id).subscribe(found=>  {
      this.idFound= {...found, ...this.idFound};
      console.log(found);
    });

      this.rest.getAccountById(id).subscribe(found=>  {
        this.idFound= {...found, ...this.idFound};
        console.log(found);
      });
  }

}
