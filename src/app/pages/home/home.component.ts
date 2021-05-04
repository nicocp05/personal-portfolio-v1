import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lightMode: boolean = false;

  constructor(ngwWowService: NgwWowService) {
    ngwWowService.init();
   }

  ngOnInit(): void {
  }

  processEvent(lightMode) {
    this.lightMode = lightMode;
  }


}
