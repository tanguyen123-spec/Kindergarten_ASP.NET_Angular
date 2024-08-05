import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSuatienhocComponent } from './them-suatienhoc.component';

describe('ThemSuatienhocComponent', () => {
  let component: ThemSuatienhocComponent;
  let fixture: ComponentFixture<ThemSuatienhocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSuatienhocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSuatienhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
