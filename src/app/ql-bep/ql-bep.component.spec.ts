import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlBepComponent } from './ql-bep.component';

describe('QlBepComponent', () => {
  let component: QlBepComponent;
  let fixture: ComponentFixture<QlBepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlBepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlBepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
