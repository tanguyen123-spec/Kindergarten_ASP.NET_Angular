import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiethocComponent } from './tiethoc.component';

describe('TiethocComponent', () => {
  let component: TiethocComponent;
  let fixture: ComponentFixture<TiethocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiethocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TiethocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
