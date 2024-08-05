import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsImagesuckhoehangngayComponent } from './ds-imagesuckhoehangngay.component';

describe('DsImagesuckhoehangngayComponent', () => {
  let component: DsImagesuckhoehangngayComponent;
  let fixture: ComponentFixture<DsImagesuckhoehangngayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DsImagesuckhoehangngayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DsImagesuckhoehangngayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
