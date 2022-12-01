package mis_clases.colecciones;

import java.util.*;

public class Colecciones {
	
	public static void main(String[] args) {
		
		ArrayList<String> list = new ArrayList<String>();
		 
        list.add("A");
        list.add("B");
        list.add("C");
        list.add("D");
  
        System.out.println("ArrayList: " + list);
        System.out.println("ArrayList con su elemento en la posicion 0: " + list.get(0)); // Numero del elemento
        System.out.println("ArrayList con su elemento en la posicion 2: " + list.get(2));
        
        
        
        HashMap<Integer, String> hm  = new HashMap<Integer, String>();
        
        hm.put(1, "A");
        hm.put(2, "B");
        hm.put(3, "C");
        hm.put(4, "D");
  
        System.out.println("HashMap: " + hm);
        System.out.println("HashMap con indice 1: " + hm.get(1)); // Numero del indice
        System.out.println("HashMap con indice 2: " + hm.get(2));
        
	}

}
