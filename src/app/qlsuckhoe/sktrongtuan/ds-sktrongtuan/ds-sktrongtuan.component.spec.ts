import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsSktrongtuanComponent } from './ds-sktrongtuan.component';

describe('DsSktrongtuanComponent', () => {
  let component: DsSktrongtuanComponent;
  let fixture: ComponentFixture<DsSktrongtuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsSktrongtuanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsSktrongtuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
