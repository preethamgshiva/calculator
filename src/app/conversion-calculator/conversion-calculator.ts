import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { LengthConverter } from './LengthConverter';
import { AreaConverter } from './AreaConverter';
import { TemperatureConverter } from './TemperatureConverter';
import { VolumeConverter } from './VolumeConverter';
import { WeightConverter } from './WeightConverter';

@Component({
  selector: 'app-conversion-calculator',
  imports: [NgSwitch, NgSwitchCase, LengthConverter, AreaConverter, TemperatureConverter, VolumeConverter, WeightConverter],
  template: `
    <h3 class="text-center p-2">Conversion Calculator</h3>
    <div class="container text-center">
      <table class="table table-bordered bg-secondary">
        <tr>
          <th><button (click)="selected='length'" class="btn btn-dark">Length</button></th>
          <th><button (click)="selected='area'" class="btn btn-dark">Area</button></th>
          <th><button (click)="selected='volume'" class="btn btn-dark">Volume</button></th>
          <th><button (click)="selected='temperature'" class="btn btn-dark">Temperature</button></th>
          <th><button (click)="selected='weight'" class="btn btn-dark">Weight</button></th>
        </tr>
      </table>

      <div class="mt-4 p-3 border rounded">
        <ng-container [ngSwitch]="selected">
          <div *ngSwitchCase="'length'">
            <app-length-converter></app-length-converter>
          </div>
          <div *ngSwitchCase="'area'">
            <app-area-converter></app-area-converter>
          </div>
          <div *ngSwitchCase="'temperature'">
            <app-temperature-converter></app-temperature-converter>
          </div>
          <div *ngSwitchCase="'volume'">
            <app-volume-converter></app-volume-converter>
          </div>
          <div *ngSwitchCase="'weight'">
            <app-weight-converter></app-weight-converter>
          </div>
        </ng-container>
      </div>
    </div>
  `
})
export class ConversionCalculator {
  selected: string = '';
}
