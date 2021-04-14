import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsName: String[] = ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'Node.js', 'Git']

  constructor() { }

  ngOnInit(): void {
  }

}
