import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsTienhocComponent } from './ds-tienhoc.component';

describe('DsTienhocComponent', () => {
  let component: DsTienhocComponent;
  let fixture: ComponentFixture<DsTienhocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsTienhocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsTienhocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
