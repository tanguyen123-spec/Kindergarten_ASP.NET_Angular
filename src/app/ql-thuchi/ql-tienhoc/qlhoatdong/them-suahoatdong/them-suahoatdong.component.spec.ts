import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuahoatdongComponent } from './them-suahoatdong.component';

describe('ThemSuahoatdongComponent', () => {
  let component: ThemSuahoatdongComponent;
  let fixture: ComponentFixture<ThemSuahoatdongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuahoatdongComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuahoatdongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
