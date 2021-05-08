import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CurriculumStructure, Education, Experience, Personal } from 'src/app/interfaces/curriculum-structure';

@Component({
  selector: 'app-curriculum-modal',
  templateUrl: './curriculum-modal.component.html',
  styleUrls: ['./curriculum-modal.component.css']
})
export class CurriculumModalComponent implements OnInit {

  curriculum: CurriculumStructure;
  personal: Personal;
  skills: string[];
  experiences: Experience[];
  educations: Education[];

  constructor( @Inject(MAT_DIALOG_DATA) public data: CurriculumStructure ) {
    this.personal = this.data.personal
    this.skills = this.data.skills;
    this.experiences = this.data.experience;
    this.educations = this.data.education;
   }

  ngOnInit(): void {
  }

}
