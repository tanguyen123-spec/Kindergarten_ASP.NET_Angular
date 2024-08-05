import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QLNHComponent } from './qlnh.component';

describe('QLNHComponent', () => {
  let component: QLNHComponent;
  let fixture: ComponentFixture<QLNHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QLNHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QLNHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
