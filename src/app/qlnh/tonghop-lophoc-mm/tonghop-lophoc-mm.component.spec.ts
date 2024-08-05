import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TonghopLophocMMComponent } from './tonghop-lophoc-mm.component';

describe('TonghopLophocMMComponent', () => {
  let component: TonghopLophocMMComponent;
  let fixture: ComponentFixture<TonghopLophocMMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TonghopLophocMMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TonghopLophocMMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
