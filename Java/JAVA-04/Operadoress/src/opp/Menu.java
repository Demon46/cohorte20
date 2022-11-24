package opp;

import java.util.Scanner;

public class Menu {
	Scanner s = new Scanner(System.in);
	int menuOp() {	
		int numero=0;
		System.out.println("\t\t ----- Menu Principal-----");
		System.out.println(" \t\t1: Tablas de Multiplicar ");
		System.out.println(" \t\t2: Operaciones Aritmeticas");
		System.out.println(" \t\t3: Mu");
		System.out.println(" \t\t4: Di");
		System.out.println(" \t\t5: Mo");
		System.out.println(" \t\t6: Bo");
		System.out.println(" \t7: Salir");
		
		System.out.print(" introduzca la opcion: ");
		return numero = s.nextInt();
	}
	
	int subMenuOp() {	
		int numero=0;
		System.out.println("\t\t ----- Menu Operaciones Aritmeticas-----");
		System.out.println(" \t\t1: Suma ");
		System.out.println(" \t\t2: Resta");
		System.out.println(" \t\t3: Multiplicacion");
		System.out.println(" \t\t4: Division");
		System.out.println(" \t\t5: Modulo");
		System.out.println(" \t\t6: Booleans");
		System.out.println(" \t7: Salir");
		
		System.out.print(" introduzca la opcion: ");
		return numero = s.nextInt();
	}

	
}
