import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpComponent } from './jp.component';

describe('JpComponent', () => {
  let component: JpComponent;
  let fixture: ComponentFixture<JpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
