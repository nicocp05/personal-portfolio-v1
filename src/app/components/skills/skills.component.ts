import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/data-structure';
import { data } from 'src/app/model/data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {  

  @Input() lightMode: boolean = false;

  skills: Skill[] = data.skills;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

}
