import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlsylilichComponent } from './qlsylilich.component';

describe('QlsylilichComponent', () => {
  let component: QlsylilichComponent;
  let fixture: ComponentFixture<QlsylilichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlsylilichComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlsylilichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
