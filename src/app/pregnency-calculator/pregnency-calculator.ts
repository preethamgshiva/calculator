import { DatePipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregnency-calculator',
  imports: [FormsModule, NgIf, DatePipe],
  template: `
    <div class="container mt-4">
      <h3 class="text-center p-2">Pregnancy Calculator</h3>

      <div class="card p-3 shadow-sm">
        <label for="dueDate" class="form-label fw-bold">
          Enter your Estimated Due Date (EDD):
        </label>
        <input 
          type="date" 
          id="dueDate" 
          class="form-control mb-3"
          [(ngModel)]="dueDateInput"
          (change)="calculatePregnancy()" />

        <div *ngIf="calculated">
          <p><strong>First Day of Last Menstrual Period (LMP):</strong> {{ lmpDate | date:'fullDate' }}</p>
          <p><strong>Gestational Age (today):</strong> {{ gestationWeeks }} weeks {{ gestationDays }} days</p>
          <p><strong>Trimester:</strong> {{ trimester }}</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './pregnency-calculator.css'
})
export class PregnencyCalculator {
  dueDateInput: string | null = null;
  lmpDate: Date | null = null;
  gestationWeeks: number = 0;
  gestationDays: number = 0;
  trimester: string = '';
  calculated: boolean = false;

  calculatePregnancy() {
    if (!this.dueDateInput) return;

    const dueDate = new Date(this.dueDateInput);
    // LMP = Due Date - 280 days
    this.lmpDate = new Date(dueDate);
    this.lmpDate.setDate(this.lmpDate.getDate() - 280);

    // Gestational age = today - LMP
    const today = new Date();
    const diffTime = today.getTime() - this.lmpDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 3600 * 24));

    this.gestationWeeks = Math.floor(diffDays / 7);
    this.gestationDays = diffDays % 7;

    // Determine trimester
    if (this.gestationWeeks < 13) {
      this.trimester = 'First Trimester';
    } else if (this.gestationWeeks < 27) {
      this.trimester = 'Second Trimester';
    } else {
      this.trimester = 'Third Trimester';
    }

    this.calculated = true;
  }
}
