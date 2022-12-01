package com.generation.pruebasUnitarias;

public class Main {
	
	public static void main(String[] args) {
		
		Calculadora calc = new Calculadora(true);
		
		System.out.println(calc.suma(2, 2));
		System.out.println(calc.resta(6, 2));	
		System.out.println(calc.multiplicacion(5, 2));
		System.out.println(calc.division(2, 0));
		
	}

}
