import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuaphieudiemdanhComponent } from './them-suaphieudiemdanh.component';

describe('ThemSuaphieudiemdanhComponent', () => {
  let component: ThemSuaphieudiemdanhComponent;
  let fixture: ComponentFixture<ThemSuaphieudiemdanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuaphieudiemdanhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuaphieudiemdanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
