import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavComponent } from './nav/nav.component';
import { BlogFrameComponent } from './blog-frame/blog-frame.component';
import { ContentsComponent } from './contents/contents.component';

const routes:Routes= [
    { path : '', component: ContentsComponent },
    { path : 'contents', component: ContentsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  declarations: [
    NavComponent,
    BlogFrameComponent,
    ContentsComponent
  ],
  exports: [
    NavComponent
  ]
})
export class BlogModule { }
