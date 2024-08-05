import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuasktrongtuanComponent } from './them-suasktrongtuan.component';

describe('ThemSuasktrongtuanComponent', () => {
  let component: ThemSuasktrongtuanComponent;
  let fixture: ComponentFixture<ThemSuasktrongtuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuasktrongtuanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuasktrongtuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
