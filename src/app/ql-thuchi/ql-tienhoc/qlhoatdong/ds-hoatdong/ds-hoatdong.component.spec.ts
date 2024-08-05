import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsHoatdongComponent } from './ds-hoatdong.component';

describe('DsHoatdongComponent', () => {
  let component: DsHoatdongComponent;
  let fixture: ComponentFixture<DsHoatdongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsHoatdongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsHoatdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
