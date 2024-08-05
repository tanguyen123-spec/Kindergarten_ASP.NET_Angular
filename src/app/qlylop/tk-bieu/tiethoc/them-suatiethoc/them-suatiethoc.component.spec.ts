import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuatiethocComponent } from './them-suatiethoc.component';

describe('ThemSuatiethocComponent', () => {
  let component: ThemSuatiethocComponent;
  let fixture: ComponentFixture<ThemSuatiethocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuatiethocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuatiethocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
