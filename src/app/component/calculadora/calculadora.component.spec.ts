import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add numbers correctly', () => {
    component.pressNumber('2');
    component.pressOperator('+');
    component.pressNumber('2');
    component.calculate();
    expect(component.displayValue).toBe('40');  
  });
});