import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-area-volume-calculator',
  imports: [FormsModule],
  template: `
    <h3 class="text-center p-4">Area & Volume Calculator</h3>
    <div class="container">
      <div class="square border p-4 m-2">
        <h2>Square, Rectangle</h2>
        <input type="number" placeholder="Length (l) in meters" class="m-2" [(ngModel)]="sql">
        <input type="number" placeholder="Breadth (b) in meters" class="m-2"[(ngModel)]="sqb">
        <input type="number" placeholder="Height (h) in meters" class="m-2" [(ngModel)]="sqh">
        <button class="btn btn-primary" (click)="calculateSquare()">Calculate</button>
        <br>
        <h4>Area: {{areaSquare}}</h4>
        <h4>Volume: {{volumeSquare}}</h4>
      </div>
      <div class="cylinder border p-4 m-2">
        <h2>Cylinder</h2>
        <input type="number" placeholder="Radius (r) in meters" class="m-2" [(ngModel)]="cyr">
        <input type="number" placeholder="Depth or height (h) in meters" class="m-2" [(ngModel)]="cyh">
        <button class="btn btn-primary" (click)="calculateCylinder()">Calculate</button>
        <br>
        <h4>Area: {{areaCylinder}}</h4>
        <h4>Volume: {{volumeCylinder}}m</h4>
      </div>
    </div>
  `,
  styleUrl: './area-volume-calculator.css'
})
export class AreaVolumeCalculator {
  areaSquare = 0;
  volumeSquare = 0;
  areaCylinder = 0;
  volumeCylinder = 0;
  sql = 0;
  sqb = 0;
  sqh = 0;
  cyr = 0;
  cyh = 0;


  calculateSquare() {
    this.areaSquare = 2*(this.sql*this.sqb + this.sql*this.sqh + this.sqb*this.sqh);
    this.volumeSquare = this.sql*this.sqb*this.sqh;
  }
  calculateCylinder() {
    this.areaCylinder = Math.PI * this.cyr * this.cyr;
    this.volumeCylinder = Math.PI * this.cyr * this.cyr * this.cyh;
  }
}
