import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp, fadeIn, scaleIn } from '../../services/animations';
import { trigger, query, stagger, animate, style, transition } from '@angular/animations';

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  link?: string;
  image?: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
  animations: [
    trigger('staggerCards', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.9)' }),
          stagger(100, [
            animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true })
      ])
    ]),
    fadeInUp,
    fadeIn,
    scaleIn
  ]
})
export class Certificates {
  certificates: Certificate[] = [
    {
      title: 'Angular Deep Dive –\nBeginner to Advanced\n(Angular 18)',
      issuer: 'Angular University',
      date: '11-11-2024',
      credentialId: 'UC-491aab92-937f-46aa-a176-a6b49657b2c13',
      link: 'https://www.udemy.com/certificate/UC-491aab92-937f-46aa-a176-a6b49657b2c1/'
    },
    {
      title: 'Complete Angular Course 2024',
      issuer: 'Denis Panjuta, Jannick Leismann',
      date: '20-11-2024',
      credentialId: 'UC-5602b722-95e3-48c4-a2ce-69870a0e1d7c',
      link: 'https://www.udemy.com/certificate/UC-5602b722-95e3-48c4-a2ce-69870a0e1d7c/'
    }
  ];

  selectedCertificate: Certificate | null = null;

  selectCertificate(cert: Certificate): void {
    this.selectedCertificate = cert;
  }

  closeModal(): void {
    this.selectedCertificate = null;
  }
}
