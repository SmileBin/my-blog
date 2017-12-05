import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SidenavFlagService } from './sidenav-flag/sidenav-flag.service';

@NgModule({
    providers: [SidenavFlagService]
})
export class SharedServiceModule {
    // constructor (@Optional() @SkipSelf() parentModule: SharedServiceModule) {
    //     if (parentModule) {
    //       throw new Error(
    //         'SharedServiceModule is already loaded. Import it in the AppModule only');
    //     }
    //   }
      static forRoot() {
        return {
          ngModule: SharedServiceModule,
          providers: [
            SharedServiceModule
          ]
        };
      }
}

