import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/Classes/Customer';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/Services/rest.service';
import { Adresse } from 'src/Classes/Adresse';
import { Account } from 'src/Classes/Account';

@Component({
  selector: 'app-costumer-list-details',
  templateUrl: './costumer-list-details.component.html',
  styleUrls: ['./costumer-list-details.component.css']
})

export class CostumerListDetailsComponent implements OnInit {

  id: number; 
  listOfCustomers : Customer[]=[];
  listOfAdresses: Adresse[]=[];
  listOfAccounts: Account[]=[];
  customer: Observable<Customer>;
  adresse: Observable<Adresse>;
  account: Observable<Account>;

  constructor(private route: ActivatedRoute,
              private rest: RestService) {

  route.params.subscribe(
    params => {
      this.id = params['id'];
      console.log(this.id);
      this.customer = this.rest.getSingleCustomer(this.id)
    }
  );
  route.params.subscribe(
    params => {
      this.id = params['id'];
      console.log(this.id);
      this.adresse = this.rest.getSingleAdresse(this.id)
    }
  );
  route.params.subscribe(
    params => {
      this.id = params['id'];
      console.log(this.id);
      this.account = this.rest.getSingleAccount(this.id)
    }
  );
  }

  ngOnInit() {
  }

  getSingleCustomer(id: number){
    this.rest.getSingleCustomer(id).subscribe(
    response => this.customer = response
    );
  }
  getAllCustomer(){
    this.rest.getSingleCustomer().subscribe(
    response => this.listOfCustomers = response
    );
  }
  getSingleAdresses(id: number){
    this.rest.getSingleAdresse(id).subscribe(
    response => this.adresse = response
    );
  }
  deleteSingleCustomer(customerId: number){
    this.rest.deleteCustomer(customerId).subscribe(
    response => alert(response)
    );
  }
  getAllAdresses(){
    this.rest.getSingleAdresse().subscribe(
    response => this.listOfAdresses = response
    );
  }
  getSingleAccount(id: number){
    this.rest.getSingleAccount(id).subscribe(
    response => this.account = response
    );
  }
  getAllAccount(){
    this.rest.getSingleAccount().subscribe(
    response => this.listOfAccounts = response
    );
  }

}
