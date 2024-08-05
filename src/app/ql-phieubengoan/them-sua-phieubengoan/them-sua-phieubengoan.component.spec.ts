import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaPhieubengoanComponent } from './them-sua-phieubengoan.component';

describe('ThemSuaPhieubengoanComponent', () => {
  let component: ThemSuaPhieubengoanComponent;
  let fixture: ComponentFixture<ThemSuaPhieubengoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuaPhieubengoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuaPhieubengoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
