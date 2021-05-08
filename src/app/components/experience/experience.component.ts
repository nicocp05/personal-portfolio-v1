import { Component, Input, OnInit } from '@angular/core';
import { CurriculumStructure } from 'src/app/interfaces/curriculum-structure';
import { Experience } from 'src/app/interfaces/data-structure';
import { data } from 'src/app/model/data';
import { curriculum } from '../../model/cv';
import { MatDialog } from '@angular/material/dialog';
import { CurriculumModalComponent } from '../modals/curriculum-modal/curriculum-modal.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() lightMode: boolean = false;

  experiences: Experience[] = data.experience;

  cv: CurriculumStructure = curriculum;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const cv = this.cv;
    this.dialog.open(CurriculumModalComponent, {
      width: '700px',
      height: '530px',
      data: {
        personal: cv.personal,
        skills: cv.skills,
        experience: cv.experience,
        education: cv.education
      },
      autoFocus: false
    });
  }

}
