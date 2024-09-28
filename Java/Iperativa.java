import java.util.Scanner;
public class Iperativa {
    @SuppressWarnings("resource")
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar un número al usuario
        System.out.print("Introduce un número del 1 al 10: ");
        int numero = 0;

        // Manejo de excepciones para capturar errores al ingresar datos
        try {
            numero = scanner.nextInt();
        } catch (Exception e) {
            System.out.println("Error: Debes introducir un número válido.");
            scanner.next(); // Limpiar el buffer del scanner
            return; // Salir del programa si hay un error
        }

        // Uso de if, else if y else
        if (numero < 1) {
            System.out.println("El número es demasiado pequeño.");
        } else if (numero > 10) {
            System.out.println("El número es demasiado grande.");
        } else {
            System.out.println("Número aceptado: " + numero);
        }

        // Uso de switch para clasificar el número
        switch (numero) {
            case 1:
            case 2:
            case 3:
                System.out.println("El número está en el rango bajo (1-3).");
                break;
            case 4:
            case 5:
            case 6:
                System.out.println("El número está en el rango medio (4-6).");
                break;
            case 7:
            case 8:
            case 9:
            case 10:
                System.out.println("El número está en el rango alto (7-10).");
                break;
            default:
                System.out.println("Número fuera de rango.");
                break;
        }

        // Uso de while para contar desde el número hasta 1
        System.out.println("\nCuenta regresiva:");
        int contador = numero;
        while (contador > 0) {
            System.out.println(contador);
            contador--;
        }

        // Uso de for para contar de 1 hasta el número
        System.out.println("\nConteo ascendente:");
        for (int i = 1; i <= numero; i++) {
            System.out.println(i);
        }

        // Uso de for-each con un arreglo
        System.out.println("\nNúmeros pares hasta el número ingresado:");
        int[] numerosPares = {2, 4, 6, 8, 10};
        for (int par : numerosPares) {
            if (par > numero) {
                break; // Rompe el ciclo si el número es mayor que el ingresado
            }
            System.out.println(par);
        }

        // Cerrar el scanner
        scanner.close();
    }

}
