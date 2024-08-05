import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsGiaovienComponent } from './ds-giaovien.component';

describe('DsGiaovienComponent', () => {
  let component: DsGiaovienComponent;
  let fixture: ComponentFixture<DsGiaovienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsGiaovienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsGiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
