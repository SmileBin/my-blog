import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionExperienceComponent } from './section-experience.component';

describe('SectionExperienceComponent', () => {
  let component: SectionExperienceComponent;
  let fixture: ComponentFixture<SectionExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
