import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSualoaigiaovienComponent } from './them-sualoaigiaovien.component';

describe('ThemSualoaigiaovienComponent', () => {
  let component: ThemSualoaigiaovienComponent;
  let fixture: ComponentFixture<ThemSualoaigiaovienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSualoaigiaovienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSualoaigiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
