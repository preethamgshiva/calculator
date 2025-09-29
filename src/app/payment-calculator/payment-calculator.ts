import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="text-center p-2">Payment Calculator</h3>
    <div class="container border p-2">
      Loan Amount: <input type="number" [(ngModel)]="loanAmount" class="p-2 m-2"/>
      <br>
      Loan Term: <input type="number" [(ngModel)]="loanTerm" class="p-2 m-2"/>
      <br>
      Interest Rate: <input type="number" [(ngModel)]="interestRate" class="p-2 m-2"/>
      <br>
      <button class="btn btn-primary" (click)="calculateLoan()">Calculate</button>
    </div>
    <br>
    <div class="container border p-2">
      Monthly Payment: {{ monthlyPayment }}
      <br>
      Total Payment: {{ totalPayment }}
      <br>
      Total Interest: {{ totalInterest }}
    </div>
  `,
  styleUrl: './payment-calculator.css'
})
export class PaymentCalculator {
  loanAmount: number = 0;     // Principal loan amount
  loanTerm: number = 0;       // Years
  interestRate: number = 0;   // Annual rate in percent

  monthlyPayment: number = 0;
  totalPayment: number = 0;
  totalInterest: number = 0;

  calculateLoan(): void {
    const n = this.loanTerm * 12;               // total months
    const monthlyRate = this.interestRate / 100 / 12; // monthly interest rate

    if (monthlyRate === 0) {
      this.monthlyPayment = this.loanAmount / n;
    } else {
      this.monthlyPayment =
        (this.loanAmount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);
    }

    this.totalPayment = this.monthlyPayment * n;
    this.totalInterest = this.totalPayment - this.loanAmount;
  }
}
