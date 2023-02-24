import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPortadaComponentComponent } from './banner-portada-component.component';

describe('BannerPortadaComponentComponent', () => {
  let component: BannerPortadaComponentComponent;
  let fixture: ComponentFixture<BannerPortadaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPortadaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPortadaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
