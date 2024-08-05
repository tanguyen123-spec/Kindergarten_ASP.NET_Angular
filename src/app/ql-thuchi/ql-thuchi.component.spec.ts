import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlThuchiComponent } from './ql-thuchi.component';

describe('QlThuchiComponent', () => {
  let component: QlThuchiComponent;
  let fixture: ComponentFixture<QlThuchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlThuchiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlThuchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
