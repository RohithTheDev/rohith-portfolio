import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, fadeIn } from '../../services/animations';
import { trigger, query, stagger, animate, style, transition } from '@angular/animations';

export interface Profile {
  name: string;
  icon: string;
  url: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-coding-profiles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coding-profiles.html',
  styleUrl: './coding-profiles.scss',
  animations: [
    trigger('staggerCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'rotateY(90deg)' }),
          stagger(100, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'rotateY(0deg)' }))
          ])
        ], { optional: true })
      ])
    ]),
    fadeInUp,
    fadeIn
  ]
})
export class CodingProfiles {
  profiles: Profile[] = [
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/RohithTheDev',
      description: 'Check out my code repositories and projects',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/rohith-pasuveswaran-423969225/ ',
      description: 'Connect with me on LinkedIn',
      color: '#0077b5'
    }
  ];

  openProfile(url: string, event: Event): void {
    event.preventDefault();
    // Add a subtle animation before navigating
    const target = event.target as HTMLElement;
    target.style.transform = 'scale(0.95)';
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      target.style.transform = '';
    }, 150);
  }
}
