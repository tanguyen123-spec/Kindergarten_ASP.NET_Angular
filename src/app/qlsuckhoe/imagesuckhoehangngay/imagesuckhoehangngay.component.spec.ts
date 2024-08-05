import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesuckhoehangngayComponent } from './imagesuckhoehangngay.component';

describe('ImagesuckhoehangngayComponent', () => {
  let component: ImagesuckhoehangngayComponent;
  let fixture: ComponentFixture<ImagesuckhoehangngayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagesuckhoehangngayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagesuckhoehangngayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
