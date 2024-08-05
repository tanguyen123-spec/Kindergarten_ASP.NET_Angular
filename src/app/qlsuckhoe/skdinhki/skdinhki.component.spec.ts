import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkdinhkiComponent } from './skdinhki.component';

describe('SkdinhkiComponent', () => {
  let component: SkdinhkiComponent;
  let fixture: ComponentFixture<SkdinhkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkdinhkiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkdinhkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
