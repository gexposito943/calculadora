import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  displayValue: string = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitingForSecondNumber: boolean = false;

  pressNumber(num: string): void {
    if (this.waitingForSecondNumber) {
      this.displayValue = num;
      this.waitingForSecondNumber = false;
    } else {
      this.displayValue = this.displayValue === '0' ? num : this.displayValue + num;
    }
  }

  pressOperator(op: string): void {
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.displayValue);
    }
    this.operator = op;
    this.waitingForSecondNumber = true;
  }

  calculate(): void {
    if (this.operator && this.firstOperand !== null) {
      const secondOperand = Number(this.displayValue);
      let result: number;

      switch (this.operator) {
        case '+':
          result = this.firstOperand + secondOperand;
          break;
        case '-':
          result = this.firstOperand - secondOperand;
          break;
        case '*':
          result = this.firstOperand * secondOperand;
          break;
        case '/':
          result = this.firstOperand / secondOperand;
          break;
        default:
          return;
      }

      this.displayValue = result.toString();
      this.firstOperand = null;
      this.operator = null;
      this.waitingForSecondNumber = false;
    }
  }

  clear(): void {
    this.displayValue = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitingForSecondNumber = false;
  }
}
