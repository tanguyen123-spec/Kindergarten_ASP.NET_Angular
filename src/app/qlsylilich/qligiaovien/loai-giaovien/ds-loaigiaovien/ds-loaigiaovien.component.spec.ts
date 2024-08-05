import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLoaigiaovienComponent } from './ds-loaigiaovien.component';

describe('DsLoaigiaovienComponent', () => {
  let component: DsLoaigiaovienComponent;
  let fixture: ComponentFixture<DsLoaigiaovienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsLoaigiaovienComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsLoaigiaovienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
