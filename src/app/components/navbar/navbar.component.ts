import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavbarItems } from 'src/app/interfaces/data-structure';
import { data } from 'src/app/model/data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: NavbarItems[] = data.navbarItems;
  isShown: boolean = false;
  lightMode: boolean = false;

  @Output () modeEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  navbarShown() {
    this.isShown = !this.isShown;
  }

  changeMode() {
    this.lightMode = !this.lightMode;
    this.modeEvent.emit(this.lightMode);
  }

}
