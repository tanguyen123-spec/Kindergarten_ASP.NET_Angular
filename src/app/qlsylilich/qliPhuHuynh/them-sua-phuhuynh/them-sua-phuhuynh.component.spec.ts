import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaPhuhuynhComponent } from './them-sua-phuhuynh.component';

describe('ThemSuaPhuhuynhComponent', () => {
  let component: ThemSuaPhuhuynhComponent;
  let fixture: ComponentFixture<ThemSuaPhuhuynhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuaPhuhuynhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuaPhuhuynhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
