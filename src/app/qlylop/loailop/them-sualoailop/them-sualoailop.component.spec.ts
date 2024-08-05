import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSualoailopComponent } from './them-sualoailop.component';

describe('ThemSualoailopComponent', () => {
  let component: ThemSualoailopComponent;
  let fixture: ComponentFixture<ThemSualoailopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSualoailopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSualoailopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
