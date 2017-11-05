import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbilityComponent } from './section-ability.component';

describe('SectionAbilityComponent', () => {
  let component: SectionAbilityComponent;
  let fixture: ComponentFixture<SectionAbilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAbilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
