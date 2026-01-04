import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {
  navItems = [
    { label: 'About', route: '/hero' },
    { label: 'Experience', route: '/work-experience' },
    { label: 'Skills', route: '/skills' },
    { label: 'Certificates', route: '/certificates' },
    { label: 'Resume', route: '/resume' },
    { label: 'Contact', route: '/contact' },
    { label: 'Profiles', route: '/coding-profiles' }
  ];
}
