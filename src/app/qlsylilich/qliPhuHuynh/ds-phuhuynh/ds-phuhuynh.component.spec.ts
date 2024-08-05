import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhuhuynhComponent } from './ds-phuhuynh.component';

describe('DsPhuhuynhComponent', () => {
  let component: DsPhuhuynhComponent;
  let fixture: ComponentFixture<DsPhuhuynhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsPhuhuynhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsPhuhuynhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
