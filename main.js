class Producto {
    constructor(auto,marca,precio,stock){
        this.auto=auto
        this.marca=marca
        this.precio=precio
        this.stock=stock
       
    }
}

const productos = []

const form = document.getElementById('idForm')

const divProductos = document.getElementById('divProductos')






form.addEventListener('submit',(event)=>{
    event.preventDefault()
    let auto = document.getElementById('idNombreProd').value
    let marca = document.getElementById('idMarca').value
    let precio = parseFloat(document.getElementById('idPrecio').value)
    let stock = parseInt(document.getElementById('idStock').value)

const producto = new Producto(auto,marca,precio,stock)

productos.push(producto)
console.log(productos)
form.reset()
})

document.getElementById('botonProductos').addEventListener('click',()=>{
    productos.forEach(producto =>{
        divProductos.innerHTML += `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
             <h5 class="card-title">Nombre:${producto.auto}</h5>
               <p class="card-text">Marca:${producto.marca}</p>
               <p class="card-text">Precio:${producto.precio}</p>
               <p class="card-text">Stock:${producto.stock}</p>
             

  </div>
</div>
        `

    

    })
})
