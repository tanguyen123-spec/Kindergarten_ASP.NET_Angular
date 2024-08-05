import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsHocvienComponent } from './ds-hocvien.component';

describe('DsHocvienComponent', () => {
  let component: DsHocvienComponent;
  let fixture: ComponentFixture<DsHocvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsHocvienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsHocvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
