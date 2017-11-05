import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFrameComponent } from './blog-frame.component';

describe('BlogFrameComponent', () => {
  let component: BlogFrameComponent;
  let fixture: ComponentFixture<BlogFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
