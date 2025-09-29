import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface AmortizationRow {
  year: number;
  interest: number;
  principal: number;
  balance: number;
}

@Component({
  selector: 'app-amortization-calculator',
  standalone: true,
  imports: [FormsModule, DecimalPipe, NgIf, NgFor],
  template: `
    <h3 class="text-center p-2">Amortization Calculator</h3>
    <div class="container border p-3">
      <label>Loan Amount: 
        <input type="number" [(ngModel)]="loanAmount" class="form-control m-2">
      </label>
      <label>Loan Term (years): 
        <input type="number" [(ngModel)]="loanTerm" class="form-control m-2">
      </label>
      <label>Interest Rate (% per year): 
        <input type="number" [(ngModel)]="interestRate" class="form-control m-2">
      </label>
      <button class="btn btn-primary m-2" (click)="calculate()">Calculate</button>
    </div>

    <div *ngIf="schedule.length > 0" class="p-3">
      <h4>Amortization Schedule</h4>
      <table class="table table-bordered table-striped text-center">
        <thead class="table-dark">
          <tr>
            <th>Year</th>
            <th>Interest</th>
            <th>Principal</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of schedule">
            <td>{{ row.year }}</td>
            <td>{{ row.interest | number:'1.2-2' }}</td>
            <td>{{ row.principal | number:'1.2-2' }}</td>
            <td>{{ row.balance | number:'1.2-2' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrl: './amortization-calculator.css'
})
export class AmortizationCalculator {
  loanAmount: number = 0;
  loanTerm: number = 0; // in years
  interestRate: number = 0; // annual %
  schedule: AmortizationRow[] = [];

  calculate() {
    this.schedule = [];
    const P = this.loanAmount;
    const n = this.loanTerm;
    const r = this.interestRate / 100;

    if (P <= 0 || n <= 0 || r <= 0) return;

    // Annual payment formula
    const annualPayment = (P * r) / (1 - Math.pow(1 + r, -n));

    let balance = P;
    for (let year = 1; year <= n; year++) {
      const interest = balance * r;
      const principal = annualPayment - interest;
      balance -= principal;

      // avoid floating point residue in last year
      if (year === n) balance = 0;

      this.schedule.push({
        year,
        interest,
        principal,
        balance: balance < 0 ? 0 : balance
      });
    }
  }
}
