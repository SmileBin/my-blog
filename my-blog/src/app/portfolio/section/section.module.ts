import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionHomeComponent } from './section-home/section-home.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { DivText1Component } from './div-text1/div-text1.component';
import { SectionAbilityComponent } from './section-ability/section-ability.component';
import { SectionExperienceComponent } from './section-experience/section-experience.component';
import { DivAdsComponent } from './div-ads/div-ads.component';
import { DivLineComponent } from './div-line/div-line.component';
import { SectionInterestsComponent } from './section-interests/section-interests.component';
import { SectionTestimonialsComponent } from './section-testimonials/section-testimonials.component';
import { SectionContactComponent } from './section-contact/section-contact.component';
import { DivText2Component } from './div-text2/div-text2.component';
import { FooterContentsComponent } from './footer-contents/footer-contents.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SectionHomeComponent,
    SectionAboutComponent,
    DivText1Component,
    SectionAbilityComponent,
    SectionExperienceComponent,
    DivAdsComponent,
    DivLineComponent,
    SectionInterestsComponent,
    SectionTestimonialsComponent,
    SectionContactComponent,
    DivText2Component,
    FooterContentsComponent
  ],
  exports: [
    SectionHomeComponent,
    SectionAboutComponent,
    DivText1Component,
    SectionAbilityComponent,
    SectionExperienceComponent,
    DivAdsComponent,
    DivLineComponent,
    SectionInterestsComponent,
    SectionTestimonialsComponent,
    SectionContactComponent,
    DivText2Component,
    FooterContentsComponent
  ]
})
export class SectionModule { }
