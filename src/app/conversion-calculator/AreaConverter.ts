import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    selector: 'app-area-converter',
    imports: [FormsModule],
    standalone: true,
    template:`
        <h3>Area Converter</h3>
        <div class="d-inline-flex p-4 m-2">
            <div class="d-inline-flex p-4 m-2">
                <p class="m-2">From</p><input type="text" [(ngModel)]="input">
            </div>
            <div class="d-inline-flex p-4 m-2">
                <select name="from" class="m-2" [(ngModel)]="from">
                    <option value="SquareMeter">Square Meter</option>
                    <option value="SquareKilometer">Square Kilometer</option>
                    <option value="SquareMilliMeter">Square Millimeter</option>
                    <option value="SquareCentimeter">Square Centimeter</option>
                </select>
            </div>
        </div>
        <div class="d-inline-flex p-4 m-2">
            <p class="m-2">To</p><input type="text" [(ngModel)]="result" disabled>
        </div>
        <div class="d-inline-flex p-4 m-2">
            <select name="to" class="m-2" [(ngModel)]="to">
                <option value="SquareMeter">Square Meter</option>
                <option value="SquareKilometer">Square Kilometer</option>
                <option value="SquareMilliMeter">Square Millimeter</option>
                <option value="SquareCentimeter">Square Centimeter</option>
            </select>
        </div>
        <br>
        <div class="d-inline-flex">
            <button class="m-2 btn btn-primary" (click)="calculate()">Convert</button>
        </div>
    `,
})
export class AreaConverter {
    input = 0;
    result = 0;
    from = 'SquareMeter';
    to = 'SquareMeter';
    calculate(){
        if (this.from === this.to) this.result = this.input;
        else if (this.from === 'SquareMeter' && this.to === 'SquareKilometer') this.result = this.input / 1000000;
        else if (this.from === 'SquareKilometer' && this.to === 'SquareMeter') this.result = this.input * 1000000;
        else if (this.from === 'SquareMeter' && this.to === 'SquareMilliMeter') this.result = this.input * 1000000;
        else if (this.from === 'SquareMilliMeter' && this.to === 'SquareMeter') this.result = this.input / 1000000;
        else if (this.from === 'SquareMeter' && this.to === 'SquareCentimeter') this.result = this.input * 10000;
        else if (this.from === 'SquareCentimeter' && this.to === 'SquareMeter') this.result = this.input / 10000;
        else if (this.from === 'SquareKilometer' && this.to === 'SquareMilliMeter') this.result = this.input * 1000000000;
        else if (this.from === 'SquareMilliMeter' && this.to === 'SquareKilometer') this.result = this.input / 1000000000;
        else if (this.from === 'SquareKilometer' && this.to === 'SquareCentimeter') this.result = this.input * 100000000;
        else if (this.from === 'SquareCentimeter' && this.to === 'SquareKilometer') this.result = this.input / 100000000;
        else if (this.from === 'SquareMilliMeter' && this.to === 'SquareCentimeter') this.result = this.input / 10000;
        else if (this.from === 'SquareCentimeter' && this.to === 'SquareMilliMeter') this.result = this.input * 10000;

    }
}