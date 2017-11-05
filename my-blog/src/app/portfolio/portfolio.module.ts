import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionModule } from './section/section.module';
// import { TopBarComponent } from './top-bar/top-bar.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  imports: [
    CommonModule,
    SectionModule
  ],
  declarations: [
    IntroductionComponent,
    // TopBarComponent
  ],
  exports: [
    IntroductionComponent,
    // TopBarComponent,
    SectionModule
    
  ]
})
export class PortfolioModule { }
