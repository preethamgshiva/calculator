import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-percentage-calculator',
  imports: [FormsModule],
  template: `
    <h2 class="text-center p-4">Percentage Calculator</h2>
    <div class="percentage-calculator p-5 align-items-center">
        <div class="calculator-container align-items-center flex-row">
          <input type="number" placeholder="Enter percentage %" class="h-64 rounded" [(ngModel)]="percentage"><span class="px-4">% of</span>
          <input type="number" placeholder="Enter value" class="h-[300px] w-[300px] rounded" [(ngModel)]="value"><span class="px-4">=</span>
          <input type="number" placeholder="Result" class="h-[300px] w-[300px] rounded" [(ngModel)]="result">
        </div>
        <div class="p-5">
          <button (click)="calculate()" class="btn btn-primary m-4 ">Calculate</button>
          <button class="m-4 btn btn-primary" (click)="clear()">Clear</button>
        </div>
    </div>
  `,
  styleUrl: './percentage-calculator.css'
})
export class PercentageCalculator {
  percentage: number = 0;
  value: number = 0;
  result: number = 0;
  calculate(){
    this.result = this.value * (this.percentage/100);
  }
  clear(){
    this.percentage = 0;
    this.value = 0;
    this.result = 0;
  }
} 
