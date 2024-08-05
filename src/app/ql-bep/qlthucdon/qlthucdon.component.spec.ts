import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlthucdonComponent } from './qlthucdon.component';

describe('QlthucdonComponent', () => {
  let component: QlthucdonComponent;
  let fixture: ComponentFixture<QlthucdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlthucdonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlthucdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
