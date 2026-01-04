import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { fadeInUp, fadeIn, scaleIn } from '../../services/animations';
import { trigger, state, style, animate, transition, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  animations: [
    trigger('staggerItems', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    fadeInUp,
    fadeIn,
    scaleIn
  ]
})
export class Hero implements OnInit, OnDestroy {
  name = 'Rohith Pasuveswaran';
  roles = ['Full Stack Developer', 'Software Engineer', 'Creative Technologist','Angular Developer'];
  currentRole = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  techIcons = ['⚛️', '🎨', '🚀', '💻', '⚡', '🔥'];
  private typingTimer: any = null;

  ngOnInit(): void {
    // Small delay to ensure component is fully rendered
    setTimeout(() => {
      this.typeRole();
    }, 500);
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }

  typeRole(): void {
    const current = this.roles[this.roleIndex];
    
    if (!this.isDeleting) {
      // Typing mode
      if (this.charIndex < current.length) {
        this.currentRole = current.substring(0, this.charIndex + 1);
        this.charIndex++;
        this.typingTimer = setTimeout(() => {
          this.typeRole();
        }, 100);
      } else {
        // Finished typing, wait then start deleting
        this.typingTimer = setTimeout(() => {
          this.isDeleting = true;
          this.typeRole();
        }, 2000);
      }
    } else {
      // Deleting mode
      if (this.charIndex > 0) {
        this.charIndex--;
        this.currentRole = current.substring(0, this.charIndex);
        this.typingTimer = setTimeout(() => {
          this.typeRole();
        }, 50);
      } else {
        // Finished deleting, move to next role
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.charIndex = 0;
        this.typingTimer = setTimeout(() => {
          this.typeRole();
        }, 200);
      }
    }
  }
}
