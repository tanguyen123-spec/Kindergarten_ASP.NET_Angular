import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhieudiemdanhComponent } from './ds-phieudiemdanh.component';

describe('DsPhieudiemdanhComponent', () => {
  let component: DsPhieudiemdanhComponent;
  let fixture: ComponentFixture<DsPhieudiemdanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsPhieudiemdanhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsPhieudiemdanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
