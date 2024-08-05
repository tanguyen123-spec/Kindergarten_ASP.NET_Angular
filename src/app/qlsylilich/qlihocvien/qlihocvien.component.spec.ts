import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlihocvienComponent } from './qlihocvien.component';

describe('QlihocvienComponent', () => {
  let component: QlihocvienComponent;
  let fixture: ComponentFixture<QlihocvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlihocvienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlihocvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
