import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuahocvienComponent } from './them-suahocvien.component';

describe('ThemSuahocvienComponent', () => {
  let component: ThemSuahocvienComponent;
  let fixture: ComponentFixture<ThemSuahocvienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuahocvienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuahocvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
