import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RestService } from 'src/Services/rest.service';
import { CostumerListDetailsComponent } from '../Components/costumer-list-details/costumer-list-details.component';
import { Customer } from 'src/Classes/Customer';
import { Adresse } from 'src/Classes/Adresse';
import { Account } from 'src/Classes/Account';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-add-costumer',
  templateUrl: './add-costumer.component.html',
  styleUrls: ['./add-costumer.component.css']
})
export class AddCostumerComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  customerForm: FormGroup;
  adresseForm: FormGroup;
  accountForm: FormGroup;
  id: number;

  customerPreName = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  customerLastName = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  streetName = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  streetNumber = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  postalCode = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  city = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  country = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  balance = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  iban = new FormControl('',[ Validators.required, Validators.minLength(1)]);
  accountType = new FormControl('',[ Validators.required, Validators.minLength(1)]);

  customer1:Customer;
  

  constructor(
    private rest: RestService,
    private formBuilder: FormBuilder
    ) {
  }


  postCustomer() {
    const adresse = new Adresse(this.id, this.streetName.value, this.streetNumber.value, this.postalCode.value, this.city.value, this.country.value);
    const account = new Account(this.id, this.balance.value, this.iban.value, this.accountType.value);
    const customer = new Customer(this.id, this.customerPreName.value, this.customerLastName.value, adresse, [account]);
    this.rest.postCustomer(customer).subscribe(
      response => console.log(response)
    );
  }

  get f() {
    return this.customerForm.controls;
  }
  get g() {
    return this.adresseForm.controls;
  }
  get h() {
    return this.accountForm.controls;
  }


  postFormCustomer() {
      return;
    }

getCustomer(){
    const customer = new Customer(
      this.customerForm.get('id').value,
      this.customerForm.get('customerPreName').value,
      this.customerForm.get('customerLastName').value
      );
    const adresses = new Adresse(
      this.adresseForm.get('id').value,
      this.adresseForm.get('streetName').value,
      this.adresseForm.get('streetNumber').value,
      this.adresseForm.get('postalCode').value,
      this.adresseForm.get('city').value,
      this.adresseForm.get('country').value
      );
    const account = new Account(
      this.accountForm.get('id').value,
      this.accountForm.get('balance').value,
      this.accountForm.get('iban').value,
      this.accountForm.get('accountType').value
      );
    }

    ngOnInit() {
      }
  }