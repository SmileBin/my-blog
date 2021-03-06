import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../common/material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { MainService } from './main.service';
import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';
import { SharedServiceModule } from '../shared-service/shared-service.module';
import { CategoryComponent } from './category/category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WebsocketService } from '../../common/websocket/websocket.service';
import { FooterModule } from '../footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    // SharedServiceModule,
    NgbModule,
    FooterModule
  ],
  exports: [],
  declarations: [
    MainComponent,
    CategoryComponent
  ],
  providers: [
    MainService,
    WebsocketService
  ]
})
export class MainModule { }
