import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hours-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="p-2 text-center">Hours Calculator</h3>
    <div class="container border">
        <table class="table p-2">
            <tr class="p-2 m-2">
                <td class="p-2">Start Time: </td>
                <td class="p-2"><input type="time" [(ngModel)]="startTime"></td>
            </tr>
            <tr class="p-2 m-2">
                <td class="p-2">End Time: </td>
                <td class="p-2"><input type="time" [(ngModel)]="endTime"></td>
            </tr>
        </table>

        <div class="container border">
            <button class="btn btn-primary" (click)="calculate()">Calculate</button>
            <h4 class="p-2">Result: {{result}} Hours</h4>
        </div>
    </div>
  `,
  styleUrl: './hours-calculator.css'
})
export class HoursCalculator {
  startTime = '';
  endTime = '';
  result = '';

  calculate() {
    const start = new Date(`2000-01-01T${this.startTime}`);
    const end = new Date(`2000-01-01T${this.endTime}`);
    const diff = end.getTime() - start.getTime();
    const hours = diff / (1000 * 60 * 60);
    this.result = hours.toFixed(2);
  }
}
