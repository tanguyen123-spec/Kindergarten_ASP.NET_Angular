import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSualopComponent } from './them-sualop.component';

describe('ThemSualopComponent', () => {
  let component: ThemSualopComponent;
  let fixture: ComponentFixture<ThemSualopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemSualopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemSualopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
