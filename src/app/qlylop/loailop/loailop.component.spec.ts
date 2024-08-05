import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoailopComponent } from './loailop.component';

describe('LoailopComponent', () => {
  let component: LoailopComponent;
  let fixture: ComponentFixture<LoailopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoailopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoailopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
