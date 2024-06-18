import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports:[HomeComponent, RouterModule],
//   template: ` <main>
//   <header class="brand-name">
//     <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
//   </header>
//   <section class="content">
//   <app-home></app-home>
//   </section>
// </main>`,
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  template:`<main>
  <a [routerLink]="['/']">
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
  </a>
  <section class="content">
    <router-outlet></router-outlet>
  </section>
</main>`,
})
export class AppComponent {
  title = 'my-angular-app';
}
