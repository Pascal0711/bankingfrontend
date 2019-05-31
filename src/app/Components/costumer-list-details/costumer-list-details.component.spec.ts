import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostumerListDetailsComponent } from './costumer-list-details.component';

describe('CostumerListDetailsComponent', () => {
  let component: CostumerListDetailsComponent;
  let fixture: ComponentFixture<CostumerListDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostumerListDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostumerListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
