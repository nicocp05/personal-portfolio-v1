import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/data-structure';
import { data } from 'src/app/model/data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: Contact[] = data.contact;

  constructor() { }

  ngOnInit(): void {
  }

}
