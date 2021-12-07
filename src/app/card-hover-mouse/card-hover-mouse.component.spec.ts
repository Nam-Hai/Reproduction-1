import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHoverMouseComponent } from './card-hover-mouse.component';

describe('CardHoverMouseComponent', () => {
  let component: CardHoverMouseComponent;
  let fixture: ComponentFixture<CardHoverMouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHoverMouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHoverMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
