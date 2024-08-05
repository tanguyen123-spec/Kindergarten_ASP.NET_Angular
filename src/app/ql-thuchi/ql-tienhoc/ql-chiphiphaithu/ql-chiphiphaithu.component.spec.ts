import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlChiphiphaithuComponent } from './ql-chiphiphaithu.component';

describe('QlChiphiphaithuComponent', () => {
  let component: QlChiphiphaithuComponent;
  let fixture: ComponentFixture<QlChiphiphaithuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QlChiphiphaithuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QlChiphiphaithuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
