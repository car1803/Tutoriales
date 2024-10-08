import java.util.ArrayList;
import java.util.Arrays;

public class JavaArraysExample {
    public static void main(String[] args) {
        // 1. Definir un array de manera directa
        int[] directArray = {1, 2, 3, 4, 5};
        System.out.println("Array directo: " + Arrays.toString(directArray));
        
        // 2. Definir un array asignando capacidad
        int[] assignedArray = new int[5];
        Arrays.fill(assignedArray, 9);  // Llenar con valor 9
        assignedArray[0] = 10;  // Asignar valores
        System.out.println("Array llenado con 9: " + Arrays.toString(assignedArray));

        // 3. Obtener longitud de un array
        int length = directArray.length;
        System.out.println("Longitud del array directo: " + length);

        // 5. Usar ArrayList
        ArrayList<Integer> arrayList = new ArrayList<>();  // Crear ArrayList
        arrayList.add(10);  // Agregar elementos
        arrayList.add(20);
        arrayList.add(30);
        System.out.println("ArrayList inicial: " + arrayList);

        // 6. Acceder a elementos y modificarlos
        int firstElement = arrayList.get(0);  // Obtener primer elemento
        System.out.println("Primer elemento de ArrayList: " + firstElement);
        arrayList.set(0, 100);  // Reemplazar el primer elemento
        System.out.println("ArrayList después de set: " + arrayList);

        // 7. Eliminar elementos
        arrayList.remove(1);  // Eliminar elemento en la posición 1
        System.out.println("ArrayList después de eliminar: " + arrayList);

        // 9. Usar métodos contains, size y isEmpty
        boolean containsElement = arrayList.contains(100);  // Verificar si contiene un elemento
        System.out.println("¿Contiene 100?: " + containsElement);
        int size = arrayList.size();  // Obtener tamaño de la lista
        System.out.println("Tamaño de ArrayList: " + size);
        boolean isEmpty = arrayList.isEmpty();  // Verificar si está vacía
        System.out.println("¿ArrayList está vacía?: " + isEmpty);

        // 10. Crear un array bidimensional (matriz 2D) inmutable
        int[][] matrix = {{1, 2}, {3, 4}};
        int valueFromMatrix = matrix[0][1];  // Acceder a un valor en la matriz
        System.out.println("Valor de la matriz 2D: " + valueFromMatrix);

        // 11. Crear una lista 2D dinámica (mutable)
        ArrayList<ArrayList<Integer>> arrayList2D = new ArrayList<>();
        ArrayList<Integer> row1 = new ArrayList<>();
        row1.add(1);
        row1.add(2);
        arrayList2D.add(row1);
        ArrayList<Integer> row2 = new ArrayList<>();
        row2.add(3);
        row2.add(4);
        arrayList2D.add(row2);
        //int valueFromArrayList2D = arrayList2D[0][1];
        int valueFromArrayList2D = arrayList2D.get(0).get(1);  // Acceder a un valor
        System.out.println("Valor de la lista 2D: " + valueFromArrayList2D);
    }
}
