import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Techno Main Saltlake",
      course: 'Btech-CSE',
      duration: '2019-2023',
      score: '80%',
    },
    {
      institute: 'Karunya Christian School',
      course: 'HSC',
      duration: '2018-2019',
      score: '60%',
    },
    {
      institute: 'Karunya Christian School',
      course: 'SSC',
      duration: '2016-2017',
      score: '81%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
