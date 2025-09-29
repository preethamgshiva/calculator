import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { SimpleCalculator } from './simple-calculator/simple-calculator';
import { ScientificCalculator } from './scientific-calculator/scientific-calculator';
import { FractionCalculator } from "./fraction-calculator/fraction-calculator";
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, RouterModule, Navbar],
  template: `
    <app-navbar/>
    <router-outlet></router-outlet>

  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('calculator-project');
}
