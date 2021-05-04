import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/interfaces/data-structure';
import { data } from 'src/app/model/data';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() lightMode: boolean = false;

  experiences: Experience[] = data.experience;

  constructor() { }

  ngOnInit(): void {
  }

}
