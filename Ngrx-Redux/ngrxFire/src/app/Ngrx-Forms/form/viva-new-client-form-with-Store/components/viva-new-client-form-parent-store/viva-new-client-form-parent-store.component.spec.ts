import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivaNewClientFormParentStoreComponent } from './viva-new-client-form-parent-store.component';

describe('VivaNewClientFormParentStoreComponent', () => {
  let component: VivaNewClientFormParentStoreComponent;
  let fixture: ComponentFixture<VivaNewClientFormParentStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VivaNewClientFormParentStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VivaNewClientFormParentStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
