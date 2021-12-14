# Taller Colaborativo Grupo F
# El servidor se ejecuta en el puerto 3000
# Bajo la linea de comando 'npm run dev' haciendo uso de la dependencia nodemon
 
# Dentro de carpeta routes se encuentran las distintas rutas de las cuales se hacen uso para el consumo de una API
# '/ListaProd' Trae la lista de productos en existencia haciendo uso del metodo GET
# '/CrearProducto' Para crear un producto haciendo uso del POST, haciendo uso de body/raw tipo JSON en POSTMAN con la estructura:
# { "idProduct": " ","description": " ","value": 0,"stock": 0, "type": " ","dateExpired": "AAAA-MM-DD" }
# '/BorrarProducto/:idProduct' Para eliminar un producto de acuerdo a su ID haciendo uso de DELETE, recibiendo asi desde la ruta el id del producto que se desea eliminar
# '/BuscarProducto/:idProduct' Busca un producto especifico de acuerdo a su ID haciendo uso del metodo GET
# '/ModificarProducto/:idProduct' Permite modificar un producto especifico basado en su ID haciendo uso del metodo PUT donde en el body/raw tipo JSON en POSTMAN con la estructura:
# { "Nombre del valor a modificar": "Nuevo valor" }