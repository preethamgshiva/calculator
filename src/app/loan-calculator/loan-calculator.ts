import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="text-center p-2">Loan Calculator</h3>
    <div class="container border p-4">
      Loan Amount:   <input type="number" class="m-2" [(ngModel)]="loanAmount">
      <br>
      Loan Term:    <input type="number" class="m-2" [(ngModel)]="years"> In Years
      <br>
      Interest Rate: <input type="number" class="m-2" [(ngModel)]="rate"> %
      <br>
      <button class="btn btn-primary m-2" (click)="calculate()">Calculate</button>
    </div>

    <div class="container border p-4">
      <h3>Loan: <span>{{result}} Rupees per month</span></h3>
      <h3>Total Intersest: <span>{{totalInterest}} rupees</span></h3>
    </div>
  `,
  styleUrl: './loan-calculator.css'
})
export class LoanCalculator {
  loanAmount: number = 0;
  years: number = 0;
  rate: number = 0;
  result: number = 0;
  totalInterest: number = 0;

  calculate() {
    this.result = this.loanAmount * this.rate / 100 / 12 * (1 + this.rate / 100 / 12) ** (this.years * 12) / ((1 + this.rate / 100 / 12) ** (this.years * 12) - 1);
    this.totalInterest = this.result * this.years * 12;
  }
}
