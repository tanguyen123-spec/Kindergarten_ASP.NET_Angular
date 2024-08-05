import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapxeplopComponent } from './sapxeplop.component';

describe('SapxeplopComponent', () => {
  let component: SapxeplopComponent;
  let fixture: ComponentFixture<SapxeplopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapxeplopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SapxeplopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
