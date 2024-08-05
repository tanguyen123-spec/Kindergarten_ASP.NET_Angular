import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuagiaovienComponent } from './them-suagiaovien.component';

describe('ThemSuagiaovienComponent', () => {
  let component: ThemSuagiaovienComponent;
  let fixture: ComponentFixture<ThemSuagiaovienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuagiaovienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuagiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
