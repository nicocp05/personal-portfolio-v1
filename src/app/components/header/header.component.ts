import { Component, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/data-structure';
import { data } from 'src/app/model/data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  header: Header = data.header;

  constructor() { }

  ngOnInit(): void {
  }

}
