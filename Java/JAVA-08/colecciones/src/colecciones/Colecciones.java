package colecciones;

import java.util.*;

public class Colecciones {
	public static void main(String[] args) {
		
		// List - ArrayList
		// Valores de un mismo tipo
		
		System.out.println("--- ArrayList ---");
		
		List<String> miArray = new ArrayList<String>();
		
		miArray.add("GDL");
		miArray.add("CDMX");
		miArray.add("MTY");
		miArray.add(0, "Manzanillo");
		
		String valorRemovido = miArray.remove(1);
		// boolean valorQuitado = miArray.remove("GDL");
		
		System.out.println(miArray);
		System.out.println(valorRemovido);
		System.out.println(miArray.get(0));
		System.out.println(miArray.size());
		
		imprimir(miArray);
		
		// Es la más rápida de todas
		// No permiten elementos duplicados
		// No guarda los elementos en un orden aparente
		// No maneja indice
		System.out.println("--- HashSet ---");
		
		Set<String> miSet = new HashSet<String>();
		
		miSet.add("Panchito");
		miSet.add("Paco");
		miSet.add("Juan");
		miSet.add("Juan");
		miSet.add("Martín");
		
		System.out.println(miSet.contains("Martín"));
		miSet.remove("Martín");
		imprimir(miSet);
		
		//
		System.out.println("--- HashMap ---");
		
		// Pares de valores llave - valor
		Map<String, Integer> miMap = new HashMap<String, Integer>();
		
		miMap.put("Valor 1", 56);
		miMap.put("Valor 2", 5);
		miMap.put("Valor 3", 70);
		
		System.out.println(miMap);
		System.out.println(miMap.get("Valor 2"));
		System.out.println(miMap.keySet());
		
		for(String llave : miMap.keySet()) {
			System.out.println(llave + " : " + miMap.get(llave));
		}
		
	}
	
	public static void imprimir(Collection coleccion) {
		for(Object elemento : coleccion ) {
			System.out.println("Elemento = " + elemento);
		}
	}

	
}
