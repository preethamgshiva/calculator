import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="p-2 text-center">Date Calculator</h3>
    <div class="container border">
      <div class="d-inline">
        <div class="d-inline">
          <p class="fs-4 p-2">Start Date</p>
          <input type="date" class="p-2" [(ngModel)]="sDate">
        </div>
        <div class="d-inline">
          <p class="fs-4 p-2">End Date</p>
          <input type="date" class="p-2" [(ngModel)]="eDate">
        </div>
      </div>
      <br><br>
      <button class="btn btn-primary m-2" (click)="calculate()">Calculate</button>
      <p class="fs-4 p-2">Result: {{result}}</p>
    </div>
  `,
  styleUrl: './date-calculator.css'
})
export class DateCalculator {
  sDate: string = '';
  eDate: string = '';
  result: string = '';

  calculate() {
    if (!this.sDate || !this.eDate) {
      this.result = 'Please select both dates.';
      return;
    }

    const start = new Date(this.sDate);
    const end = new Date(this.eDate);

    if (end < start) {
      this.result = 'End date must be after start date.';
      return;
    }

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      // borrow days from previous month
      months--;
      const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += prevMonth.getDate();
    }

    if (months < 0) {
      months += 12;
      years--;
    }

    this.result = `${years} years, ${months} months, ${days} days`;
  }
}
