import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auto-loan-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="p-2 text-center">Auto Loan Calculator</h3>
    <div class="container p-2 border">
      Auto Price: <input type="number" class="m-2" [(ngModel)]="autoPrice">
      <br>
      Loan Term: <input type="number" class="m-2" [(ngModel)]="loanTerm"> in months
      <br>
      Interest Rate: <input type="number" class="m-2" [(ngModel)]="interestRate">%
      <br>
      Down Payment: <input type="number" class="m-2" [(ngModel)]="downPayment">
      <br>
      Sales Tax: <input type="number" class="m-2" [(ngModel)]="salesTax">%
      <br>
      <button class="btn btn-primary m-2" (click)="calculateLoan()">Calculate</button>
    </div>
    <div class="container p-2 border">
      Monthly Payment: {{result}}
    </div>
  `,
  styleUrl: './auto-loan-calculator.css'
})
export class AutoLoanCalculator {
  result: number = 0;
  monthlyPayment: number = 0;

  autoPrice: number = 0;     // Car price before tax
  loanTerm: number = 0;      // In months
  interestRate: number = 0;  // Annual % rate
  downPayment: number = 0;   // Down payment
  salesTax: number = 0;      // % tax

  calculateLoan(): void {
    // Principal after tax & downpayment
    const principal = this.autoPrice * (1 + this.salesTax / 100) - this.downPayment; 
    const monthlyRate = this.interestRate / 100 / 12;
    const n = this.loanTerm; // months

    // If no interest (0%), avoid divide-by-zero
    if (monthlyRate === 0) {
      this.monthlyPayment = principal / n;
    } else {
      this.monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
    }

    // Total = all payments + downpayment
    this.result = (this.monthlyPayment * n) + this.downPayment;
  }
}

