import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-temperature-converter',
  imports: [FormsModule],
  standalone: true,
  template: `
    <h3 class="text-center p-2">Temperature Converter</h3>
    <div class="d-inline-flex p-4 m-2">
      <div class="d-inline-flex p-4 m-2">
        <p class="m-2">From</p>
        <input type="number" [(ngModel)]="input" (input)="calculate()">
      </div>
      <div class="d-inline-flex p-4 m-2">
        <select name="from" class="m-2" [(ngModel)]="from" (change)="calculate()">
          <option value="Kelvin">Kelvin</option>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
    </div>

    <div class="d-inline-flex p-4 m-2">
      <p class="m-2">To</p>
      <input type="number" [(ngModel)]="result" disabled>
    </div>
    <div class="d-inline-flex p-4 m-2">
      <select name="to" class="m-2" [(ngModel)]="to" (change)="calculate()">
        <option value="Kelvin">Kelvin</option>
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
      </select>
    </div>
    
  `,
})
export class TemperatureConverter {
  input: number = 0;
  result: number = 0;
  from: string = 'Celsius';
  to: string = 'Kelvin';

  calculate() {
    const value = Number(this.input); // ✅ Ensure numeric
    let kelvin: number;

    // Convert input → Kelvin
    if (this.from === 'Kelvin') kelvin = value;
    else if (this.from === 'Celsius') kelvin = value + 273.15;
    else if (this.from === 'Fahrenheit') kelvin = (value + 459.67) / 1.8;
    else kelvin = value;

    // Convert Kelvin → target
    if (this.to === 'Kelvin') this.result = kelvin;
    else if (this.to === 'Celsius') this.result = kelvin - 273.15;
    else if (this.to === 'Fahrenheit') this.result = kelvin * 1.8 - 459.67;
    else this.result = kelvin;
  }
}
