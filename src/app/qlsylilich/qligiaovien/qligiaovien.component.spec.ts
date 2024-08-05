import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QligiaovienComponent } from './qligiaovien.component';

describe('QligiaovienComponent', () => {
  let component: QligiaovienComponent;
  let fixture: ComponentFixture<QligiaovienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QligiaovienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QligiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
