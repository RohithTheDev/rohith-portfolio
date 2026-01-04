import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { fadeInUp, fadeIn, scaleIn } from '../../services/animations';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  animations: [fadeInUp, fadeIn, scaleIn]
})
export class Resume {
  currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  profileInfo = {
    name: 'ROHITH PASUVESWARAN',
    phone: '9342104957',
    email: 'rohithpasuveswaran.2112@gmail.com',
    linkedin: 'https://in.linkedin.com/in/rohith-pasuveswaran-423969225'
  };

  professionalSummary = 'Results-driven Software Engineer with expertise in Angular, Java, Spring Boot, and UI Automation. Skilled in migrating complex applications, integrating AI technologies, and optimizing performance. Adept at collaborating in Agile environments and delivering high-quality solutions.';

  technicalSkills = {
    'Frontend': ['Angular (14–19)', 'AngularJS', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
    'Backend': ['Java', 'Spring Boot', 'REST APIs', 'Databases'],
    'Testing': ['Unit Testing (Jasmine/Karma)', 'UI Automation (Selenium)', 'Test Suites'],
    'Tools': ['Git', 'GitHub', 'GitHub Copilot', 'LaunchDarkly', 'Figma', 'Splunk'],
    'DevOps': ['CI/CD pipelines'],
    'Methodologies': ['Agile/Scrum', 'Code Reviews', 'Design Systems']
  };

  workExperience = [
    {
      position: 'Software Engineer Analyst',
      company: 'Allstate India Pvt Ltd',
      duration: 'Sep 2025 – Present',
      responsibilities: [
        'Integrated LaunchDarkly feature toggles for Allstate One Key to enable controlled rollouts and seamless redirections.',
        'Migrated customer-communication-rule from a standard payload to a single payload, improving efficiency (30% faster API response; 40% lower processing overhead).',
        'Connected MCP servers from Figma into Angular applications using AI-assisted workflows (GitHub Copilot), streamlining integration and reducing manual steps.',
        'Built UI automation for single-payload migration and comm-template-apps using Java + Selenium to increase test coverage and reliability.'
      ]
    },
    {
      position: 'Apprentice Associate III',
      company: 'Allstate India Pvt Ltd',
      duration: 'Oct 2024 – Sep 2025',
      responsibilities: [
        'Led migrations of Angular applications (v14 → v19) including ng-email-viewer, ng-shipping-label-viewer, ng-registration, ng-telenor, ng-claims-admin, ng-partner-self-bill-portal, ng-stgo-portal, ng-claim-resolution-rule.',
        'Upgraded CTA templates from standard to taxi versions, ensuring consistency and improved performance through design improvements.',
        'Resolved unit test failures; reviewed pull requests and provided actionable feedback to enhance code quality.',
        'Set up new Angular projects, advised best practices, and supported QA in debugging and issue resolution.'
      ]
    }
  ];

  projects = [
    {
      title: 'Customer Communication Single-Payload Migration',
      technologies: 'Java, Spring Boot, Selenium',
      description: 'Reduced API response by 30% and processing overhead by 40%.'
    },
    {
      title: 'Allstate One Key Feature Toggle Integration',
      technologies: 'Angular, LaunchDarkly',
      description: 'Implemented controlled rollout and seamless page redirection.'
    },
    {
      title: 'Angular v19 Modernization',
      technologies: 'Multiple ng-* apps',
      description: 'Upgraded frameworks, fixed unit tests, and improved consistency across design systems.'
    },
    {
      title: 'CTA Template Modernization',
      technologies: 'Angular, Design Systems',
      description: 'Migrated templates from standard to taxi versions to optimize performance and maintainability.'
    }
  ];

  education = [
    {
      degree: 'MCA',
      field: 'Master of Computer Applications',
      period: '2021–2023',
      institution: 'A.V.C. College of Engineering',
      percentage: '75%'
    },
    {
      degree: 'B.Sc.',
      field: 'Computer Science',
      period: '2018–2021',
      institution: 'A.V.C. College of Engineering',
      percentage: '74%'
    }
  ];

  certifications = [
    {
      title: 'Java Full Stack Development',
      issuer: 'Besant Technologies'
    },
    {
      title: 'Angular Deep Dive',
      issuer: 'Udemy'
    }
  ];

  softSkills = ['Communication', 'Problem Solving', 'Analytical Thinking', 'Time Management', 'Attention to Detail', 'Adaptability', 'Team Player', 'Self-Learner', 'Agile'];

  downloadResume(): void {
    const candidates = [
      '/assets/Rohith_Pasuveswaran.pdf',
      '/assets/resume.pdf',
      '/Rohith_Pasuveswaran.pdf',
      '/resume.pdf'
    ];

    const tryFetch = (index: number) => {
      if (index >= candidates.length) {
        this.downloadFallback();
        return;
      }

      const url = candidates[index];
      fetch(url, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            const link = document.createElement('a');
            link.href = url;
            // force consistent download filename
            link.download = 'Rohith_pasuveswaran.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            console.log('Downloading resume PDF from', url);
          } else {
            tryFetch(index + 1);
          }
        })
        .catch(() => {
          tryFetch(index + 1);
        });
    };

    tryFetch(0);
  }

  private downloadFallback(): void {
    const lines: string[] = [];
    lines.push(this.profileInfo.name);
    lines.push(`Phone: ${this.profileInfo.phone} | Email: ${this.profileInfo.email}`);
    lines.push(`LinkedIn: ${this.profileInfo.linkedin}`);
    lines.push('');
    lines.push('PROFESSIONAL SUMMARY');
    lines.push(this.professionalSummary);
    lines.push('');
    lines.push('TECHNICAL SKILLS');
    for (const [k, v] of Object.entries(this.technicalSkills)) {
      lines.push(`${k}: ${v.join(', ')}`);
    }
    lines.push('');
    lines.push('WORK EXPERIENCE');
    for (const job of this.workExperience) {
      lines.push(`${job.position} — ${job.company} (${job.duration})`);
      for (const r of job.responsibilities) {
        lines.push(`- ${r}`);
      }
      lines.push('');
    }
    lines.push('PROJECTS');
    for (const p of this.projects) {
      lines.push(`${p.title} — ${p.technologies}`);
      lines.push(`${p.description}`);
      lines.push('');
    }

    lines.push('EDUCATION');
    for (const e of this.education) {
      lines.push(`${e.degree} ${e.field} — ${e.institution} (${e.period}) — ${e.percentage}`);
    }

    lines.push('');
    lines.push('CERTIFICATIONS');
    for (const c of this.certifications) {
      lines.push(`${c.title} — ${c.issuer}`);
    }

    lines.push('');
    lines.push('SOFT SKILLS');
    lines.push(this.softSkills.join(', '));

    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Rohith_pasuveswaran.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    console.log('Downloaded resume fallback (text).');
  }
}
