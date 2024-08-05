import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlylopComponent } from './qlylop.component';

describe('QlylopComponent', () => {
  let component: QlylopComponent;
  let fixture: ComponentFixture<QlylopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlylopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlylopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
