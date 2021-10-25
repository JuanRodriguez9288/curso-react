# Proyecto: Tienda de venta de árboles Bonsai
### Desarrollo: React.js 
### Datos: Firebase
## Introducción

Para la creación de la la aplicación dentro de la carpeta **app_curso** se utilizó el siguiente comando dentro del terminal:
**npx create-react-app mi-app-coder**

Para correr este proyecto es necesaria la instalación de las siguientes librerías:
```
"bootstrap": "^5.1.0",
"firebase": "^9.1.1",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^5.3.0",
```
Con los respectivos comandos en el terminal:
**npm install --save bootstrap**
**npm install firebase**
**npm install react-router-dom**
***
Para iniciar el servidor y poder ejecutar la aplicación en nuestro equipo, se debe ejecutar este comando en el terminal:
**npm start**
De esta manera se iniciará la aplicación en el puerto 3000 de nuestro equipo (si ese puerto está utilizado, lo hará en el 3001 y así sucesivamente).
Accederemos a la aplicación ingresando la siguiente URL en nuestro navegador:
**http://localhost:3000/**
***
El proyecto consiste en la simulación de una tienda virtual, cuyo objeto de venta en este caso son árboles Bonsai.
Para empezar a describir la página, hay que aclarar que cuenta con un sistema de login de usuarios, por lo tanto se pueden definir 2 estados, que afectan directamente lo que se le muestra al usuario.
Estos dos estados serían:
#### -Sin usuario ingresado
#### -Con usuario ingresado
***
Para que se pueda conocer cual es el estado actual en toda la aplicación, se cuenta con un **Context**, esto es una forma de crear variabes y funciones globales, que son accesibles desde cualquier lugar de la aplicación, pasando las propiedades desde un componente padre a un componete hijo, para eso hay que envolver a la aplicación en estos contextos. 
El context referido al usuario es el UserContext, y cuenta con las siguientes variables y funciones:
```
return (
<UserContext.Provider
value={{
userName,
pass,
login,
logout
}}
>
{children}
</UserContext.Provider>
);
```
Dónde:
**userName**: nombre del usuario
**pass**: contraseña del usuario
**login**: función que crea un usuario dentro del sistema. Recibe un objeto (usuario) y crea el usuario y contraseña, asignando un valor a userName y pass.
**logout**: función que elimina al usuario ingresado al sistema. Asigna un valor vacío userName y pass.

En cada estado se puede hacer uso de diferentes funcionalidades.
Para cada uno, se pueden describir las siguientes:

## Sin usuario ingresado


#### -Acceso a listado de items
Ofrece un listado completo con el nombre de los ítems disponibles para ser comprados.
> **Nota:** Estos datos son levantados desde Firebase.

#### -Acceso a listado de items detallado
Permite un acceso al catálogo con más detalle sobre los ítems, tales como **categoría**, nombre, precio y una imágen descriptiva del producto


#### -Acceso individual a cada ítem
Tanto desde el listado de ítems, así como desde una lista desplegable desde el **navBar**, se puede ver la información de un ítem en particular.

#### -Acceso a los ítems filtrados por categoría
Desde una lista desplegable en el **navBar** se puede traer un listado de ítems agrupandolos según el tipo.
> **Nota:** La **categorización** en los Bonsai se da en función de su medida, los 3 grupos má grandes son Shonin, Omono y Chumono. Estos fueron los usados para simular una discriminación por tipos.

#### -Login de usuario
Permite al usuario acceder a una pantalla donde al ingresar un nombre y contraseña, se simula el ingreso al sistema, cargandole esta información, dando así lugar a funciones que son exclusivas del estado **-Con usuario Ingresado**
> **Nota:** Este usuario y contraseña pueden ser cualquier palabra porque solo se está simulando, ya que lo necesario para acceder a poder comprar ítems y demás funciones es la presencia de un usuario en el sistema.

## Con usuario ingresado
Además de las funcionalidades mencionadas anteriormente, al ingresar al sistema, se le agregan las siguientes:

#### -Acceso a listado de items
Este apartado permanecería igual que en el estado **-Sin usuario Ingresado**
 
#### -Acceso a listado de items detallado
Además de acceder a un catálogo de productos con su información, permite mediante botones seleccionar la cantidad de items que desea comprar y agregarlos al **carrito de compras**
> **Nota:** Este **carrito de compras** es un apartado que se hace disponible al ingresar el usuario, pero solo se puede acceder si es que existe algún ítem agregado.

#### -Acceso individual a cada ítem
Además de lo descripto en el estado **-Sin usuario Ingresado**, se habilita la compra del ítem.

#### -Acceso a los ítems filtrados por categoría
También en esta lista de los ítems filtrada por categoría se permite la compra de estos.

#### -Logoff de usuario
Mediante un botón que se ve al desplegar el **menú de usuario**, el usuario puede cerrar sesión, volviendo la aplicación así al estado **-Sin usuario Ingresado**
> **Nota:** Este **menú de usuario** se agrega al header cuando el usuario efectúa el Login.

#### -Carrito de compras
El carrito de compras se habilita cuando el usuario ingresa al sistema, y se pueden definir 2 estados de este, **vacío** y **con ítems**.  Estos dos estados se representan de manera diferente en el header, dándole información al usuario de cuantos ítems (sí es que tiene) lleva comprados hasta el momento. En el estado vacío no puede acceder al carrito desde el header.
En el carrito se ven los ítems que lleva comprado hast el momento, además de darle la posibilidad de: disminuir la cantidad de un ítem, eliminar el total de ese ítem, y de vaciar el carrito (eliminar todso los ítems).
Cuando lo considere puede finalizar la compra, dándo lugar a una ventana dónde se le piden datos necesarios para concretar esta.
Al finalizar, se le devolverá un número identificatorio único de compra, con el cúal podrá **buscar su compra** para hacer un seguimiento de su estado.

#### -Búsqueda de compra
En esta sección se le permite al usuario buscar mediante un número identificatorio que se le proporciona al usuario, la compra asociada a este, para ver así además de la información, el estado del pedido
> **Nota:** Al crear la compra y guardarla en la base de datos de Firebase, se le asigna un estado en formato string con lo siguiente: **Pedido recibido**. Esto en una ejecución real iría cambiando, por ejemplo, **Pedido en separación**, **Pedido entregado**, etc.



## Datos

Todos los datos de los productos vendidos en la tienda, así cómo la información de las compras realizadas, son alojados en una base de datos no relacional en **Google Firebase**, que es básicamente una plataforma para el desarrollo de aplicaciones.
La información de los **ítems** es ingresada de manera manual en la plataforma para luego ser levantada según los requerimintos de la aplicación.
Por otro lado, las **compras realizadas** y su información correspondiente es ingresada desde la misma aplicación al ser efectuadas.

A nivel de aplicación existe una carpeta **services**, dentro de esta otra llamada **firebase**, dónde se aloja en un archivo **firebase.js** se aloja la información brindada por Firebase al crear nuestra base de datos, para establecer la comunicación desde nuestra app a esta.
Cabe destacar que como parte de esta comunicación, se crearon variables globales dentro de un archivo .env, donde cada desarrollador que quiera correr la aplicación, ingrese sus propias credenciales para hacerlo; estas variables globales son instanciadas en este archivo de configuración firebase,js de la siguiente manera:
```
apiKey: process.env.REACT_APP_apiKey
```
dónde en el archivo .env, en la variable REACT_APP_apiKey, el desarrollador debe ingresar su propia apiKey.

## Desarrollo

### -Proceso de compra

Para realizar una compra el usuario debe de haber ingresado al sistema con la funcionalidad de **-Login de usuario**. De esta manera verá disponible en cada producto, un contador que le permitirá seleccionar la cantidad de determinado ítem a comprar y un botón para confirmar el agregado de esta cantidad al carrito de compras.
Esto puede hacerlo cuantas veces quiera con los ítems que quiera, mientras el stock se lo permita.
> **Nota:** El proceso de agregado y eliminado de items de la compra está diseñado de la siguiente manera: 
> -en el **catálogo de productos**, los botones con el **+** y **-** suman y restan respectivamente en la cantidad a agregar al carrito, la que es confirmada con el botón de **Agregar**.
>  -en el **carrito de compras**, los botones con el **+** y **-** suman y restan respectivamente en la cantidad a eliminar de la compra, la que es confirmada con el botón de **Eliminar**.
>  Esto se explica detalladamente más adelante

El proceso de compra se podría separar en 3 etapas:
#### -Agregado de productos al carrito
#### -Confirmación de la compra
#### -Ingreso de datos para finalizar la compra
Las funciones que afectan a la compra final (carrito de compras) se encuentran en un context, en este caso CartContext, dónde se definen las siguientes variables y funciones:
```
return (
<CartContext.Provider
value={{
productsCart,
addItem,
clear,
changeQuantity,
changeTotalPriceProd,
quantity,
totalPrice,
removeItem,
removeItemAutoWhen0,
restCantItem,
setProductsCart,
totalPriceCart,
}}
>
{children}
</CartContext.Provider>
);
```
Dónde:
**productsCart**: Lista que contiene los productos agregados al carrito
**addItem**: Función que recibe un ítem y una cantidad, y lo agrega al listado
**clear**: Función que elimina todos os ítems del carrito, dejandolo vacío
**changeQuantity**: Función que actualiza el contador de ítems en el carrito en el caso de agregar o eliminar.
**quantity**: Variable que indica la cantidad de ítems existentes en el carrito.
**totalPrice**: Variable que es la multiplicación del precio de un producto por la cantidad de este que exista en el carrito.
**changeTotalPriceProd**: Función que actualiza el precio total de un producto según la variación de su cantidad en el carrito.
**totalPriceCart**: Función que recorre toda la lista de ítems en el carrito y suma los totales por ítems (parciales), devolviendo la suma de estos como un total del precio de la compra.
**restCantItem**: Función que se utiliza cuando se elimina un producto por completo del carrito y recibe la cantidad de este para restarla del total.
**removeItem**: Función que recibe una lista de prodctos en el carrito y el item a eliminar, para así quitralo de la lista.
**removeItemAutoWhen0**: Función que es llamada cuando se elimina una cantidad de algún ítem, accionando cuando la cantidad resultante es 0, eliminando el ítem ya que 0 significa que ya no existe en el carrito.

Estas variables y funciones son accedidas desde varios componentes.

### Agregado de productos al carrito
El usuario puede agregar los productos con las funciones que se permiten desde el componente **CounterWhitComands**, que consiste de 3 botones, uno para incrementar la cantidad a agregar, otro para disminuirla y otro para confirmarla (agregar al carrito).
| Botones | Función ejecutada | Variable modificada
|---------|-------------------|--------------------|
|+        | handleAdd  | count: Contador interno, que se vinculará al   contador de ítems en el carrito
|-        |  handleRemove|count: Contador interno, que se vinculará al contador de ítems en el carrito
|Agregar  |  onAddtoCart-->changeQuantity,setProductsCart,addItem |totalPrice,quantity,productsCart

Explicación de la función fuera del context: **onAddtoCart**
Esta función, que se ejecuta al dar click en **Agregar**, básicamente lo que hace es verificar si el producto a agregar en la lista ya existe, de esta manera, si existe, solo va a sumar la cantidad que se agrega de ese mismo producto a la ya existente, y aumentar el precio total de ese producto. Si no existe va a crear un ítem nuevo dentro de la lista de ítems del carrito.

### Confirmación de la compra
Está parte del proceso sería la que se dá dentro del carrito de la compra. Acá además de confirmar la compra (Finalizar compra), se puede disminuir la cantidad de un producto dentro del carrito (Eliminar), eliminar un producto dentro del carrito (Eliminar todos) y eliminar todos los productos dentro del carrito (Vaciar carrito).
La ejecución de estas funciones está disponible desde el componente **CounterWhitComandsInCart**, la de Eliminar todos desde **ItemDetailInCart**, y la de vaciar el carrito, está en el componente **Cart**.
En **CounterWhitComandsInCart**:
| Botones | Función ejecutada | Variable modificada
|---------|-------------------|--------------------|
|+        | handleAdd  | count: Contador interno, que se vinculará al   contador de ítems en el carrito
|-        |  handleRemove|count: Contador interno, que se vinculará al contador de ítems en el carrito
|Eliminar  |  onRemoveCantToCart-->changeQuantity, removeItemAutoWhen0|totalPrice,quantity,productsCart

En **ItemDetailInCart**:
| Botones | Función ejecutada | Variable modificada
|---------|-------------------|--------------------|
|Eliminar todos  |  onRemoveToCart-->removeItem, restCantItem|quantity,productsCart

En **Cart**:
| Botones | Función ejecutada | Variable modificada
|---------|-------------------|--------------------|
|Vaciar carrito |  onRemoveToCart-->removeItem, restCantItem|quantity,productsCart

### Ingreso de datos para finalizar la compra
Esta sería la parte final del proceso de compra, dónde se le solicita al usuario una serie de datos para la creación de la **órden** y su posterior guardado en la base de datos.
Los datos con los que se crea la órden son los siguientes:
```
const  objOrder  = {
buyer: userBuyer,
phone: phone,
email: email,
docBuyer: buyDoc,
codBuy: buyDoc+dateBuy,
items: listaProductosInCart,
total: setTotalPrice(listaProductosInCart),
date  : dateBuy,
status: 'Pedido recibido'
}
```
Dónde:
**buyer**: es el nombre del usuario ingresado al sistema
**phone**: teléfono del usuario, ingresado manualmente en un input
**email**: teléfono del usuario, ingresado manualmente en un input
**docBuyer**: documento del usuario, ingresado manualmente en un input
**items**: lista de productos en la compra
**total**: precio total de la compra
**date**: fecha y hora de ejecución de la compra, generado automáticamente
>El objeto date contiene un número que representa los milisegundos pasados desde el Epoch (fecha de referencia), que es el 1 de enero de 1970.

**status**: estado del pedido, en formato string, generado automáticamente
> Este dato es a modo de simulación, ya que en un caso real podría ser usado para ir variando la información que se le muestra al usuario.

**codBuy**: código único autogenerado a partir de la conjunción del documento ingresado por el usuario y la fecha en formato number.
> Se da por hecho que este va a ser un código único, ya que el mismo usuario con su documento no puede estar haciendo 2 compras en el mismo instante.

Al finalizar la compra y quedar guardada en la base de datos, se le devuelve al usuario este código de compra **codBuy**, para que pueda buscarla y verificar su estado cuando lo necesite.
Este código de compra, es fundamental para el proceso de **búsqueda de una órden**.

### -Búsqueda de una compra ya realizada

Desde el menú de usuario, este mismo puede acceder a la búsqueda de una órden que haya realizado, mediante el ingreso del código de órden que se le facilitó al terminar su compra.
Al ingresar a la búsqueda, se encuentra con un campo de entrada, donde debe ingresar el código y mediante un boton, bscar los datos de esa órden.
Si la órden no existe o no ingresa un número, se le informa que no existe.
En caso de existir, se le devuelve la información correspondiente a su compra.

**FindingOrder**
En este componente, el usuario al ingresar su código y clickear en buscar, es dirigido al componente **FindOrder**, mediante un **Link**, compuesto de la siguiente manera: 
```
{
codBuy
?  <Link  to={`/findorder/${codBuy}`}  ><button  className="btnFindOrder">Buscar</button></Link>
:  <Link  to={`/findorder/noingresado`}  ><button  className="btnFindOrder">Buscar</button></Link>
}
```
**FindOrder**
La búsqueda de esta órden se hace desde la base de datos en Firebase, para lo cual se usa la función que nos brinda Firebase , **getDocs**, que en este caso busca en la **colleción ordenes**, la órden que tenga el mísmo código de compra que el ingresado por el usuario.
Si bien se va a encontrar un ítem individual, en este caso es más conveniente armar una lista, para evitar conflictos en el caso de que por alguna irregularidad la órden este duplicada.
Para mostrar los datos de la órden, se accede al elemento en la posición 0 de esta lista, que debería ser siempre el único.

La generación de un códigó único fue necesaria en este caso, más allá del **id** automático y único que genera el mismo Firebase, ya que no encontré la manera de obtener ese código inmediatamente después de la creación de la órden para dárselo al usuario.