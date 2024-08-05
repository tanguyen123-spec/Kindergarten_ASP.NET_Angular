import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlTienhocComponent } from './ql-tienhoc.component';

describe('QlTienhocComponent', () => {
  let component: QlTienhocComponent;
  let fixture: ComponentFixture<QlTienhocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlTienhocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlTienhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
