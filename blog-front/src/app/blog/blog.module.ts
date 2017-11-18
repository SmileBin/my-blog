import { BlogFrameComponent } from './blog-frame/blog-frame.component';
import { BlogRoutingModule } from './blog.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule
    ],
    exports: [],
    declarations: [
        MainComponent,
        BlogFrameComponent
    ],
    providers: [],
})
export class BlogModule { }
