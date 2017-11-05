import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './portfolio/introduction/introduction.component';
import { BlogFrameComponent } from './blog/blog-frame/blog-frame.component';

import { NotFoundComponent } from './common/not-found/not-found.component';

export const routes:Routes= [
    {
        path : '',
        redirectTo : 'introduction',
        pathMatch : 'full'
    },
    {
        path:'introduction',
        component : IntroductionComponent
    },
    {
        path :'blog',
        component : BlogFrameComponent,
        children:[
            {
                path:'',
                loadChildren : './blog/blog.module#BlogModule'
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

export class AppRoutingModule{} 