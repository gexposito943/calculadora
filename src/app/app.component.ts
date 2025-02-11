import { Component } from '@angular/core';
import { CalculadoraComponent } from './component/calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalculadoraComponent],
  template: `
    <app-calculadora></app-calculadora>
  `
})
export class AppComponent {
  title = 'calculadora';
}
