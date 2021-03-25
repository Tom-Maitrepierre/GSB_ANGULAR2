import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinsViewComponent } from './medecins-view.component';

describe('MedecinsViewComponent', () => {
  let component: MedecinsViewComponent;
  let fixture: ComponentFixture<MedecinsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
