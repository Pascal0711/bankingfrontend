import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListViewComponent } from './Components/customer-list-view/customer-list-view.component';
import { CustomerInformationViewComponent } from './Components/customer-information-view/customer-information-view.component';
import { TransactionsViewComponent } from './Components/transactions-view/transactions-view.component';

const routes: Routes = [
{
  path: 'customerList',
  component: CustomerListViewComponent
},
{
  path: 'customerList/transaction',
  component: CustomerInformationViewComponent
},
{
  path: 'transaction/:originIbanId/:destinationIbanId/:amount',
  component: TransactionsViewComponent
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
