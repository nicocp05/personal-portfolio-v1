import { Component, Input, OnInit } from '@angular/core';
import { About } from 'src/app/interfaces/data-structure';
import { data } from 'src/app/model/data';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() lightMode: boolean = false;

  about: About = data.about;
  aboutDescription: String = this.about.description;
  firstParagraph: String = this.aboutDescription.substr(0,185);
  secondParagraph: String = this.aboutDescription.substr(187,465);
  thirdParagraph: String = this.aboutDescription.substr(169,148);
  aboutLink: String = this.about.linkCV;

  constructor() { }

  ngOnInit(): void {
  }

}
