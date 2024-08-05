import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaykienComponent } from './them-suaykien.component';

describe('ThemSuaykienComponent', () => {
  let component: ThemSuaykienComponent;
  let fixture: ComponentFixture<ThemSuaykienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuaykienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuaykienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
