import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLopComponent } from './ds-lop.component';

describe('DsLopComponent', () => {
  let component: DsLopComponent;
  let fixture: ComponentFixture<DsLopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsLopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsLopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
