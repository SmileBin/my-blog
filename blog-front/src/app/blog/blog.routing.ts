import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'posts/:postId', component: PostDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule { }
