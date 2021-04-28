import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  load: Boolean = false;
  
  constructor( private spinner: NgxSpinnerService ) {
  }

  ngOnInit() {
    this.showSpinner();
  }

  showSpinner() {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
      this.load = true;
    }, 2000);
  }


}
