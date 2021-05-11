import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/data-structure';
import { data } from 'src/app/model/data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() lightMode: boolean = false;

  contacts: Contact[] = data.contact;

  contactDescription: string = "You can contact with me by the following means!"

  constructor() { }

  ngOnInit(): void {
  }

}
