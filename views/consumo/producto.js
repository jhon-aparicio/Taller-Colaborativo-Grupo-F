fetch('http://localhost:3000/ListaProd')
        .then(result => result.json())
        .then(data => showProduct(data)
        )
        .catch(err => console.log(err));

const showProduct = products => {
    productoos=products
    let html = ""
    products.map((product) => {
        html += `<tr>
        <td>${product.idProduct}</td>
        <td>${product.description}</td>
        <td>${product.value}</td>
        <td>${product.stock}</td>
        <td>${product.type}</td>
        <td>${product.dateExpired}</td>
        </tr>`
    })
    document.getElementById('tblbody').innerHTML = html
}
let productoos=[]
let idProd=""
let htmlid = ""
function buscarid(){
    idProd = document.getElementById('idProd').value
    fetch(`http://localhost:3000/BuscarProducto/${idProd}`)
        .then(result => result.json())
        .then(data => datos=data )
        .catch(err => console.log(err));

    console.log(datos)
    return datos;
}
function showid(){
    const date = new Date().toISOString()
    idProd = document.getElementById('idProd').value
    if(idProd==""){
        alert("El campo no puede ser vacio")
    }
    productoos.map((product)=>{
        if(product.idProduct==idProd){
            console.log(date)
            if(product.dateExpired>=date){
                htmlid += `<tr>
                <td>${product.description}</td>
                <td>${product.value}</td>
                <td>${product.stock}</td>
                <td>${product.type}</td>
                <td>No expirado</td>
                </tr>`
            }else if(product.dateExpired>=date){
                htmlid += `<tr>
                <td>${product.description}</td>
                <td>${product.value}</td>
                <td>${product.stock}</td>
                <td>${product.type}</td>
                <td>EXPIRADO</td>
                </tr>`
            }
            
        }
    })
    document.getElementById('tblbodyID').innerHTML = htmlid
}

function crearProducto(){
    let idProd = document.getElementById('idProduct').value
    let descriptio = document.getElementById('description').value
    let valu = document.getElementById('value').value
    let stoc = document.getElementById('stock').value
    let fecha = document.getElementById('fecha').value
    let typ = document.getElementById('typeProduct').value
    update={
        idProduct: idProd,
        description: descriptio,
        value: valu,
        stock: stoc,
        type: typ,
        dateExpired: fecha
    }
    
    fetch('http://localhost:3000/CrearProducto', {
        method: 'POST',
        body: JSON.stringify(update),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json(),alert("Producto creado correctamente"))
    .then(json => {
        console.log(json);
    });
}
