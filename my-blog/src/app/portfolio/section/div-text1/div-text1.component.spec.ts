import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivText1Component } from './div-text1.component';

describe('DivText1Component', () => {
  let component: DivText1Component;
  let fixture: ComponentFixture<DivText1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivText1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivText1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
