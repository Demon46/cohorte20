import java.util.Scanner;

/*
Logica de Programación 7

1.- Solicitar un dia de la semana (lunes a viernes
2.- Solicitar una hora (hora y minutos)
3.- Calcular cuantos minutos faltan para el fin de semana (Viernes 15:00)
4.- Mostrar el resultado por consola
5.- Identificar si los datos de entrada son validos

 * */

public class Logica7 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		String dia = "lunes";
		Integer hora;
		Integer minutos;
		Integer minutosTotalesDia;
		Integer minutosTotales;
		
		Scanner entrada = new Scanner(System.in);
		
		/*System.out.println("Ingresa el dia (Lunes a Viernes)");
		dia = entrada.nextLine();*/
		
		System.out.println("Ingresa la hora (0 a 23)");
		hora = entrada.nextInt();
		
		System.out.println("Ingresa los minutos (0 a 59)");
		minutos = entrada.nextInt();
		
		/*do {
			
			System.out.println("Ingresa el dia (Lunes a Viernes)");
			dia = entrada.next().toLowerCase();
			
			if (dia != "lunes" && dia != "martes" && dia != "miercoles" && dia != "jueves" && dia != "viernes") {
				
				System.out.println("ERROR: Dia no valido. Favor de ingresar un dia de lunes a viernes" + dia);
				
			}
			
			System.out.println("Ingresa la hora (0 a 23)");
			hora = entrada.nextInt();
			
			if (hora < 0 || hora > 23) {
				
				System.out.println("ERROR: Hora no valida. Favor de ingresar una hora entre 0 y 23" + hora);
				
			}
			
			System.out.println("Ingresa los minutos (0 a 59)");
			minutos = entrada.nextInt();
			
			if (minutos < 0 || minutos > 59) {
				
				System.out.println("ERROR: Minutos no validos. Favor de ingresar minutos entre 0 y 59" + minutos);
				
			}
			
		} while ((dia != "lunes" && dia != "martes" && dia != "miercoles" && dia != "jueves" && dia != "viernes") || (hora < 0 || hora > 23) || (minutos < 0 || minutos > 59));*/
		
		if (dia == "viernes" && hora >= 15) {
			
			System.out.println("Felicidades. Tu fin de semana ha comenzado");
			
		} else {
			
			if (dia == "lunes") {
				
				hora = 23 - hora;
				minutos = (59 - minutos) + 1;
				
				minutosTotalesDia = (hora * 60) + minutos;
				
				minutosTotales = minutosTotalesDia + ((24*60)*3) + (15*60);
				
			} else if(dia == "martes") {
				
				hora = 23 - hora;
				minutos = (59 - minutos) + 1;
				
				minutosTotalesDia = (hora * 60) + minutos;
				
				minutosTotales = minutosTotalesDia + ((24*60)*2) + (15*60);

			} else if(dia == "miercoles") {
				
				hora = 23 - hora;
				minutos = (59 - minutos) + 1;
				
				minutosTotalesDia = (hora * 60) + minutos;
				
				minutosTotales = minutosTotalesDia + (24*60) + (15*60);
				
			} else if(dia == "jueves") {
				
				hora = 23 - hora;
				minutos = (59 - minutos) + 1;
				
				minutosTotalesDia = (hora * 60) + minutos;
				
				minutosTotales = minutosTotalesDia + (15*60);
				
			} else {
				
				hora = 14 - hora;
				minutos = (59 - minutos) + 1;
				
				minutosTotalesDia = (hora * 60) + minutos;
				
				minutosTotales = minutosTotalesDia;
				
			}
			
			System.out.println("Faltan " + minutosTotales + " minutos para que comience el fin de semana");
			
		}
		
	}

}
