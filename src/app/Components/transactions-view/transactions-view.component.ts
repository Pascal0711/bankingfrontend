import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RestService } from 'src/Services/rest.service';
import { Account } from 'src/Classes/Account';
import { Transaction } from 'src/Classes/Transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.css']
})
export class TransactionsViewComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  customerForm: FormGroup;
  adresseForm: FormGroup;
  accountForm: FormGroup;
  transactionForm: FormGroup;
  id: number;
  saveOrigin: string;
  saveDestination: string;
  saveAmount: number;
  amountFound = {};


  origin = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  destination = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  amount = new FormControl('',[ Validators.required, Validators.minLength(1)]);

  account1:Account;



  constructor(    
    private rest: RestService,
    private formBuilder: FormBuilder,
    private router: Router) { }

    executeTransaction(){
      debugger;
      this.router.navigate(["/transaction", this.origin.value, this.destination.value, this.amount.value]);
    }

    postTransaction() {
      
      this.rest.postTransaction(this.origin.value, this.destination.value, this.amount.value).subscribe(
        response => console.log(response)
      );
    }

    get f() {
      return this.transactionForm.controls;
    }

    postFormTransaction() {
      return;
    }

    getTransfer(){
      const transaction = new Transaction(
        this.accountForm.get('id').value,
        this.accountForm.get('origin').value,
        this.accountForm.get('destination').value,
        this.accountForm.get('amount').value
        );
      }

      finishTransfer(){
        this.amountFound = {};
        this.rest.getTransaction(this.id).subscribe(found=>  {
          this.amountFound = {...found, ...this.amountFound};
          console.log(found);
        });
      }

  ngOnInit() {
  }

}
