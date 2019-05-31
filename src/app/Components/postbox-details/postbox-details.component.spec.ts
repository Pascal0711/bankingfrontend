import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POstboxDetailsComponent } from './postbox-details.component';

describe('POstboxDetailsComponent', () => {
  let component: POstboxDetailsComponent;
  let fixture: ComponentFixture<POstboxDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POstboxDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POstboxDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
