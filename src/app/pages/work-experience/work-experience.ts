import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, fadeIn } from '../../services/animations';
import { trigger, query, stagger, animate, style, transition } from '@angular/animations';

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.html',
  styleUrl: './work-experience.scss',
  animations: [
    trigger('staggerCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          stagger(150, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    fadeInUp,
    fadeIn
  ]
})
export class WorkExperience {
  experiences: Experience[] = [
    {
      company: 'Allstate India Pvt Ltd',
      role: 'Software Engineer Analyst',
      duration: 'Sep 2025 – Present',
      location: 'Bangalore, Karnataka, India',
      description: [
        'Integrated LaunchDarkly feature toggles for Allstate One Key to enable controlled rollouts and seamless redirections',
        'Migrated customer-communication-rule from a standard payload to a single payload, improving efficiency (30% faster API response; 40% lower processing overhead)',
        'Connected MCP servers from Figma into Angular applications using AI-assisted workflows (GitHub Copilot), streamlining integration and reducing manual steps',
        'Built UI automation for single-payload migration and comm-template-apps using Java + Selenium to increase test coverage and reliability'
      ],
      technologies: ['Angular', 'Java', 'Spring Boot', 'LaunchDarkly', 'Selenium', 'GitHub Copilot', 'Figma']
    },
    {
      company: 'Allstate India Pvt Ltd',
      role: 'Apprentice Associate III',
      duration: 'Oct 2024 – Sep 2025',
      location: 'Bangalore, Karnataka, India',
      description: [
        'Led migrations of Angular applications (v14 → v19) including ng-email-viewer, ng-shipping-label-viewer, ng-registration, ng-telenor, ng-claims-admin, ng-partner-self-bill-portal, ng-stgo-portal, ng-claim-resolution-rule',
        'Upgraded CTA templates from standard to taxi versions, ensuring consistency and improved performance through design improvements',
        'Resolved unit test failures; reviewed pull requests and provided actionable feedback to enhance code quality',
        'Set up new Angular projects, advised best practices, and supported QA in debugging and issue resolution'
      ],
      technologies: ['Angular', 'TypeScript', 'JavaScript', 'Jasmine/Karma', 'HTML', 'CSS']
    }
  ];
}
