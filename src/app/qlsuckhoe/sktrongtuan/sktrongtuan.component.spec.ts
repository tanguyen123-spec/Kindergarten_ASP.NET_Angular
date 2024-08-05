import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SktrongtuanComponent } from './sktrongtuan.component';

describe('SktrongtuanComponent', () => {
  let component: SktrongtuanComponent;
  let fixture: ComponentFixture<SktrongtuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SktrongtuanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SktrongtuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
