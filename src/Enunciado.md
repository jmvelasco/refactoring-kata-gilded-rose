## Enunciado de la Kata Gilded Rose

Hola y bienvenido al equipo de **Gilded Rose**.

Como sabes, somos una pequeña posada con una ubicación privilegiada y vendemos solo los productos más finos. Lamentablemente, la calidad de nuestros productos se **degrada constantemente** a medida que se acerca su fecha de venta.

Contamos con un sistema que actualiza automáticamente nuestro inventario al final de cada día. Fue desarrollado por un colega, Leeroy, que se ha embarcado en nuevas aventuras.

Tu tarea es **añadir una nueva funcionalidad** al sistema para que podamos empezar a vender una nueva categoría de artículos.

### Introducción a nuestro sistema

* Todos los artículos tienen un valor **SellIn** (días para vender) que indica el número de días que tenemos para vender el artículo.
* Todos los artículos tienen un valor **Quality** (calidad) que indica cuán valioso es el artículo.
* Al final de cada día, nuestro sistema debe reducir ambos valores para cada artículo.

### Reglas del inventario (comportamiento actual)

Las reglas sobre cómo se actualiza la calidad de los artículos son las siguientes:

1.  La calidad de un artículo normal disminuye en **1** al final de cada día.
2.  Una vez que la fecha de venta (**SellIn**) ha pasado (es decir, es menor que 0), la **Quality** se degrada el **doble de rápido** (disminuye en 2).
3.  La **Quality** de un artículo **nunca es negativa**.
4.  La **Quality** de un artículo **nunca es mayor de 50**.
5.  **"Aged Brie"** (queso curado) en realidad **aumenta** su **Quality** cuanto más viejo se vuelve (es decir, a medida que su **SellIn** disminuye). Una vez que su fecha de venta ha pasado, la **Quality** del Aged Brie aumenta el doble de rápido.
6.  **"Sulfuras, Hand of Ragnaros"** (un artículo legendario):
    * Nunca tiene que venderse (**SellIn nunca disminuye**).
    * Nunca disminuye su **Quality** (su **Quality** es siempre 80 y no cambia).
7.  **"Backstage passes to a TAFKAL80ETC concert"** (pases para conciertos):
    * Al igual que Aged Brie, su **Quality aumenta** a medida que su **SellIn** se acerca.
    * La **Quality aumenta en 2** cuando quedan **10 días o menos**.
    * La **Quality aumenta en 3** cuando quedan **5 días o menos**.
    * La **Quality cae a 0** después del concierto (**SellIn es menor que 0**).

---

## Tu Tarea (El Nuevo Requisito)

Recientemente hemos firmado un acuerdo con un nuevo proveedor de **artículos "Conjured"** (Conjuros).

Tu tarea es actualizar el sistema para manejar esta nueva categoría de artículos:

* Los artículos **"Conjured"** se degradan en **Quality el doble de rápido** que los artículos normales.

**¡Tu misión es implementar esta nueva característica!** Asegúrate de que el código base existente siga funcionando correctamente después de tus cambios.