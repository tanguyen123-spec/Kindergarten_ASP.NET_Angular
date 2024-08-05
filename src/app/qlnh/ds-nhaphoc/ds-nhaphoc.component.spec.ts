import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsNhaphocComponent } from './ds-nhaphoc.component';

describe('DsNhaphocComponent', () => {
  let component: DsNhaphocComponent;
  let fixture: ComponentFixture<DsNhaphocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsNhaphocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsNhaphocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
