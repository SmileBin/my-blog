import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../common/material/material.module';
import { MainModule } from './main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './main/main.service';
import { BlogFrameComponent } from './blog-frame/blog-frame.component';
import { BlogRoutingModule } from './blog.routing';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { TopAreaComponent } from './top-area/top-area.component';
import { SidenavFlagService } from './shared-service/sidenav-flag/sidenav-flag.service';
import { SharedServiceModule } from './shared-service/shared-service.module';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
    imports: [
        CommonModule,
        BlogRoutingModule,
        HttpClientModule,
        MainModule,
        MaterialModule
    ],
    exports: [],
    declarations: [
        BlogFrameComponent,
        TopAreaComponent,
        PostDetailComponent
    ],
    providers: [
    ],
})
export class BlogModule { }
