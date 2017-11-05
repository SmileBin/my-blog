import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivText2Component } from './div-text2.component';

describe('DivText2Component', () => {
  let component: DivText2Component;
  let fixture: ComponentFixture<DivText2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivText2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivText2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
