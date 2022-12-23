import java.util.Iterator;
import java.util.Scanner;

/* 
Logica de Programación 6

1.- Solicitar una palabra o frase por consola
2.- Mostrar por consola el mensaje escrito al revés

Entrada: eduardo | Salida: odraude 

*/

public class Logica6 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Variables para guardar la palabra ingresada y la palabra invertida
		String palabra;
		String invertido = "";
		
		// Creación de escaner para leer datos por consola
		Scanner entrada = new Scanner(System.in);

		// Se ingresa la palabra
		System.out.println("Ingresa tu palabra: ");
		palabra = entrada.nextLine();
		
		// Ciclo que recorrera toda la palabra ingresada
		for (int i = palabra.length() - 1; i >= 0; i--) {
			
			// Se almacenará el caracter que se encuentra en la posición actual del arreglo
			invertido += palabra.charAt(i);
			
		}
		
		// Se imprime el resultado por pantalla
		System.out.println("Entrada: " + palabra);
		System.out.println("Salida: " + invertido);
		
	}

}
