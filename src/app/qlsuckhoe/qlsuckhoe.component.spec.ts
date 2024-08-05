import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlsuckhoeComponent } from './qlsuckhoe.component';

describe('QlsuckhoeComponent', () => {
  let component: QlsuckhoeComponent;
  let fixture: ComponentFixture<QlsuckhoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlsuckhoeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlsuckhoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
