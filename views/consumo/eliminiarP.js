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
        <td><button type="button" class="btn btn-outline-primary" onclick="eliminar(${product.idProduct})">Eliminar</button></td>
        </tr>`
    })
    document.getElementById('tblbody').innerHTML = html
}
let productoos=[]
function eliminar(id){
    sendDelete(`http://localhost:3000/BorrarProducto/${id}`,'DELETE')
    .then(data => alert(`El producto con id ${id} fue eliminado`)
    )
    .catch(err => console.log(err));  
}
async function sendDelete(url, meth) {
    const response = await fetch(url, {
        method: meth,
        mode: "cors",
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    })
    return response.json()
}