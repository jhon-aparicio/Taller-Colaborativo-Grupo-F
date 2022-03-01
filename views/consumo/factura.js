
fetch('http://localhost:3000/ListaFactura')
    .then(result => result.json())
    .then(data => showBill(data))
    .catch(err => console.log(err));
var productos=[]
fetch('http://localhost:3000/ListaProd')
    .then(result => result.json())
    .then(data => productos=data)
    .catch(err => console.log(err));

const showBill = bills => {
    
    let html = ""
    let pago="";
    let detalle=""
    let subtotal=""
    let productName=""
    bills.map((bill) => {
        subtotal=""
        detalle=""
        if(bill.typePay==true){
            pago = "Efectivo"
        }else{
            pago = "Tarjeta"
        }
        
        bill.details.map((detail) =>{
            productName=""
            console.log(detail.product+" id")
            productos.map((product) =>{
                console.log(product.idProduct+" id2")
                if(product.idProduct==detail.product){
                    subtotal+=`$ ${product.value*detail.cant} <br>`
                    productName=product.description
                }
            })
            if(productName==""){
                detalle+=`Prod: ${detail.product}, x ${detail.cant}<br>`
            }else{
                detalle+=`Prod: ${productName}, x ${detail.cant}<br>`
            }
        })
        html += `<tr>
        <td>${bill.number}</td>
        <td>${bill.dateBill}</td>
        <td>${pago}</td>
        <td>${detalle}</td>
        <td>${subtotal}</td>
        </tr>`

    })
    document.getElementById('tblbody').innerHTML = html
}

