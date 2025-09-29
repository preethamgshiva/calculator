import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    selector: 'app-volume-converter',
    imports: [FormsModule],
    template: `
    <h3>Volume Converter</h3>
        <div class="d-inline-flex p-4 m-2">
            <div class="d-inline-flex p-4 m-2">
                <p class="m-2">From</p><input type="text" [(ngModel)]="input">
            </div>
            <div class="d-inline-flex p-4 m-2">
                <select name="from" class="m-2" [(ngModel)]="from">
                    <option value="Liter">Liter</option>
                    <option value="Milliliter">Milliliter</option>
                    <option value="CubicMeter">Cubic Meter</option>
                    <option value="CubicCentimeter">Cubic Centimeter</option>
                </select>
            </div>
        </div>
        <div class="d-inline-flex p-4 m-2">
            <p class="m-2">To</p><input type="text" [(ngModel)]="result" disabled>
        </div>
        <div class="d-inline-flex p-4 m-2">
            <select name="to" class="m-2" [(ngModel)]="to">
                    <option value="Liter">Liter</option>
                    <option value="Milliliter">Milliliter</option>
                    <option value="CubicMeter">Cubic Meter</option>
                    <option value="CubicCentimeter">Cubic Centimeter</option>
            </select>
        </div>
        <br>
        <div class="d-inline-flex">
            <button class="m-2 btn btn-primary" (click)="calculate()">Convert</button>
        </div>    
    `,
})
export class VolumeConverter {
    input: number = 0;
    result: number = 0;
    from: string = 'Liter';
    to: string = 'Liter';
    calculate(){
        if (this.from === this.to) this.result = this.input;
        else if (this.from === 'Liter' && this.to === 'Milliliter') this.result = this.input * 1000;
        else if (this.from === 'Milliliter' && this.to === 'Liter') this.result = this.input / 1000;
        else if (this.from === 'Liter' && this.to === 'CubicMeter') this.result = this.input / 1000;
        else if (this.from === 'CubicMeter' && this.to === 'Liter') this.result = this.input * 1000;
        else if (this.from === 'Liter' && this.to === 'CubicCentimeter') this.result = this.input * 1000000;
        else if (this.from === 'CubicCentimeter' && this.to === 'Liter') this.result = this.input / 1000000;
        else if (this.from === 'CubicMeter' && this.to === 'Milliliter') this.result = this.input * 1000000;
        else if (this.from === 'Milliliter' && this.to === 'CubicMeter') this.result = this.input / 1000000;
        else if (this.from === 'CubicMeter' && this.to === 'CubicCentimeter') this.result = this.input * 1000000000;
        else if (this.from === 'CubicCentimeter' && this.to === 'CubicMeter') this.result = this.input / 1000000000;
        
    }
}