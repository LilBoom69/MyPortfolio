import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Anis Noel Kispotta'],
    ['DOB', '04/12/1999'],
    ['Work Exp', '0 Years'],
    ['Education', 'CSE (2019-2023)'],
    ['Interests', 'Video Games'],
  ];

  aboutMe: string[] = [
    'Hi, I am a CSE student with knowledge in Web Development.', 
    'Strong motivational and leadership skills.',
    'Ability to work under pressure.',
    'Ability to work individual as well as in team.',
  ];

  constructor() {}

  ngOnInit(): void {}
}
