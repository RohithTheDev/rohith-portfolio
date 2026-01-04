import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/hero',
    pathMatch: 'full'
  },
  {
    path: 'hero',
    loadComponent: () => import('./pages/hero/hero').then(m => m.Hero)
  },
  {
    path: 'work-experience',
    loadComponent: () => import('./pages/work-experience/work-experience').then(m => m.WorkExperience)
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills/skills').then(m => m.Skills)
  },
  {
    path: 'certificates',
    loadComponent: () => import('./pages/certificates/certificates').then(m => m.Certificates)
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume').then(m => m.Resume)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
  },
  {
    path: 'coding-profiles',
    loadComponent: () => import('./pages/coding-profiles/coding-profiles').then(m => m.CodingProfiles)
  },
  {
    path: '**',
    redirectTo: '/hero'
  }
];
