import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaskdinhkiComponent } from './them-suaskdinhki.component';

describe('ThemSuaskdinhkiComponent', () => {
  let component: ThemSuaskdinhkiComponent;
  let fixture: ComponentFixture<ThemSuaskdinhkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuaskdinhkiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuaskdinhkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
