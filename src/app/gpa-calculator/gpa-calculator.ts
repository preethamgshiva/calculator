import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gpa-calculator',
  standalone: true,
  imports: [FormsModule, NgFor],
  template: `
    <h3 class="text-center p-2">GPA Calculator</h3>
    <div class="calculator-container m-4">
      <table class="table table-striped table-bordered border border-dark m-2">
        <thead>
          <tr class="text-center">
            <th>Course</th>
            <th>Credits</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center bg-dark text-light" *ngFor="let c of courses; let i = index">
            <td><input type="text" [(ngModel)]="c.course" placeholder="Course"></td>
            <td><input type="number" [(ngModel)]="c.credits" placeholder="Credits"></td>
            <td><input type="text" [(ngModel)]="c.grade" placeholder="Grade (A-F)"></td>
          </tr>
        </tbody>
      </table>

      <div class="text-center">
        <button class="btn btn-primary m-2" (click)="calculate()">Calculate GPA</button>
        <button class="btn btn-danger m-2" (click)="reset()">Reset</button>
      </div>

      <h2 class="text-center p-2">Result: {{ gpa.toFixed(2) }}</h2>
    </div>
  `,
  styleUrl: './gpa-calculator.css'
})
export class GpaCalculator {
  courses = [
    { course: '', credits: 0, grade: '' },
    { course: '', credits: 0, grade: '' },
    { course: '', credits: 0, grade: '' },
    { course: '', credits: 0, grade: '' },
    { course: '', credits: 0, grade: '' },
  ];

  gpa: number = 0;

  // grade → points mapping
  gradeMap: { [key: string]: number } = {
    'A+': 4.0,
    'A': 4.0,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.0,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.0,
    'C-': 1.7,
    'D': 1.0,
    'F': 0.0,
  };

  calculate() {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let c of this.courses) {
      const grade = c.grade.toUpperCase().trim();
      const credits = Number(c.credits);

      if (credits > 0 && this.gradeMap[grade] !== undefined) {
        totalCredits += credits;
        totalPoints += credits * this.gradeMap[grade];
      }
    }

    this.gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;
  }

  reset() {
    this.courses = [
      { course: '', credits: 0, grade: '' },
      { course: '', credits: 0, grade: '' },
      { course: '', credits: 0, grade: '' },
      { course: '', credits: 0, grade: '' },
      { course: '', credits: 0, grade: '' },
    ];
    this.gpa = 0;
  }
}
