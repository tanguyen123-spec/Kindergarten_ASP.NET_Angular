import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsthucdonComponent } from './dsthucdon.component';

describe('DsthucdonComponent', () => {
  let component: DsthucdonComponent;
  let fixture: ComponentFixture<DsthucdonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsthucdonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsthucdonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
