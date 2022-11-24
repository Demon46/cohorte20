package opp;

public class SubMarino {
	
	 void submenu() {
		Menu m = new Menu();
		OperacionesAritmeticas oa = new OperacionesAritmeticas();
		int opcion = m.subMenuOp();
		do {
			switch (opcion) {
			case 1: {			
				System.out.println(oa.add());
				break;
			}
			case 2: {
				System.out.println(oa.sustrac());
				break;
			}
			case 3:{
				System.out.println(oa.producto());
				break;
			}
			case 4: {
				System.out.println(oa.divide());
				break;
			}
			case 5:{
				System.out.println(oa.modulo());
				break;
			}
			case 6: {
				System.out.println("soy el caso 6");
				break;
			}
			default:
				break;
			}
			
		} while ( opcion != 7);
		
		
	}
	


}
