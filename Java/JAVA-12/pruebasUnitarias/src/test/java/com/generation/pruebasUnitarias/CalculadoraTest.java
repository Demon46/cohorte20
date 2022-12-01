package com.generation.pruebasUnitarias;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class CalculadoraTest {

	Calculadora calc = new Calculadora(true);
	
	@Test
	void pruebaSuma() {
		
		//Calculadora calc = new Calculadora(true);
		
		assertEquals(4, calc.suma(2, 2), "Debería ser 4") ;
		
	}
	
	void pruebaIsOn() {
		
		//Calculadora calc = new Calculadora(true);
		
		assertTrue(calc.isOn());
		
	}
	
	@Test
	void pruebaDivision() {
		
		assertEquals(2.5, calc.division(5, 2));
		
	}
	
}
