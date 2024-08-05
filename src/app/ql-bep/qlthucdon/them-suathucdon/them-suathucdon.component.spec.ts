import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuathucdonComponent } from './them-suathucdon.component';

describe('ThemSuathucdonComponent', () => {
  let component: ThemSuathucdonComponent;
  let fixture: ComponentFixture<ThemSuathucdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuathucdonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuathucdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
