import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/Services/rest.service';
import { Customer } from 'src/Classes/Customer';
import { Adresse } from 'src/Classes/Adresse';
import { Account } from 'src/Classes/Account';
import { ActivatedRoute } from '@angular/router';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-customer-information-view',
  templateUrl: './customer-information-view.component.html',
  styleUrls: ['./customer-information-view.component.css']
})
export class CustomerInformationViewComponent implements OnInit {

  customer: Customer;
  adresse: Adresse;
  account: Account;
  id: number;
  myCustomer: Customer;

  findCustomer(id: number){
    this.http.getCostumerById(id).subscribe(response => {this.customer = response});
  }
  findAdresses(id: number){
    this.http.getAdresseById(id).subscribe(response => {this.adresse = response});
  }
  findAccount(accountId: number){
    this.http.getAccountById(accountId).subscribe(response => {this.account = response});
  }

  constructor(private http: RestService, 
              private route: ActivatedRoute,
              private service: RestService) { 
  
    route.params.subscribe(
       params => {
          this.id = params['id'];
          console.log(this.id);
          
          this.service.getCostumerById(this.id).subscribe(
          response => this.myCustomer = response
          );
       }
     );
   }
  ngOnInit() {
    this.findCustomer(1);
    this.findAdresses(1);
    this.findAccount(1);
  }
}

