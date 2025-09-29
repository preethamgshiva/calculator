import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="text-center p-2">Mortgage Calculator</h3>
    <div class="container border p-4">
      Home Price:   <input type="number" class="m-2" [(ngModel)]="homeprice">
      <br>
      Loan Term:    <input type="number" class="m-2" [(ngModel)]="years"> In Years
      <br>
      Interest Rate: <input type="number" class="m-2" [(ngModel)]="rate"> %
      <br>
      <button class="btn btn-primary m-2" (click)="calculate()">Calculate</button>
    </div>

    <div class="container border p-4">
      <h3>Mortgage: <span>{{result}} Rupees per month</span></h3>
    </div>
  `,
  styleUrl: './mortgage-calculator.css'
})
export class MortgageCalculator {
  result: number = 0;
  years = 0;
  r =0
  n = 0
  rate = 0
  homeprice = 0;

  calculate(){
    this.n = this.years * 12;
    this.r = this.rate / (100*12);
    this.result = this.homeprice * this.r * Math.pow(1 + this.r, this.n) / (Math.pow(1 + this.r, this.n) - 1);
  }
}
