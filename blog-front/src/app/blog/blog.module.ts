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
import { WhoamiComponent } from './whoami/whoami.component';
import { ScriptLoaderService } from '../common/script-loader/script-loader.service';
import { FooterModule } from './footer/footer.module';
import { MarkdownModule } from 'ngx-markdown';
import { PostDetailService } from './post-detail/post-detail.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedServiceModule.forRoot(),
    BlogRoutingModule,
    HttpClientModule,
    MainModule,
    MaterialModule,
    FooterModule,
    MarkdownModule.forChild(),
  ],
  exports: [],
  declarations: [
    BlogFrameComponent,
    TopAreaComponent,
    PostDetailComponent,
    WhoamiComponent
  ],
  providers: [
    ScriptLoaderService,
    PostDetailService
  ],
})
export class BlogModule { }
