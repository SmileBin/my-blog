import { BlogFrameComponent } from './blog-frame/blog-frame.component';
import { BlogRoutingModule } from './blog.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { TopAreaComponent } from './top-area/top-area.component';

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule
    ],
    exports: [],
    declarations: [
        MainComponent,
        BlogFrameComponent,
        TopAreaComponent
    ],
    providers: [],
})
export class BlogModule { }
