import { WhoamiComponent } from './whoami/whoami.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BlogFrameComponent } from './blog-frame/blog-frame.component';

const routes: Routes = [
  {
    path: '', component: BlogFrameComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'whoami', component: WhoamiComponent },
      { path: 'posts/:postId', component: PostDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }
