import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlPhieudiemdanhComponent } from './ql-phieudiemdanh.component';

describe('QlPhieudiemdanhComponent', () => {
  let component: QlPhieudiemdanhComponent;
  let fixture: ComponentFixture<QlPhieudiemdanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlPhieudiemdanhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlPhieudiemdanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
