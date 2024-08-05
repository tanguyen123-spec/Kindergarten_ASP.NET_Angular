import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaimagesuckhoehangngayComponent } from './them-suaimagesuckhoehangngay.component';

describe('ThemSuaimagesuckhoehangngayComponent', () => {
  let component: ThemSuaimagesuckhoehangngayComponent;
  let fixture: ComponentFixture<ThemSuaimagesuckhoehangngayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuaimagesuckhoehangngayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuaimagesuckhoehangngayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
