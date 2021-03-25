import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportsViewComponent } from './rapports-view.component';

describe('RapportsViewComponent', () => {
  let component: RapportsViewComponent;
  let fixture: ComponentFixture<RapportsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RapportsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
