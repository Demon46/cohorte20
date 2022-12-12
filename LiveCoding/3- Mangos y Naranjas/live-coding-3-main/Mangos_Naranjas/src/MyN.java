
import java.util.*;

public class MyN {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);

		int x = 0;
		
		while(x <= 10) {
			System.out.println(x);
			x++;
		}
		
		int cant1;
		int cant2;
		int cajas = 124;
		int aux1 = 0;
		int aux2 = 0;
		
		System.out.println("Dame el numero de mangos");
		cant1 = scan.nextInt();
		
		System.out.println("Dame el numero de naranjas");
		cant2 = scan.nextInt();
		
		MangosNaranjas frutas = new MangosNaranjas(cant1, cant2);
		
		while(frutas.getMangos() != frutas.getNaranjas()) {
			
            if(frutas.getMangos() > frutas.getNaranjas()) {
            	
                aux1 = frutas.getMangos() - frutas.getMangos();
                
            } else {
            	
                aux2 = frutas.getNaranjas() - frutas.getMangos();
            	
            }
        
		}
		
        frutas.imprimir(aux1);

		
		/*if(frutas.getMangos() % cajas != 0 && frutas.getNaranjas() % cajas != 0) {
			
			int auxM = frutas.getMangos() / cajas;
			int auxN = frutas.getNaranjas() / cajas;
			
			System.out.println(auxM);
			System.out.println(auxN);
			
		} else {
			
			System.out.println("No puede haber el mismo numero de mangos y naranjas porque el numero no coincide");
			
		}*/
		
	}

	
}
