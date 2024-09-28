public class Variables {
    public static void main(String[] args) {
        //final
        int age = 28;
        char grade = 'A';
        boolean late = true;
        byte b = 20;
        long num1 = 1234567;
        short no = 10;
        float k = (float) 12.5;
        double pi = 3.14;

        // Operadores Aritméticos
        System.out.println("Suma de age + b: " + (age + b));
        System.out.println("Incremento de age: " + (++age));
        System.out.println("Sustracción de age - no: " + (age - no));
        System.out.println("Decremento de no: " + (--no));
        System.out.println("Multiplicación de k * pi: " + (k * pi));
        System.out.println("División de k / pi: " + (k / pi));
        System.out.println("Módulo de age % no: " + (age % no));

        // Asignación Compuesta
        age += 5;
        System.out.println("age después de += 5: " + age);
        k *= 2;
        System.out.println("k después de *= 2: " + k);

        // Operadores Lógicos
        System.out.println("¿age es mayor que 25 y el grade es 'A'? " + (age > 25 && grade == 'A'));
        System.out.println("¿age es mayor que 30 o no es tarde? " + (age > 30 || !late));
        System.out.println("¿late es diferente de false? " + (!late));
        System.out.println("¿Solo uno es true: (age > 25) ^ (grade == 'B')? " + ((age > 25) ^ (grade == 'B')));

        // Operadores de Comparación
        System.out.println("¿age es mayor que 20? " + (age > 20));
        System.out.println("¿age es menor o igual que 30? " + (age <= 30));
        System.out.println("¿grade es igual a 'A'? " + (grade == 'A'));
        System.out.println("¿late es igual a true? " + (late == true));
        System.out.println("¿num1 es distinto de 1000000? " + (num1 != 1000000));

        // Operador instanceof (usado con clases, no se aplica a tipos primitivos)
        String name = "John";
        System.out.println("¿name es una instancia de String? " + (name instanceof String));
    }
}
