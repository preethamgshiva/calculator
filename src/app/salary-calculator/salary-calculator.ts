import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-salary-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="text-center p-2">Salary Calculator</h3>
    <div class="container p-2 border">
      <label for="salary">Salary Amount <input type="number" class="p-2 m-2" placeholder="Enter Salary" [(ngModel)]="salary" >  Per hour</label>
      <br>
      <label for="hour">Hours per week <input type="number" class="p-2 m-2" placeholder="Enter Hours per week" [(ngModel)]="hours" > </label>
      <br>
      <label for="days">Days per week <input type="number" class="p-2 m-2" placeholder="Enter Days per week" [(ngModel)]="days" > </label>
      <br>
      <label for="holidays">Holidays per year <input type="number" class="p-2 m-2" placeholder="Enter Holidays per year" [(ngModel)]="holidays"></label>
      <br>
      <label for="vacations">Vacations per year <input type="number" class="p-2 m-2" placeholder="Enter Vacations per year" [(ngModel)]="vacations"></label>
      <button class="btn btn-primary" (click)="calculate()">Calculate</button>
    </div>
    <div class="container p-2 border">
      <h3 class="text-center p-2">Result</h3>
      <p>Total Salary: {{result}} <br> Total Salary excluding Holidays: {{resultHolidays}}</p>
    </div>
  `,
  styleUrl: './salary-calculator.css'
})
export class SalaryCalculator {
  salary: number = 0;
  hours: number = 0;
  days: number = 0;
  holidays: number = 0;
  vacations: number = 0;
  resultHolidays: number = 0;
  result: number = 0;
  totalDays: number = 0;
  totalHDays: number = 0;
  calculate(){
    this.hours = this.hours / this.days;
    this.totalDays = (52*this.days)
    this.totalHDays = this.totalDays - this.holidays - this.vacations;
    this.result = this.salary * this.totalDays * this.hours;
    this.resultHolidays = this.salary * this.totalHDays * this.hours;
  }
}
