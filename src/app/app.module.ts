import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListViewComponent } from './Components/customer-list-view/customer-list-view.component';
import { CostumerListDetailsComponent } from './Components/costumer-list-details/costumer-list-details.component';
import { TransactionsViewComponent } from './Components/transactions-view/transactions-view.component';
import { TransactionsDetailsComponent } from './Components/transactions-details/transactions-details.component';
import { TANCodeComponent } from './Components/tan-code/tan-code.component';
import { PostboxViewComponent } from './Components/postbox-view/postbox-view.component';
import { POstboxDetailsComponent } from './Components/postbox-details/postbox-details.component';
import { CustomerInformationViewComponent } from './Components/customer-information-view/customer-information-view.component';
import { CustomerInformationDetailsComponent } from './Components/customer-information-details/customer-information-details.component';
import { AddCostumerComponent } from './add-customer/add-costumer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListViewComponent,
    CostumerListDetailsComponent,
    TransactionsViewComponent,
    TransactionsDetailsComponent,
    TANCodeComponent,
    PostboxViewComponent,
    POstboxDetailsComponent,
    CustomerInformationViewComponent,
    CustomerInformationDetailsComponent,
    AddCostumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
