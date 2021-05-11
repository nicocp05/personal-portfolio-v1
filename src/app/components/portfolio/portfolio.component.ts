import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/interfaces/data-structure';
import { data } from '../../model/data';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioModalComponent } from '../modals/portfolio-modal/portfolio-modal.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  @Input() lightMode: boolean = false;

  works: Portfolio[] = data.portfolio;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openDialog( work: Portfolio ) {
    this.dialog.open(PortfolioModalComponent, {
      width: '900px',
      height: '600px',
      data: {
        name: work.name,
        img: work.img,
        usedList: work.usedList,
        description: work.description,
        link: work.link
      },
      autoFocus: false
    });
  }

}
