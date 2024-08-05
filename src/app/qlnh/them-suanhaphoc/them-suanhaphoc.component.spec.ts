import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuanhaphocComponent } from './them-suanhaphoc.component';

describe('ThemSuanhaphocComponent', () => {
  let component: ThemSuanhaphocComponent;
  let fixture: ComponentFixture<ThemSuanhaphocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuanhaphocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuanhaphocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
