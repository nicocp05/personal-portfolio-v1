import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { SocialNetworksComponent } from './social-networks/social-networks.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ContactComponent,
    ExperienceComponent,
    HeaderComponent,
    NavbarComponent,
    PortfolioComponent,
    SkillsComponent,
    SocialNetworksComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ContactComponent,
    ExperienceComponent,
    HeaderComponent,
    NavbarComponent,
    PortfolioComponent,
    SkillsComponent,
    SocialNetworksComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
