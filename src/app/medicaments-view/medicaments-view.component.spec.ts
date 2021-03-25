import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentsViewComponent } from './medicaments-view.component';

describe('MedicamentsViewComponent', () => {
  let component: MedicamentsViewComponent;
  let fixture: ComponentFixture<MedicamentsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicamentsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
