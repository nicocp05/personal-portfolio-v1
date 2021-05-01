import { Component, OnInit } from '@angular/core';
import { NavbarItems } from 'src/app/interfaces/data-structure';
import { data } from 'src/app/model/data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: NavbarItems[] = data.navbarItems;

  constructor() { }

  ngOnInit(): void {
  }

}
