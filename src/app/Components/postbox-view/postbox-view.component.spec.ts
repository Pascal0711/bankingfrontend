import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostboxViewComponent } from './postbox-view.component';

describe('PostboxViewComponent', () => {
  let component: PostboxViewComponent;
  let fixture: ComponentFixture<PostboxViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostboxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostboxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
