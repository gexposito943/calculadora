import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial value as 0', () => {
    expect(component.displayValue).toBe('0');
  });

  it('should add numbers correctly', () => {
    component.pressNumber('5');
    component.pressOperator('+');
    component.pressNumber('3');
    component.calculate();
    expect(component.displayValue).toBe('8');
  });

  it('should subtract numbers correctly', () => {
    component.pressNumber('9');
    component.pressOperator('-');
    component.pressNumber('4');
    component.calculate();
    expect(component.displayValue).toBe('5');
  });

  it('should multiply numbers correctly', () => {
    component.pressNumber('6');
    component.pressOperator('*');
    component.pressNumber('2');
    component.calculate();
    expect(component.displayValue).toBe('12');
  });

  it('should divide numbers correctly', () => {
    component.pressNumber('8');
    component.pressOperator('/');
    component.pressNumber('2');
    component.calculate();
    expect(component.displayValue).toBe('4');
  });

  it('should clear the calculator', () => {
    component.pressNumber('5');
    component.clear();
    expect(component.displayValue).toBe('0');
    expect(component.firstOperand).toBeNull();
    expect(component.operator).toBeNull();
  });
});
