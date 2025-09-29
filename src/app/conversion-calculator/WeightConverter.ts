import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";


@Component({
    imports: [FormsModule],
    selector: 'app-weight-converter',
    template: `
        <h4 class="text-center p-2">Length Converter</h4>
        <div class="d-inline-flex p-4 m-2">
            <div class="d-inline-flex p-4 m-2">
                <p class="m-2">From</p><input type="text" [(ngModel)]="input">
            </div>
            <div class="d-inline-flex p-4 m-2">
                <select name="from" class="m-2" [(ngModel)]="from">
                    <option value="Kilogram">Kilogram</option>
                    <option value="Gram">Gram</option>
                    <option value="Milligram">Milligram</option>
                    <option value="MetricTon">MetricTon</option>
                </select>
            </div>
        </div>
        <div class="d-inline-flex p-4 m-2">
            <p class="m-2">To</p><input type="text" [(ngModel)]="result" disabled>
        </div>
        <div class="d-inline-flex p-4 m-2">
            <select name="to" class="m-2" [(ngModel)]="to">
                    <option value="Kilogram">Kilogram</option>
                    <option value="Gram">Gram</option>
                    <option value="Milligram">Milligram</option>
                    <option value="MetricTon">MetricTon</option>
            </select>
        </div>
        <br>
        <div class="d-inline-flex">
            <button class="m-2 btn btn-primary" (click)="calculate()">Convert</button>
        </div>
    `
})
export class WeightConverter {
    from = 'Gram';
    to = 'Gram';
    input = 0;
    result = 0;
    calculate(){
        if (this.from === this.to) this.result = this.input;
        else if (this.from === 'Kilogram' && this.to === 'Gram') this.result = this.input * 1000;
        else if (this.from === 'Gram' && this.to === 'Kilogram') this.result = this.input / 1000;
        else if (this.from === 'Kilogram' && this.to === 'Milligram') this.result = this.input * 1000000;
        else if (this.from === 'Milligram' && this.to === 'Kilogram') this.result = this.input / 1000000;
        else if (this.from === 'Kilogram' && this.to === 'MetricTon') this.result = this.input / 1000;
        else if (this.from === 'MetricTon' && this.to === 'Kilogram') this.result = this.input * 1000;
        else if (this.from === 'Gram' && this.to === 'Milligram') this.result = this.input * 1000;
        else if (this.from === 'Milligram' && this.to === 'Gram') this.result = this.input / 1000;
        else if (this.from === 'Gram' && this.to === 'MetricTon') this.result = this.input / 1000000;
        else if (this.from === 'MetricTon' && this.to === 'Gram') this.result = this.input * 1000000;
        else if (this.from === 'Milligram' && this.to === 'MetricTon') this.result = this.input / 1000000000;
        else if (this.from === 'MetricTon' && this.to === 'Milligram') this.result = this.input * 1000000000;

    }
}