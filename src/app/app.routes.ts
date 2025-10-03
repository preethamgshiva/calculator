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
import { DateCalculator } from './date-calculator/date-calculator';
import { TimeCalculator } from './time-calculator/time-calculator';
import { HoursCalculator } from './hours-calculator/hours-calculator';
import { GpaCalculator } from './gpa-calculator/gpa-calculator';
import { ConversionCalculator } from './conversion-calculator/conversion-calculator';
import { LengthConverter } from './conversion-calculator/LengthConverter';
import { BodyfatCalculator } from './bodyfat-calculator/bodyfat-calculator';
import { IdealweightCalculator } from './idealweight-calculator/idealweight-calculator';
import { PaceCalculator } from './pace-calculator/pace-calculator';
import { TriangleCalculator } from './triangle-calculator/triangle-calculator';
import { GradeCalculator } from './grade-calculator/grade-calculator';
import { SubnetCalculator } from './subnet-calculator/subnet-calculator';
import { CalorieCalculator } from './calorie-calculator/calorie-calculator';
import { PregnencyCalculator } from './pregnency-calculator/pregnency-calculator';
import { PregnencyConceptionCalculator } from './pregnency-conception-calculator/pregnency-conception-calculator';
import { DuedateCalculator } from './duedate-calculator/duedate-calculator';
import { UnderProgress } from './under-progress/under-progress';
import { MortgageCalculator } from './mortgage-calculator/mortgage-calculator';
import { LoanCalculator } from './loan-calculator/loan-calculator';
import { AutoLoanCalculator } from './auto-loan-calculator/auto-loan-calculator';
import { InterestCalculator } from './interest-calculator/interest-calculator';
import { PaymentCalculator } from './payment-calculator/payment-calculator';
import { AmortizationCalculator } from './amortization-calculator/amortization-calculator';
import { InflationCalculator } from './inflation-calculator/inflation-calculator';
import { SalaryCalculator } from './salary-calculator/salary-calculator';
import { SalesTaxCalculator } from './sales-tax-calculator/sales-tax-calculator';

export const routes: Routes = [
  { path: 'simple-calculator', component: SimpleCalculator, data: { title: 'Simple Calculator' } },
  { path: 'scientific-calculator', component: ScientificCalculator, data: { title: 'Scientific Calculator' } },
  { path: 'fraction-calculator', component: FractionCalculator, data: { title: 'Fraction Calculator' } },
  { path: 'percentage-calculator', component: PercentageCalculator, data: { title: 'Percentage Calculator' } },
  { path: 'random-number', component: RandomNumber, data: { title: 'Random Number Generator' } },
  { path: 'standard-deviation', component: StandardDeviation, data: { title: 'Standard Deviation Calculator' } },
  { path: 'age-calculator', component: AgeCalculator, data: { title: 'Age Calculator' } },
  { path: 'area-volume-calculator', component: AreaVolumeCalculator, data: { title: 'Area & Volume Calculator' } },
  { path: 'bmi-calculator', component: BmiCalculator, data: { title: 'BMI Calculator' } },
  { path: 'bmr-calculator', component: BmrCalculator, data: { title: 'BMR Calculator' } },
  { path: 'date-calculator', component: DateCalculator, data: { title: 'Date Calculator' } },
  { path: 'time-calculator', component: TimeCalculator, data: { title: 'Time Calculator' } },
  { path: 'hours-calculator', component: HoursCalculator, data: { title: 'Hours Calculator' } },
  { path: 'gpa-calculator', component: GpaCalculator, data: { title: 'GPA Calculator' } },
  { path: 'conversion-calculator', component: ConversionCalculator, data: { title: 'Conversion Calculator' } },
  { path: 'length-converter', component: LengthConverter, data: { title: 'Length Converter' } },
  { path: 'bodyfat-calculator', component: BodyfatCalculator, data: { title: 'Body Fat Calculator' } },
  { path: 'idealweight-calculator', component: IdealweightCalculator, data: { title: 'Ideal Weight Calculator' } },
  { path: 'pace-calculator', component: PaceCalculator, data: { title: 'Pace Calculator' } },
  { path: 'triangle-calculator', component: TriangleCalculator, data: { title: 'Triangle Calculator' } },
  { path: 'grade-calculator', component: GradeCalculator, data: { title: 'Grade Calculator' } },
  { path: 'subnet-calculator', component: SubnetCalculator, data: { title: 'Subnet Calculator' } },
  { path: 'calorie-calculator', component: CalorieCalculator, data: { title: 'Calorie Calculator' } },
  { path: 'pregnency-calculator', component: PregnencyCalculator, data: { title: 'Pregnancy Calculator' } },
  { path: 'pregnency-conception-calculator', component: PregnencyConceptionCalculator, data: { title: 'Pregnancy Conception Calculator' } },
  { path: 'duedate-calculator', component: DuedateCalculator, data: { title: 'Due Date Calculator' } },
  { path: 'under-progress', component: UnderProgress, data: { title: 'Under Progress' } },
  { path: 'mortgage-calculator', component: MortgageCalculator, data: { title: 'Mortgage Calculator' } },
  { path: 'loan-calculator', component: LoanCalculator, data: { title: 'Loan Calculator' } },
  { path: 'auto-loan-calculator', component: AutoLoanCalculator, data: { title: 'Auto Loan Calculator' } },
  { path: 'interest-calculator', component: InterestCalculator, data: { title: 'Interest Calculator' } },
  { path: 'payment-calculator', component: PaymentCalculator, data: { title: 'Payment Calculator' } },
  { path: 'amortization-calculator', component: AmortizationCalculator, data: { title: 'Amortization Calculator' } },
  { path: 'inflation-calculator', component: InflationCalculator, data: { title: 'Inflation Calculator' } },
  { path: 'salary-calculator', component: SalaryCalculator, data: { title: 'Salary Calculator' } },
  { path: 'sales-tax-calculator', component: SalesTaxCalculator, data: { title: 'Sales Tax Calculator' } },
  { path: 'hyperlinks', component: Hyperlinks, data: { title: 'Calculator Project' } },
  { path: '', redirectTo: 'hyperlinks', pathMatch: 'full' },
  { path: '**', redirectTo: 'hyperlinks' }
];
