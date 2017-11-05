import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContentsComponent } from './footer-contents.component';

describe('FooterContentsComponent', () => {
  let component: FooterContentsComponent;
  let fixture: ComponentFixture<FooterContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
