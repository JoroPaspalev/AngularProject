import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingChildObservableComponent } from './leasing-child-observable.component';

describe('LeasingChildObservableComponent', () => {
  let component: LeasingChildObservableComponent;
  let fixture: ComponentFixture<LeasingChildObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeasingChildObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeasingChildObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
