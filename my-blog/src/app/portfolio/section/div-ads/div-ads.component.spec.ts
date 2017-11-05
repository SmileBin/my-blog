import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivAdsComponent } from './div-ads.component';

describe('DivAdsComponent', () => {
  let component: DivAdsComponent;
  let fixture: ComponentFixture<DivAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
