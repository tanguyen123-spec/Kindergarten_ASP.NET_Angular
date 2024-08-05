import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsYkienComponent } from './ds-ykien.component';

describe('DsYkienComponent', () => {
  let component: DsYkienComponent;
  let fixture: ComponentFixture<DsYkienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsYkienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsYkienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
