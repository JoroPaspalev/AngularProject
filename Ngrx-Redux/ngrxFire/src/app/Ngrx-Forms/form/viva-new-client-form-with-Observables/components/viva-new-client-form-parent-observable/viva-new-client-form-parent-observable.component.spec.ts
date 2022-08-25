import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivaNewClientFormParentObservableComponent } from './viva-new-client-form-parent-observable.component';

describe('VivaNewClientFormParentObservableComponent', () => {
  let component: VivaNewClientFormParentObservableComponent;
  let fixture: ComponentFixture<VivaNewClientFormParentObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VivaNewClientFormParentObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VivaNewClientFormParentObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
