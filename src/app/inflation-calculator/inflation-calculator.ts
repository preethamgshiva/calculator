import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inflation-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="text-center p-2">Inflation Calculator</h3>
    <div class="container p-2 border">
      <input type="number" class="p-2" [(ngModel)]="presentValue">rupees with inflation rate <input type="number" class="p-2" [(ngModel)]="inflationRate">% after <input type="number" class="p-2" [(ngModel)]="years"> years
      <br>
      <button class="btn btn-primary" (click)="calculate()">Calculate</button>
    </div>
    <div>
      <h3 class="text-center p-2">Result: {{result}} rupees</h3>
    </div>
  `,
  styleUrl: './inflation-calculator.css'
})
export class InflationCalculator {
  presentValue = 0
    inflationRate = 0
    years = 0
    result = 0
  calculate(){
    this.result = this.presentValue * Math.pow(1+0.03, this.years);
  }
}
