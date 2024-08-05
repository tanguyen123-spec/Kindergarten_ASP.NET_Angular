import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiGiaovienComponent } from './loai-giaovien.component';

describe('LoaiGiaovienComponent', () => {
  let component: LoaiGiaovienComponent;
  let fixture: ComponentFixture<LoaiGiaovienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaiGiaovienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoaiGiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
