# Taller Colaborativo Grupo F
 El servidor se ejecuta en el puerto 3000
 #
 Bajo la linea de comando 'npm run dev' haciendo uso de la dependencia nodemon
 #
 Dentro de carpeta routes se encuentran las distintas rutas de las cuales se hacen uso para el consumo de una API:
 #
 Inicialmente para lo relacionado al CRUD de productos.
 #
 '/ListaProd' Trae la lista de productos en existencia haciendo uso del metodo GET
 #
 '/CrearProducto' Para crear un producto haciendo uso del POST, haciendo uso de body/raw tipo JSON en POSTMAN con la estructura: { "idProduct": " ","description": " ","value": 0,"stock": 0, "type": " ","dateExpired": "AAAA-MM-DD" }
 #
 '/BorrarProducto/:idProduct' Para eliminar un producto de acuerdo a su ID haciendo uso de DELETE, recibiendo asi desde la ruta el id del producto que se desea eliminar
 #
 '/BuscarProducto/:idProduct' Busca un producto especifico de acuerdo a su ID haciendo uso del metodo GET
#
 '/ModificarProducto/:idProduct' Permite modificar un producto especifico basado en su ID haciendo uso del metodo PUT donde en el body/raw tipo JSON en POSTMAN con la estructura: { "Nombre del valor a modificar": "Nuevo valor" }
 #
 '/isExpired/:idProduct' Permite saber si el producto ya expiro se obtiene true para expirado y false para no expirado, haciendo uso de GET
#
Siguiendo para el CRUD de facturas
#
'/ListaFactura' Para listar todas las facturas registradas haciendo uso de GET
#
'/CrearFactura' Para crear una factura haciendo uso de POST, haciendo uso de body/raw tipo JSON en POSTMAN con la estructura: { "number":" ", "dateBill":"AAAA-MM-DD", "typePay":true/false, "details":[{ "cant":0, "product":" "}, "cant":0, "product":" "}...]}
#
'/BorrarFactura/:number' Para eliminar una factura de acuerdo a su number haciendo uso de DELETE, recibiendo asi desde la ruta el number de la factura que se desea eliminar
#
'/BuscarFactura/:number' Busca una factura especifica de acuerdo a su number haciendo uso del metodo GET
#
'/ModificarFactura/:number' Permite modificar una factura especifica basado en su number haciendo uso del metodo PUT donde en el body/raw tipo JSON en POSTMAN con la estructura: { "Nombre del valor a modificar": "Nuevo valor" }
#
Siguiendo con lo relacionado al CRUD de detalles
#
'/ListaDetalle/:number' Por medio del GET se traen todos los detalles relacionados a una factura siendo este el parametro que se envia dentro de la ruta
#
'/BorrarDetalle/:number/:product' Por medio de DELETE se hace la eliminación del detalle de una factura basados en el numero de la factura (primer parametro) y el id del producto (segundo parametro) 
#
'/BuscarDetalle/:number/:product' Por medeio de GET se trae el detalle especifico de un producto dentro de una factura