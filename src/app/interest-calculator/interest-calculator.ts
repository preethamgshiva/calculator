import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interest-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="text-center p-2">Interest Calculator</h3>
    <div class="container border">
        Initial Investment: <input type="number" placeholder="Initial Investment" class="m-2" [(ngModel)]="initialInvestment">
        <br>
        Monthly Deposit: <input type="number" placeholder="Monthly Deposit" class="m-2" [(ngModel)]="monthlyDeposit">
        <br>
        Interest Rate: <input type="number" placeholder="Interest Rate" class="m-2" [(ngModel)]="interestRate">%  
        <br>
        Loan Term: <input type="number" placeholder="Loan Term" class="m-2" [(ngModel)]="loanTerm">in years
        <br>
        <button class="btn btn-primary p-2 m-3" (click)="calculate()">Calculate</button>
    </div>
    <br>
    <div class="container border">
        <h3 class=" p-2">Result: {{result}}</h3>
    </div>
  `,
  styleUrl: './interest-calculator.css'
})
export class InterestCalculator {
  result = 0
  initialInvestment = 0
  monthlyDeposit = 0
  interestRate = 0
  loanTerm = 0

  calculate() {
    const monthlyRate = this.interestRate / 100 / 12;
    const n = this.loanTerm * 12; // months
    this.result = this.initialInvestment * Math.pow(1 + monthlyRate, n) 
                + this.monthlyDeposit * (Math.pow(1 + monthlyRate, n) - 1) / monthlyRate;
}

}
