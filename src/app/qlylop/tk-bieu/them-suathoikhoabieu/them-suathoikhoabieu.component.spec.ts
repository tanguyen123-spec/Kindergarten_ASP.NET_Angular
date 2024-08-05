import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuathoikhoabieuComponent } from './them-suathoikhoabieu.component';

describe('ThemSuathoikhoabieuComponent', () => {
  let component: ThemSuathoikhoabieuComponent;
  let fixture: ComponentFixture<ThemSuathoikhoabieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuathoikhoabieuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuathoikhoabieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
