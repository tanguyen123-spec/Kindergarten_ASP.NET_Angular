import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LopComponent } from './lop.component';

describe('LopComponent', () => {
  let component: LopComponent;
  let fixture: ComponentFixture<LopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
