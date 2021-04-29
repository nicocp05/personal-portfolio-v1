import { Component, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/interfaces/data-structure';
import { data } from '../../model/data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  works: Portfolio[] = data.portfolio;

  constructor() { }

  ngOnInit(): void {
  }

}
