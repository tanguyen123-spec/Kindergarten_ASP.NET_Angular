import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsTiethocComponent } from './ds-tiethoc.component';

describe('DsTiethocComponent', () => {
  let component: DsTiethocComponent;
  let fixture: ComponentFixture<DsTiethocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsTiethocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsTiethocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
