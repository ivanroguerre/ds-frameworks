import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectComponentComponent } from './card-select-component.component';

describe('CardSelectComponentComponent', () => {
  let component: CardSelectComponentComponent;
  let fixture: ComponentFixture<CardSelectComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSelectComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
