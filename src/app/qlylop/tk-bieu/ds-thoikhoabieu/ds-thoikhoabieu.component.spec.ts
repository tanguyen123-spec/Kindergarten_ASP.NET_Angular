import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsThoikhoabieuComponent } from './ds-thoikhoabieu.component';

describe('DsThoikhoabieuComponent', () => {
  let component: DsThoikhoabieuComponent;
  let fixture: ComponentFixture<DsThoikhoabieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsThoikhoabieuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsThoikhoabieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
