import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsSkdinhkiComponent } from './ds-skdinhki.component';

describe('DsSkdinhkiComponent', () => {
  let component: DsSkdinhkiComponent;
  let fixture: ComponentFixture<DsSkdinhkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsSkdinhkiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsSkdinhkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
