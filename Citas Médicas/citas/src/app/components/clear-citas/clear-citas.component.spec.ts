import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearCitasComponent } from './clear-citas.component';

describe('ClearCitasComponent', () => {
  let component: ClearCitasComponent;
  let fixture: ComponentFixture<ClearCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
