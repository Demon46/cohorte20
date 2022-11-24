package colecciones;

import java.util.Arrays;

public class Arreglos {
	
	public static void main(String[] args) {
		
		// Arrays - Arreglos - Matrices
		// Solo permiten un tipo de dato
		// Se tiene que especificar su tamaño
		
		/*
		 * 
		 * String
		 * int
		 * Double
		 * long
		 * 
		 * */
		
		String [] miArreglo = new String[6]; // a partir del 1
		
		miArreglo[0] = "Raul"; // a partir del 0
		miArreglo[1] = "Felipe";
		miArreglo[2] = "Alonso";
		miArreglo[3] = "Fernanda";
		miArreglo[4] = "Victor";
		miArreglo[5] = "Oscar";
		
		for(int i = 0; i < miArreglo.length; i++) {
			System.out.println("Nombre " + (i+1) + ": " + miArreglo[i]);
		}
		
		System.out.println("******************************************");
		
		// forEach
		for(String nombre : miArreglo) {
			System.out.println("forEach: " + nombre);
		}
		
		// Math.pow() - Elevar un numero a una potencia 
		// Arrays
		System.out.println(Arrays.toString(miArreglo));
		
		// Tipos de valores
		int numeros [] = new int[5];
		
		numeros[0] = 3;
		numeros[1] = -56;
		numeros[2] = (int) 3.45; // Castep == Cambiar la clase del valor
		numeros[3] = Integer.parseInt("2"); // Parseo == Cambiar la clase del valor
		
		for(int numero : numeros) {
			System.out.println("Valores del arreglo numeros: " + numero);
		}
		
		// Arreglos de Objetos
		Persona persona1 = new Persona("Pancho", 30);
		Persona persona2 = new Persona("Paty", 58);
		
		//
		Persona [] arrPersonas = new Persona[3];
		
		
		arrPersonas[0] = persona1;
		arrPersonas[1] = persona2; 
		arrPersonas[2] = new Persona("Luis", 18);
		
		System.out.println(arrPersonas[0].nombre);
		System.out.println(arrPersonas[1].nombre);
		System.out.println(arrPersonas[2].nombre); 
		
		for(Persona persona : arrPersonas) {
			System.out.println("Nombre: " + persona.nombre + " Edad: " + persona.edad);
		}
		
		// Arreglos literales
		String [] arrString = {"Manzana", "Pera", "12", "Hola"};
		
		for(String string : arrString) {
			System.out.println("El arreglo tiene " + Arrays.toString(arrString));
		}
		
		
		
	}
	
}
