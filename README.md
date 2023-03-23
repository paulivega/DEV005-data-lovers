POKÉMON DATA

# Definición del producto

Para nuestro producto los principales usuarios son fanáticos y jugadores de Pokémon Go.

Los principales objetivos son poder identificar cuales son los Pokémones más fuertes, poder ordenarlos según sus Combat points y Hits points y observar los diferentes tipos que hay.

Los datos más relevantes que permite mostrar la interfaz son las diferentes clasificaciones por tipos cómo: Water, Ice, Fire, etc. ya que permite que el usuario pueda identificar del universo de Pokémon una muestra según su tipo.

Además en la interfaz se muestran los datos de los Pokémones según sus Combat points (CP) Y Hits points (HP) lo que permite que el usuario pueda elegir el Pokémon que más le convenga para el juego.

El usuario puede utilizar el producto antes, durante o despues de jugar cartas Pokémon o Pokémon GO. También por simplemente reconocer los Pokémones.

----
# Diseño de la Interfaz de Usuario

## Prototipo de baja fidelidad

Para nuestro prototipo de baja fidelidad, primero nos enfocamos en cómo nos gustaría que se observar la información de cada personaje, definiendo si queríamos que fuera una tarjeta, diagrama, etc. Una vez definida el modelo de carta, realizamos el modelo en alta fidelidad.

![Modelo de baja finalidad](src\img\bajafidelidad.jpg)
----
## Prototipo de alta fidelidad

Para el prototipo de alta fidelidad, realizamos un diseño de las cartas y sus colores, además de un banner y una imagen carta tipo que se creó en photoshop. Luego creamos directamente en la interfaz en un modelo de alta fidelidad.

Figma -> https://www.figma.com/file/Pd7l1w3zZmts5ezXNjyNJu/Pokemon-Lovers?node-id=33%3A60&t=1XmSkOefp9FmCXSC-1

![Modelo de alta finalidad](src\img\altafidelidad.jpg)

-----
## Vistas responsive

Nuestro producto es adaptable tanto para vistas desktop, tablet y móvil.

![Vistas responsive](src\img\Vistasresponsive.jpg)

----
## Pruebas unitarias

![Test](src\img\test.jpg)

# listado de problemas que detectamos a través de tests de usabilidad:

* Funcionalidad:

#Boton All: No se desactivaba una vez presionado, por lo cual podía traer la data infinitamente mientras fuera presionado.

* Visibilidad:

#Boton All : Inicialmente cuando pudimos mostrar la data, utilizamos un botón all, que no tenía color, lo cual lo hacía confuso y hacía pensar al usuario que podía ser un campo de ingreso de texto ya que se veía igual al input y no un elemento para realizar click.

#Fondo: El color de fondo al ser blanco, ayudaba a ver la información, pero no realizaba un buen match con la temática, por lo cual se cambió por un tema más representativo de la saga.

#Sombra de las cards: Las tarjetas donde se muestra la información tenían una sombra que no ayudaba en una visibilidad nítida de la información.

#Fondo elemento tipo: Era blanco, lo cual no ayudaba a una buena lectura de la información.

#Colores de los elementos HP y CP: las guías de colores no ayudaban a la lectura de la información, por lo cual decidimos cambiar el color de la fuente y sacar las guías.

#Aumento del gap de las cards: Al estar los elementos muy juntos, se pierde la lectura de la información por lo cual se aumenta el gap entre ellas.

#Vista de móviles y tablet: se nos desbordaban las imágenes y la barra de navegación cuando se usaba la aplicación en dispositivos más pequeños que el computador.