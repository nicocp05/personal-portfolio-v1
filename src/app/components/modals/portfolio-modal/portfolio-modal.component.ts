import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Portfolio } from 'src/app/interfaces/data-structure';

@Component({
  selector: 'app-portfolio-modal',
  templateUrl: './portfolio-modal.component.html',
  styleUrls: ['./portfolio-modal.component.css']
})
export class PortfolioModalComponent implements OnInit {

  work: Portfolio;

  constructor( @Inject(MAT_DIALOG_DATA) public data: Portfolio ) { }

  ngOnInit(): void {
    // this.work = this.data;
  }

}
