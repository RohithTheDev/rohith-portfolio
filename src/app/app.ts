import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { ParticlesBackground } from './components/particles-background/particles-background';
import { routeAnimations } from './services/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigation, ParticlesBackground],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  animations: [routeAnimations]
})
export class App {
  title = 'Portfolio';

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
