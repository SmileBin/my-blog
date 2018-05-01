import { NotFoundComponent } from './common/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogFrameComponent } from './blog/blog-frame/blog-frame.component';

const routes: Routes = [
  { path: '', redirectTo: 'blog', pathMatch: 'full' },
  {
    path: 'blog', component: BlogFrameComponent,
    children: [
      {
        path: '',
        loadChildren: './blog/blog.module#BlogModule'
      }
    ]
  },
  {
    path: '**',
    component : NotFoundComponent
  }
];

@NgModule({
  imports :[ RouterModule.forRoot(routes)],
  exports:[ RouterModule ]
})

export class AppRoutingModule {}
