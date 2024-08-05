import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsMonantheongayComponent } from './ds-monantheongay.component';

describe('DsMonantheongayComponent', () => {
  let component: DsMonantheongayComponent;
  let fixture: ComponentFixture<DsMonantheongayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsMonantheongayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsMonantheongayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
