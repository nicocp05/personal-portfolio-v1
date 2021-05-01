import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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

  works: Portfolio[] = data.portfolio;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  

  // modalWork(work) {
  //   Swal.fire({
  //     title: `${work.name}`,
  //     text: `${work.description}`,
  //     showConfirmButton: false,
  //     showCloseButton: true,
  //     closeButtonHtml: '<i class="far fa-times-circle"></i>',
  //     showClass: {
  //       popup: 'animate__animated animate__fadeInDown'
  //     },
  //     hideClass: {
  //       popup: 'animate__animated animate__fadeOutUp'
  //     },
  //     imageUrl: `${work.img}`,
  //     imageWidth: 400,
  //     imageHeight: 350,
  //   });
  // }

  openDialog( work: Portfolio ) {
    this.dialog.open(PortfolioModalComponent, {
      width: '900px',
      data: {
        name: work.name,
        img: work.img,
        usedList: work.usedList,
        description: work.description
      }
    });
  }

}
