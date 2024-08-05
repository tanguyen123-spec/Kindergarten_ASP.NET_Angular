import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuamonantheongayComponent } from './them-suamonantheongay.component';

describe('ThemSuamonantheongayComponent', () => {
  let component: ThemSuamonantheongayComponent;
  let fixture: ComponentFixture<ThemSuamonantheongayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuamonantheongayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuamonantheongayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
