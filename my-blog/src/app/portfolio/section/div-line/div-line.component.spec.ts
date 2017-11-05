import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivLineComponent } from './div-line.component';

describe('DivLineComponent', () => {
  let component: DivLineComponent;
  let fixture: ComponentFixture<DivLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
