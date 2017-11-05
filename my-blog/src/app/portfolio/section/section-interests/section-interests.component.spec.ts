import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionInterestsComponent } from './section-interests.component';

describe('SectionInterestsComponent', () => {
  let component: SectionInterestsComponent;
  let fixture: ComponentFixture<SectionInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
