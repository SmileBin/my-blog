import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../common/material/material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { MainService } from './main.service';
import { SidenavFlagService } from '../shared-service/sidenav-flag/sidenav-flag.service';
import { SharedServiceModule } from '../shared-service/shared-service.module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        SharedServiceModule
    ],
    exports: [],
    declarations: [
        MainComponent
    ],
    providers: [
        MainService
    ]
})
export class MainModule { }
