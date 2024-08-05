import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlPhieubengoanComponent } from './ql-phieubengoan.component';

describe('QlPhieubengoanComponent', () => {
  let component: QlPhieubengoanComponent;
  let fixture: ComponentFixture<QlPhieubengoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlPhieubengoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlPhieubengoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
