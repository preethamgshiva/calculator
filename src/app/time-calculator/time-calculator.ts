import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-time-calculator',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h3 class="p-2 text-center">Time Calculator</h3>
    <div class="container border d-flex">
      <table class="table border text-center">
        <tr>
          <th>Day</th>
          <th>Hours</th>
          <th>Minutes</th>
          <th>Seconds</th>
        </tr>

        <!-- First input -->
        <tr>
          <td><input type="number" [(ngModel)]="Day1" /></td>
          <td><input type="number" [(ngModel)]="Hours1" /></td>
          <td><input type="number" [(ngModel)]="Minutes1" /></td>
          <td><input type="number" [(ngModel)]="Seconds1" /></td>
        </tr>

        <!-- Operation -->
        <tr class="fs-4">
          <td colspan="2">
            Add <input type="radio" name="op" [(ngModel)]="operation" value="add" />
          </td>
          <td colspan="2">
            Subtract <input type="radio" name="op" [(ngModel)]="operation" value="subtract" />
          </td>
        </tr>

        <!-- Second input -->
        <tr>
          <td><input type="number" [(ngModel)]="Day2" /></td>
          <td><input type="number" [(ngModel)]="Hours2" /></td>
          <td><input type="number" [(ngModel)]="Minutes2" /></td>
          <td><input type="number" [(ngModel)]="Seconds2" /></td>
        </tr>
      </table>
    </div>

    <div class="text-center p-3">
      <button class="btn btn-primary" (click)="calculate()">Calculate</button>
    </div>

    <h2 class="text-center p-2">Result</h2>
    <div class="container d-flex justify-content-center">
      <table class="table border text-center w-50">
        <tr>
          <th>Day</th>
          <th>Hours</th>
          <th>Minutes</th>
          <th>Seconds</th>
        </tr>
        <tr>
          <td><input type="text" [value]="RDay" readonly /></td>
          <td><input type="text" [value]="RHours" readonly /></td>
          <td><input type="text" [value]="RMinutes" readonly /></td>
          <td><input type="text" [value]="RSeconds" readonly /></td>
        </tr>
      </table>
    </div>
  `,
  styleUrl: './time-calculator.css'
})
export class TimeCalculator {
  Day1 = 0; Hours1 = 0; Minutes1 = 0; Seconds1 = 0;
  Day2 = 0; Hours2 = 0; Minutes2 = 0; Seconds2 = 0;

  RDay = 0; RHours = 0; RMinutes = 0; RSeconds = 0;

  operation: 'add' | 'subtract' = 'add';

  calculate() {
    // Convert both to seconds
    const total1 = this.Day1 * 86400 + this.Hours1 * 3600 + this.Minutes1 * 60 + this.Seconds1;
    const total2 = this.Day2 * 86400 + this.Hours2 * 3600 + this.Minutes2 * 60 + this.Seconds2;

    let result = 0;
    if (this.operation === 'add') {
      result = total1 + total2;
    } else {
      result = total1 - total2;
      if (result < 0) result = 0; // no negative times
    }

    // Convert back into d/h/m/s
    this.RDay = Math.floor(result / 86400);
    result %= 86400;
    this.RHours = Math.floor(result / 3600);
    result %= 3600;
    this.RMinutes = Math.floor(result / 60);
    this.RSeconds = result % 60;
  }
}
