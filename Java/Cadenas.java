public class Cadenas {
    public void main(String[] args) {
    // Declaración primitivo: 
    String str = "letras, números, símbolos y espacios";
    // Declaracion referencia:
    String str2 = new String("letras, números, símbolos y espacios");
    
    // charAt - Obtener el carácter en el índice 0
    char firstChar = str.charAt(0);
    System.out.println("charAt(0): " + firstChar);

    // concat - Concatenar cadenas
    String concatenatedStr = str.concat(" Bienvenidos!");
    System.out.println("concat: " + concatenatedStr);

    // contains - Verificar si la cadena contiene una subcadena
    boolean containsSubstr = str.contains("Mundo");
    System.out.println("contains: " + containsSubstr);

    // equals - Comparar dos cadenas por igualdad
    boolean areEqual = str.equals(str2);
    System.out.println("equals: " + areEqual);

    // length - Obtener la longitud de la cadena
    int length = str.length();
    System.out.println("length: " + length);

    // substring - Extraer una subcadena desde el índice 0 hasta el 4
    String subStr = str.substring(0, 4);
    System.out.println("substring(0, 4): " + subStr);

    // replace - Reemplazar caracteres
    String replacedStr = str.replace("Mundo", "Java");
    System.out.println("replace: " + replacedStr);

    }
}
