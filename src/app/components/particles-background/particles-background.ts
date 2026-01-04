import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgxParticlesModule } from '@tsparticles/angular';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';
import type { Container } from '@tsparticles/engine';

@Component({
  selector: 'app-particles-background',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './particles-background.html',
  styleUrl: './particles-background.scss'
})
export class ParticlesBackground {
  id = 'tsparticles';
  private platformId = inject(PLATFORM_ID);

  particlesOptions = {
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push'
        },
        onHover: {
          enable: true,
          mode: 'repulse'
        }
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: '#6366f1'
      },
      links: {
        color: '#6366f1',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      move: {
        direction: 'none' as const,
        enable: true,
        outModes: {
          default: 'bounce' as const
        },
        random: false,
        speed: 1,
        straight: false
      },
      number: {
        density: {
          enable: true
        },
        value: isPlatformBrowser(this.platformId) && window.innerWidth < 768 ? 40 : 80
      },
      opacity: {
        value: 0.3
      },
      shape: {
        type: 'circle' as const
      },
      size: {
        value: { min: 1, max: 3 }
      }
    },
    detectRetina: true
  };

  particlesInit = async (engine: Engine): Promise<void> => {
    await loadSlim(engine);
  };

  particlesLoaded(container: Container): void {
    // Optional callback when particles are loaded
  }
}
