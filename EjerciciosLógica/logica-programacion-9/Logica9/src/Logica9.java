import java.util.HashMap;
import java.util.Scanner;

/*
Logica de Programacion 9

1.- Crear diccionario Español-Inglés con 20 palabras
2.- Utilizar HashMap para almacenar los pares de palabras
3.- Soliciar al usuario una palabra en español e imprimir por consola la palabra en ingles
4.- Si no se encuentra la palabra, se debe imprimir "La palabra no se encuentra en el diccionario"

 */

public class Logica9 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// Scanner para leer la palabra
		Scanner entrada = new Scanner(System.in);
		
		String palabra;
		
		// Mapa que no contiene indice para almacenar las palabras
		HashMap<String, String> dic = new HashMap<>();
	
		// Ingresamos las 20 palabras en el mapa
		dic.put("gato", "cat");
		dic.put("perro", "dog");
		dic.put("caballo", "horse");
		dic.put("leon", "lion");
		dic.put("elefante", "elephant");
		dic.put("tiburon", "shark");
		dic.put("araña", "spider");
		dic.put("escorpion", "scorpion");
		dic.put("rata", "rat");
		dic.put("conejo", "rabbit");
		dic.put("hormiga", "ant");
		dic.put("gallo", "rooster");
		dic.put("ardilla", "squirell");
		dic.put("cerdo", "pig");
		dic.put("vaca", "cow");
		dic.put("oveja", "sheep");
		dic.put("burro", "donkey");
		dic.put("toro", "bull");
		dic.put("pato", "duck");
		dic.put("abeja", "bee");
		
		// Ingresamos la palabra
		System.out.println("Ingresa una palabra, por favor");
		palabra = entrada.nextLine();
		
		// Comprobamos si la palabra esta en el mapa
		if(dic.containsKey(palabra)) {
			System.out.println(dic.get(palabra));
		} else {
			System.out.println("La palabra no se encuentra en el diccionario");
		}
		
	}

}
