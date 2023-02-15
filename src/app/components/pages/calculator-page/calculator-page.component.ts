import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss']
})
export class CalculatorPageComponent {
  constructor(private calculatorService: CalculatorService) { }
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  operations = ['/', '*', '-', '+', '=', 'back'];
  value = '';
  selectedOperation?: string = undefined;
  firstValue?: number = undefined
  secondValue?: number = undefined

  onNumberClick(number: number) {
    // Check to not use 0 as first number
    if ((this.value.length === 0 || this.operations.includes(this.value[this.value.length - 1])) && number === 0) {
      return
    }
    this.value += number.toString();
  }

  onOperationClick(operation: string) {
    // API call
    if (operation === '=' && this.selectedOperation) {
      const secondValues = this.value.split(this.selectedOperation)[1];
      if (this.secondValue) this.secondValue = undefined;
      for (const val of secondValues) {
        this.secondValue = Number((this.secondValue || 0).toString() + val);
      }
      setTimeout(() => {
        this.onCheck();

      }, 100);

    } else if (operation === 'back') {
      if (this.operations.includes(this.value[this.value.length - 1])) {
        this.selectedOperation = undefined;
      }
      this.value = this.value.slice(0, -1);
    } else if (this.value.length > 0 && !this.selectedOperation && operation !== '=') {
      this.selectedOperation = operation;
      if (this.firstValue) this.firstValue = undefined;
      for (const val of this.value) {
        this.firstValue = Number((this.firstValue || 0).toString() + val);
      }
      this.value += operation;
    }
  }

  onCheck() {
    if (this.firstValue && this.secondValue && this.selectedOperation) {
      this.calculatorService.calculate({ firstValue: this.firstValue, secondValue: this.secondValue, operation: this.selectedOperation }).subscribe((result) => {
        this.value = result.toString();
        this.selectedOperation = undefined
      })
    }
  }
}
