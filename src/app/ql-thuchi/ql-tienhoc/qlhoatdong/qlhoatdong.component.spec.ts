import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlhoatdongComponent } from './qlhoatdong.component';

describe('QlhoatdongComponent', () => {
  let component: QlhoatdongComponent;
  let fixture: ComponentFixture<QlhoatdongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlhoatdongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlhoatdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
