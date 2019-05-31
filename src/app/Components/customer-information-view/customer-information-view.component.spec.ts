import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInformationViewComponent } from './customer-information-view.component';

describe('CustomerInformationViewComponent', () => {
  let component: CustomerInformationViewComponent;
  let fixture: ComponentFixture<CustomerInformationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInformationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
