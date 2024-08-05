import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapxeploptheonamComponent } from './sapxeploptheonam.component';

describe('SapxeploptheonamComponent', () => {
  let component: SapxeploptheonamComponent;
  let fixture: ComponentFixture<SapxeploptheonamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SapxeploptheonamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SapxeploptheonamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
