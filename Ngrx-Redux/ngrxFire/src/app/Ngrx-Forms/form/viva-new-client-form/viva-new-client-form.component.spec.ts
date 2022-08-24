import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VivaNewClientFormComponent } from './viva-new-client-form.component';

describe('VivaNewClientFormComponent', () => {
  let component: VivaNewClientFormComponent;
  let fixture: ComponentFixture<VivaNewClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VivaNewClientFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VivaNewClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
