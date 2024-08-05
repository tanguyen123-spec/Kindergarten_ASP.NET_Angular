import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlmonantheongayComponent } from './qlmonantheongay.component';

describe('QlmonantheongayComponent', () => {
  let component: QlmonantheongayComponent;
  let fixture: ComponentFixture<QlmonantheongayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlmonantheongayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlmonantheongayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
