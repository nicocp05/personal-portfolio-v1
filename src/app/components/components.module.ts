import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { ModalsModule } from './modals/modals.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    ContactComponent,
    ExperienceComponent,
    HeaderComponent,
    NavbarComponent,
    PortfolioComponent,
    SkillsComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    ModalsModule
  ],
  exports: [
    ContactComponent,
    ExperienceComponent,
    HeaderComponent,
    NavbarComponent,
    PortfolioComponent,
    SkillsComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
