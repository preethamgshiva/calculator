import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  imports: [NgFor],
  standalone: true,
  template: `
    <h2 class="title text-center p-4">Age Calculator</h2>
    <div class="container border p-3">
      <h5>
        Date of Birth: 
        <select #dobDay class="p-2 m-2">
          <option *ngFor="let d of days" [value]="d">{{d}}</option>
        </select>
        <select #dobMonth class="p-2 m-2">
          <option *ngFor="let m of months" [value]="m.value">{{m.name}}</option>
        </select>
        <input #dobYear type="number" class="p-2 m-2" placeholder="Year">
      </h5>

      <h5>
        Age at the date of: 
        <select #refDay class="p-2 m-2">
          <option *ngFor="let d of days" [value]="d">{{d}}</option>
        </select>
        <select #refMonth class="p-2 m-2">
          <option *ngFor="let m of months" [value]="m.value">{{m.name}}</option>
        </select>
        <input #refYear type="number" class="p-2 m-2" placeholder="Year">
      </h5>

      <button class="btn btn-primary"
              (click)="calculate(dobDay.value, dobMonth.value, dobYear.value, refDay.value, refMonth.value, refYear.value)">
        Calculate Age
      </button>

      <br><br>
      <h4>Age: {{output}}</h4>
    </div>
  `,
  styleUrls: ['./age-calculator.css']
})
export class AgeCalculator {
  output = 0;

  days = Array.from({ length: 31 }, (_, i) => i + 1);

  months = [
    { value: 1, name: 'January' },
    { value: 2, name: 'February' },
    { value: 3, name: 'March' },
    { value: 4, name: 'April' },
    { value: 5, name: 'May' },
    { value: 6, name: 'June' },
    { value: 7, name: 'July' },
    { value: 8, name: 'August' },
    { value: 9, name: 'September' },
    { value: 10, name: 'October' },
    { value: 11, name: 'November' },
    { value: 12, name: 'December' },
  ];

  calculate(dDay: string, dMonth: string, dYear: string, rDay: string, rMonth: string, rYear: string) {
  const dob = new Date(+dYear, +dMonth - 1, +dDay);
  const refDate = new Date(+rYear, +rMonth - 1, +rDay);

  let age = refDate.getFullYear() - dob.getFullYear();
  const m = refDate.getMonth() - dob.getMonth();

  if (m < 0 || (m === 0 && refDate.getDate() < dob.getDate())) {
    age--;
  }

  this.output = age;
}

}
