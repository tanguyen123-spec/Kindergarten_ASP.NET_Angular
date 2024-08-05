import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLoailopComponent } from './ds-loailop.component';

describe('DsLoailopComponent', () => {
  let component: DsLoailopComponent;
  let fixture: ComponentFixture<DsLoailopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsLoailopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsLoailopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
