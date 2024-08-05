import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuachiphiphaithuComponent } from './them-suachiphiphaithu.component';

describe('ThemSuachiphiphaithuComponent', () => {
  let component: ThemSuachiphiphaithuComponent;
  let fixture: ComponentFixture<ThemSuachiphiphaithuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuachiphiphaithuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuachiphiphaithuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
