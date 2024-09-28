import java.util.Scanner;

public class SolicitarDato {
    public static void main(String[] args) {
        // Crear un objeto Scanner para leer entrada del usuario
        Scanner scanner = new Scanner(System.in);

        // Solicitar un dato por consola
        System.out.print("Por favor, introduce un dato: ");
        String dato = scanner.nextLine();

        // Imprimir el dato ingresado
        System.out.println("El dato ingresado es: " + dato);

        // Cerrar el scanner
        scanner.close();
    }
}
