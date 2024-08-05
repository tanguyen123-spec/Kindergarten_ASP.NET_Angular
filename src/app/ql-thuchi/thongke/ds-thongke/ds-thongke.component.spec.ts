import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsThongkeComponent } from './ds-thongke.component';

describe('DsThongkeComponent', () => {
  let component: DsThongkeComponent;
  let fixture: ComponentFixture<DsThongkeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsThongkeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsThongkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
