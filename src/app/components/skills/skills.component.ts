import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/interfaces/data-structure';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[] = []

  constructor( private dataServices: DataService ) {
    
   }

  ngOnInit(): void {
    this.dataServices.getSkills()
      .subscribe( (res: Skill[]) => {
        this.skills = res;        
      });
  }

}
