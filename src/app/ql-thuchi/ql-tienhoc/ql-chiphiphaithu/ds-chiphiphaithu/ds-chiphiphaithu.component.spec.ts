import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsChiphiphaithuComponent } from './ds-chiphiphaithu.component';

describe('DsChiphiphaithuComponent', () => {
  let component: DsChiphiphaithuComponent;
  let fixture: ComponentFixture<DsChiphiphaithuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsChiphiphaithuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsChiphiphaithuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
