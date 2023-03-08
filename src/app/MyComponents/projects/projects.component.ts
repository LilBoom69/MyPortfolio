import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Airline Management System',
      technologies: 'HTML & CSS ,JavaScript ,MySQL',
      description: [
        'HTML, CSS , JavaScript and BootStrap used in frontend.', 
        'Java Servlets used in backend.', 
        'MySQL used for database.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
