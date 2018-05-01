import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogFrameComponent } from './blog/blog-frame/blog-frame.component';
import { AppRoutingModule } from './app.routing';
import { SharedServiceModule } from './blog/shared-service/shared-service.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MarkdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
