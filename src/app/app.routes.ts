import { Routes } from '@angular/router';
import { SimpleCalculator } from './simple-calculator/simple-calculator';
import { ScientificCalculator } from './scientific-calculator/scientific-calculator';
import { FractionCalculator } from './fraction-calculator/fraction-calculator';
import { Hyperlinks } from './hyperlinks/hyperlinks';
import { PercentageCalculator } from './percentage-calculator/percentage-calculator';
import { RandomNumber } from './random-number/random-number';
import { StandardDeviation } from './standard-deviation/standard-deviation';
import { AgeCalculator } from './age-calculator/age-calculator';
import { AreaVolumeCalculator } from './area-volume-calculator/area-volume-calculator';
import { BmiCalculator } from './bmi-calculator/bmi-calculator';
import { BmrCalculator } from './bmr-calculator/bmr-calculator';
import path from 'path';
import { DateCalculator } from './date-calculator/date-calculator';
import { TimeCalculator } from './time-calculator/time-calculator';
import { HoursCalculator } from './hours-calculator/hours-calculator';
import { GpaCalculator } from './gpa-calculator/gpa-calculator';
import { ConversionCalculator } from './conversion-calculator/conversion-calculator';
import { LengthConverter } from './conversion-calculator/LengthConverter';
import { BodyfatCalculator } from './bodyfat-calculator/bodyfat-calculator';
import { IdealweightCalculator } from './idealweight-calculator/idealweight-calculator';
import { PaceCalculator } from './pace-calculator/pace-calculator';

export const routes: Routes = [
  { path: 'simple-calculator', component: SimpleCalculator },
  { path: 'scientific-calculator', component: ScientificCalculator },
  { path: 'fraction-calculator', component: FractionCalculator },
  {path: 'percentage-calculator', component: PercentageCalculator},
  {path: 'random-number', component: RandomNumber},
  {path: 'standard-deviation', component: StandardDeviation},
  {path: 'age-calculator', component: AgeCalculator},
  {path: 'area-volume-calculator', component: AreaVolumeCalculator},
  {path: 'bmi-calculator', component: BmiCalculator},
  {path: 'bmr-calculator', component: BmrCalculator},
  {path: 'date-calculator', component: DateCalculator},
  {path: 'time-calculator', component: TimeCalculator},
  {path: 'bodyfat-calculator', component: BodyfatCalculator},
  {path: 'hours-calculator', component: HoursCalculator},
  {path: 'gpa-calculator', component: GpaCalculator},
  {path: 'conversion-calculator', component: ConversionCalculator},
  {path: 'length-converter', component: LengthConverter},
  {path: 'idealweight-calculator', component: IdealweightCalculator},
  {path: 'pace-calculator', component: PaceCalculator},
  {path: 'hyperlinks', component: Hyperlinks},
  { path: '', redirectTo: 'hyperlinks', pathMatch: 'full' }, // default
  { path: '**', redirectTo: 'hyperlinks' } // fallback
];
