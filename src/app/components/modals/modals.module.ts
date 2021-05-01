import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    PortfolioModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    PortfolioModalComponent,
  ]
})
export class ModalsModule { }
