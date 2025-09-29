import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-length-converter',
    imports: [FormsModule],
    standalone: true,
    template: `
        <h4 class="text-center p-2">Length Converter</h4>
        <div class="d-inline-flex p-4 m-2">
            <div class="d-inline-flex p-4 m-2">
                <p class="m-2">From</p><input type="text" [(ngModel)]="input">
            </div>
            <div class="d-inline-flex p-4 m-2">
                <select name="from" class="m-2" [(ngModel)]="from">
                    <option value="Meter">Meter</option>
                    <option value="Kilometer">Kilometer</option>
                    <option value="MilliMeter">Millimeter</option>
                    <option value="Centimeter">Centimeter</option>
                </select>
            </div>
        </div>
        <div class="d-inline-flex p-4 m-2">
            <p class="m-2">To</p><input type="text" [(ngModel)]="result" disabled>
        </div>
        <div class="d-inline-flex p-4 m-2">
            <select name="to" class="m-2" [(ngModel)]="to">
                <option value="Meter">Meter</option>
                <option value="Kilometer">Kilometer</option>
                <option value="MilliMeter">Millimeter</option>
                <option value="Centimeter">Centimeter</option>
            </select>
        </div>
        <br>
        <div class="d-inline-flex">
            <button class="m-2 btn btn-primary" (click)="calculate()">Convert</button>
        </div>
    `,
})
export class LengthConverter { 
    from = 'Meter';
    to = 'Meter';
    input = 0;
    result = 0;
    calculate() {
        if (this.from === this.to) this.result = this.input;
        else if (this.from === 'Meter' && this.to === 'Kilometer') this.result = this.input / 1000;
        else if (this.from === 'Kilometer' && this.to === 'Meter') this.result = this.input * 1000;
        else if (this.from === 'Meter' && this.to === 'MilliMeter') this.result = this.input * 1000;
        else if (this.from === 'MilliMeter' && this.to === 'Meter') this.result = this.input / 1000;
        else if (this.from === 'Meter' && this.to === 'Centimeter') this.result = this.input * 100;
        else if (this.from === 'Centimeter' && this.to === 'Meter') this.result = this.input / 100;
        else if (this.from === 'Kilometer' && this.to === 'MilliMeter') this.result = this.input * 1000000;
        else if (this.from === 'MilliMeter' && this.to === 'Kilometer') this.result = this.input / 1000000;
        else if (this.from === 'Kilometer' && this.to === 'Centimeter') this.result = this.input * 100000;
        else if (this.from === 'Centimeter' && this.to === 'Kilometer') this.result = this.input / 100000;
        else if (this.from === 'MilliMeter' && this.to === 'Centimeter') this.result = this.input / 10;
        else if (this.from === 'Centimeter' && this.to === 'MilliMeter') this.result = this.input * 10;
    }

}
