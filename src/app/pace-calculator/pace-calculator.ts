import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pace-calculator',
  imports: [FormsModule],
  standalone: true,
  template: `
    <h3 class="text-center p-4">Pace Calculator</h3>
    <div class="container border p-4 d-flex">
      <p class="p-2 m-2">Enter the Time taken</p>
      <input type="time" class="p-2" [(ngModel)]="input">
    </div>
    <div class="container border p-4 d-flex">
      <p class="p-2 m-2">Enter the Distance in Kilometers</p>
      <input type="number" [(ngModel)]="distance">
    </div>
    <div class="container border p-4">
      <button (click)="calculate()" class="btn btn-primary">Calculate</button>
      <p>Pace is: {{pace}}</p>
    </div>
  `,
  styleUrl: './pace-calculator.css'
})
export class PaceCalculator {
  pace: string = '';
  distance: number = 0;
  input: string = '00:00';

  calculate() {
    if (!this.input || this.distance <= 0) {
      this.pace = 'Invalid input';
      return;
    }

    const parts = this.input.split(':').map(Number);
    const hours = parts[0] || 0;
    const minutes = parts[1] || 0;
    const seconds = parts[2] || 0; // in case seconds are provided

    const totalHours = hours + minutes / 60 + seconds / 3600;

    if (totalHours === 0) {
      this.pace = 'Invalid time';
      return;
    }

    const totalMinutes = totalHours * 60;
    const paceMinutes = Math.floor(totalMinutes / this.distance);
    const paceSeconds = Math.round(((totalMinutes / this.distance) - paceMinutes) * 60);

    this.pace = `${paceMinutes}:${paceSeconds < 10 ? '0' + paceSeconds : paceSeconds} min/km`;
  }
}
