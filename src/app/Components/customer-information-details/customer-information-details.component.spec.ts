import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInformationDetailsComponent } from './customer-information-details.component';

describe('CustomerInformationDetailsComponent', () => {
  let component: CustomerInformationDetailsComponent;
  let fixture: ComponentFixture<CustomerInformationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInformationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInformationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
