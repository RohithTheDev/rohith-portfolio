import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, fadeIn } from '../../services/animations';
import { trigger, query, stagger, animate, style, transition } from '@angular/animations';

export interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  animations: [
    trigger('staggerSkills', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    fadeInUp,
    fadeIn
  ]
})
export class Skills {
  skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular (14-19)', level: 95 },
        { name: 'AngularJS', level: 85 },
        { name: 'TypeScript', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Databases', level: 80 }
      ]
    },
    {
      category: 'Testing',
      skills: [
        { name: 'Unit Testing (Jasmine/Karma)', level: 90 },
        { name: 'UI Automation (Selenium)', level: 85 },
        { name: 'Test Suites', level: 85 }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'GitHub', level: 90 },
        { name: 'GitHub Copilot', level: 85 },
        { name: 'LaunchDarkly', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'Splunk', level: 75 }
      ]
    },
    {
      category: 'DevOps & Methodologies',
      skills: [
        { name: 'CI/CD Pipelines', level: 80 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Code Reviews', level: 90 },
        { name: 'Design Systems', level: 85 }
      ]
    }
  ];

  getProgressWidth(level: number): string {
    return `${level}%`;
  }

  additionalSkills = [
    'Agile/Scrum', 'Code Reviews', 'Design Systems',
    'Performance Optimization', 'Migration Projects', 'Feature Toggles',
    'UI Automation', 'Unit Testing', 'Test Coverage', 'Best Practices'
  ];
}
