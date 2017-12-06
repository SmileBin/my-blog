import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';

import { SidenavFlagService } from './sidenav-flag/sidenav-flag.service';

@NgModule({ })
export class SharedServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServiceModule,
      providers: [ SidenavFlagService ]
    };
  }
}

