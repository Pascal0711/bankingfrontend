import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TANCodeComponent } from './tan-code.component';

describe('TANCodeComponent', () => {
  let component: TANCodeComponent;
  let fixture: ComponentFixture<TANCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TANCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TANCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
