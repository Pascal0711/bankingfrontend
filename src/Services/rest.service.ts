import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Customer } from 'src/Classes/Customer';
import { HttpClient } from '@angular/common/http';
import { CostumerListDetailsComponent } from 'src/app/Components/costumer-list-details/costumer-list-details.component';
import { Adresse } from 'src/Classes/Adresse';
import { Account } from 'src/Classes/Account';
import { Transaction } from 'src/Classes/Transaction';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  getSingleCustomer: any;
  getSingleAdresse: any;
  getSingleAccount: any;
  getSingleTransaction: any;
  URL = 'http://localhost:8080/customer';
  URL2 = 'http://localhost:8080/adresse';
  URL3 = 'http://localhost:8080/account';
  URL4 = 'http://localhost:8080/transaction';

  constructor(private http: HttpClient) { 
  }

    getCostumerById (id : number): Observable<Customer> {
      var newUrl = "http://localhost:8080/customer/" + id; // URL mit einer Pathvariable
      return this.http.get<Customer>(newUrl);
    }
    getAdresseById (id : number): Observable<Adresse> {
      var newUrl = "http://localhost:8080/adresse/" + id; // URL mit einer Pathvariable
      return this.http.get<Adresse>(newUrl);
    }
    getAccountById (id : number): Observable<Account> {
      var newUrl = "http://localhost:8080/account/" + id; // URL mit einer Pathvariable
      return this.http.get<Account>(newUrl);
    }
    getAllCustomers(): Observable<Customer[]> {
      return this.http.get<Customer[]>(this.URL);
    }
    postCustomer(costumer: Customer): Observable<Customer> {
      return this.http.post<Customer>(this.URL, costumer);
    }
    getAllAdresses(): Observable<Adresse[]> {
      return this.http.get<Adresse[]>(this.URL2);
    }
    postAdresse(adresse: Adresse): Observable<Adresse> {
      return this.http.post<Adresse>(this.URL2, adresse);
    }
    getAllAccount(): Observable<Account[]> {
      return this.http.get<Account[]>(this.URL3);
    }
    postAccount(account: Account): Observable<Account> {
      return this.http.post<Account>(this.URL3, account);
    }
    deleteCustomer(customerId: number): Observable<any> {
      return this.http.delete<any>("http://localhost:8080/customer/"+ customerId);
    }
    getTransaction(amount: number): Observable<Transaction> {
      return this.http.post<Transaction>(this.URL4, amount);
    }
    postTransaction(originIbanId:number, destinationIbanId:number, amount:number): Observable<Transaction> {
      debugger;
      const URL5 = "http://localhost:8080/transaction/" + originIbanId + "/" + destinationIbanId + "/" + amount;
      return this.http.get<Transaction>(URL5);
      ///transaction/{originIbanId}/{destinationIbanId}/{amount}
      //transaction
    }

  }

