import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsPhieubengoanComponent } from './ds-phieubengoan.component';

describe('DsPhieubengoanComponent', () => {
  let component: DsPhieubengoanComponent;
  let fixture: ComponentFixture<DsPhieubengoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsPhieubengoanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsPhieubengoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
