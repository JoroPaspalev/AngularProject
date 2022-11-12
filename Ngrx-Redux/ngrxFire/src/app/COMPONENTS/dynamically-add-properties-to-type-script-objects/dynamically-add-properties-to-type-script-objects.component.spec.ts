import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyAddPropertiesToTypeScriptObjectsComponent } from './dynamically-add-properties-to-type-script-objects.component';

describe('DynamicallyAddPropertiesToTypeScriptObjectsComponent', () => {
  let component: DynamicallyAddPropertiesToTypeScriptObjectsComponent;
  let fixture: ComponentFixture<DynamicallyAddPropertiesToTypeScriptObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicallyAddPropertiesToTypeScriptObjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicallyAddPropertiesToTypeScriptObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
