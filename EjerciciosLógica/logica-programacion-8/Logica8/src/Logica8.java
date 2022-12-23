import java.util.*;

/*
Logica de Programacion 8
 
1.- Solicitar 10 numeros y guardarlos en un array
2.- Evaluar los 10 numeros y ordenar el arreglo de forma en que los numeros primos vayan al principio
3.- Mostrar por consola el array original y el array con los primos al principio
4.- Mostrar ambos array comenzando con su posición y después con su valor
  
 */

public class Logica8 {

	public static void main(String[] args) {
		
		Scanner entrada = new Scanner(System.in);
		
		int aux1 = 0; 
		int aux2 = 0;
		int[] arrOriginal = new int[10];
		int[] arrModificado = new int[10];
		int[] arrPrimos = new int[4];
		int[] arrNoPrimos = new int[6];
		
		for (int i = 0; i <= 9; i++) {
			
			System.out.println("Ingresa el numero en la posición " + (i + 1));
			
			arrOriginal[i] = entrada.nextInt();
			
		}
		
		for (int i = 0; i < arrOriginal.length; i++) {
			
		    // Condición que evalua si el numero actual es diferente de 1 y el residuo de la division entre si mismo y entre 1 es igual a 0
		    if (arrOriginal[i] % 1 == 0 && arrOriginal[i] % arrOriginal[i] == 0 && arrOriginal[i] != 1) {

		        // Condición que evalua si el residuo del numero actual entre los primeros numeros primos (2, 3, 5, 7, 11, 13) es 0, siempre y cuando el numero actual no sea igual a uno de los numeros primos mencionados
		        if((arrOriginal[i] % 2 == 0 && arrOriginal[i] != 2) || (arrOriginal[i] % 3 == 0 && arrOriginal[i] != 3) || (arrOriginal[i] % 5 == 0 && arrOriginal[i] != 5) || (arrOriginal[i] % 7 == 0 && arrOriginal[i] != 7)){

		        	arrNoPrimos[aux1] = arrOriginal[i];
		            aux1++;

		        } else {
		            
		        	arrPrimos[aux2] = arrOriginal[i];
		            aux2++;

		        }

		    }
	
			System.out.println(i + ": " + arrOriginal[i]);
			
		}
		
		System.arraycopy(arrPrimos, 0, arrModificado, 0, arrPrimos.length);  
        System.arraycopy(arrNoPrimos, 0, arrModificado, arrPrimos.length, arrNoPrimos.length);  
		
        arrModificado[9] = 1;
        
		for(int i = 0; i < 10; i++) {
			
			System.out.println(i + ": " + arrModificado[i]);
			
		}
		
		
		
	}
	
}
