# FUNCIÓN DEBOUNCE
---
## NIVEL 1

Los scripts de esta carpeta no pueden ejecutarse por sí solos, son solo la lógica. La ejecución se implementa en el test, usando funciones mock para emular el input de los usuarios.

## NIVEL 2

Para ejecutar ‘debounce_CLI.js’, primero navega a la carpeta ‘debounce_nivel2’ desde el terminal y escribe ‘node debounce_CLI’. El programa te pedirá que pulses cualquier tecla del teclado, sin importar cual. Eso llamará una función de impresión en pantalla que se ejecutará solo cuando pase 1 segundo desde la última vez que hayas pulsado cualquier tecla. Esto es gracias a la función debounce. El texto que imprimirá será un aviso de que puedes salir del programa pulsando la barra espaciadora.

## NIVEL 3

En la carpeta ‘debounce_nivel3’, el archivo ‘debounce.html’ abre una web que imprime ‘COMPRA REALIZADA en la web cada vez que pulsas el botón ‘COMPRAR’. Esta impresión solo aparecerá cuando haya pasado 1 segundo desde tu último clic, en caso de que pulses a un ritmo más rápido que ese.
Si en el código modificaras la llamada a la función memoize y aplicaras un callback que no fuese una función, este error se imprimiría en pantalla.
