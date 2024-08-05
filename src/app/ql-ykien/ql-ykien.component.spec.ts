import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlYkienComponent } from './ql-ykien.component';

describe('QlYkienComponent', () => {
  let component: QlYkienComponent;
  let fixture: ComponentFixture<QlYkienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlYkienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlYkienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
