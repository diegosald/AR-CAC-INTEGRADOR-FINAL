/*const inicial = ([{ id: 1, urlImg: "imagesJuegos/alan.jpg", titulo: "Alan Wake 2", precio: (~~(Math.random() * 100000)), genero: "Acción" },
{ id: 2, urlImg: "imagesJuegos/brave.jpg", titulo: "Brave", precio: (~~(Math.random() * 100000)), genero: "Aventuras" },
{ id: 3, urlImg: "imagesJuegos/duty.jpeg", titulo: "Call of Duty: Black Ops II", precio: (~~(Math.random() * 100000)), genero: "Multijugador" },
{ id: 4, urlImg: "imagesJuegos/fallout.jpg", titulo: "Fallout 4 (GOTY)", precio: (~~(Math.random() * 100000)), genero: "RPG" },
{ id: 5, urlImg: "imagesJuegos/final.jpg", titulo: "Lightning Returns: Final Fantasy XIII", precio: (~~(Math.random() * 100000)), genero: "RPG" },
{ id: 6, urlImg: "imagesJuegos/lego.jpg", titulo: "LEGO: Marvel Super Heroes ", precio: (~~(Math.random() * 100000)), genero: "Plataformas" },
{ id: 7, urlImg: "imagesJuegos/lies.jpg", titulo: "Lies of P ", precio: (~~(Math.random() * 100000)), genero: "Acción" },
{ id: 8, urlImg: "imagesJuegos/metro.jpeg", titulo: "Metro Exodus", precio: (~~(Math.random() * 100000)), genero: "Aventuras" },
{ id: 9, urlImg: "imagesJuegos/minecraft.jpeg", titulo: "Minecraft: Java Edition", precio: (~~(Math.random() * 100000)), genero: "Multijugador" },
{ id: 10, urlImg: "imagesJuegos/mortal.jpg", titulo: "Mortal Kombat X", precio: (~~(Math.random() * 100000)), genero: "Plataformas" },
{ id: 11, urlImg: "imagesJuegos/no_man.jpg", titulo: "No Man's Sky", precio: (~~(Math.random() * 100000)), genero: "Multijugador" },
{ id: 12, urlImg: "imagesJuegos/party.jpg", titulo: "Party Animals", precio: (~~(Math.random() * 100000)), genero: "Acción" },
{ id: 13, urlImg: "imagesJuegos/persona.jpg", titulo: "Persona 5 Royal ", precio: (~~(Math.random() * 100000)), genero: "Aventuras" },
{ id: 14, urlImg: "imagesJuegos/plague.jpeg", titulo: "A Plague Tale: Innocence", precio: (~~(Math.random() * 100000)), genero: "Horror" },
{ id: 15, urlImg: "imagesJuegos/resident.jpeg", titulo: "Resident Evil 4 (2005)", precio: (~~(Math.random() * 100000)), genero: "Horror" },
{ id: 16, urlImg: "imagesJuegos/resident6.jpeg", titulo: "Resident Evil 6", precio: (~~(Math.random() * 100000)), genero: "Horror" },
{ id: 17, urlImg: "imagesJuegos/street.jpg", titulo: "Street Fighter 6 Deluxe Edition", precio: (~~(Math.random() * 100000)), genero: "Lucha" },
{ id: 18, urlImg: "imagesJuegos/witcher.jpg", titulo: "The Witcher 3: Wild Hunt", precio: (~~(Math.random() * 100000)), genero: "RPG" }
])*/

var datos;
var datosCompras;

function ajax() {
  // De esta forma se obtiene la instancia del objeto XMLHttpRequest
    connection = new XMLHttpRequest();
  
  // Preparando la funciÃ³n de respuesta
  connection.onreadystatechange = response;
   // Realizando la peticiÃ³n HTTP con mÃ©todo POST
  connection.open('GET', 'ListaJuegosJson', false);
  connection.send()
}
 
function response() {
  if(connection.readyState == 4) {
    datos =  JSON.parse(connection.responseText)
    //alert(connection.responseText)
 /*  for (i = 0 ; i < datos.length ; i++){
	     alert(datos[i]["id"] + " " + datos[i]["titulo"])  
   } */
   
   
  }
 
}

function ajax1() {
  // De esta forma se obtiene la instancia del objeto XMLHttpRequest
    connection = new XMLHttpRequest();
  
  // Preparando la funciÃ³n de respuesta
  connection.onreadystatechange = response1;
   // Realizando la peticiÃ³n HTTP con mÃ©todo POST
  connection.open('GET', 'ListaComprasJson', false);
  connection.send()
}
 
function response1() {
  if(connection.readyState == 4) {
    datosCompras =  JSON.parse(connection.responseText)
    //alert(connection.responseText)
 /*  for (i = 0 ; i < datos.length ; i++){
	     alert(datos[i]["id"] + " " + datos[i]["titulo"])  
   } */
   
   
  }
 
}
   
ajax();
ajax1();



let catalogo = datos

let compras = datosCompras



//let catalogo = inicial
c1 = 1
let cards = document.getElementById("cards")
let compra = ([{idJuego: "", cantidadJuego: "", idCliente: c1}])
let cJ = 0

function showCard() {
    let i = 0
    catalogo.forEach(c => {
        cards.innerHTML += `<div class="card" id="card${i}">
    <img id="imagen" src="images-upload/${c.imgurl}" alt="">
    <hr>
    <div class="ti">
        <p id="titulo">${c.titulo}</p>
    </div>             
    <hr>
    <div class="inferior">
        <p id="precio">$${c.precio}</p>
        <img src="images/anadir-al-carrito (1).png" alt="" id="${c.id}" onclick="cantidadCarrito(${c.id})">
    </div>
</div>`
    })
}

function todosCard() {
    let load = aleatorio()
    cards.innerHTML = `
    	<div class="loading">
        <img src="images/loading-${load}.gif" alt="" id="load">
        </div>
        `;
    setTimeout(function () {
        let i = 0
        cards.innerHTML = ""
        catalogo.forEach(c => {
            cards.innerHTML += `<div class="card" id="card${i}">
    <img id="imagen" src="images-upload/${c.imgurl}" alt="">
    <hr>
    <div class="ti">
        <p id="titulo">${c.titulo}</p>
    </div>             
    <hr>
    <div class="inferior">
        <p id="precio">$${c.precio}</p>
        <img src="images/anadir-al-carrito (1).png" alt="" id="${c.id}" onclick="cantidadCarrito(${c.id})"">
    </div>
</div>`
            i++
        })
    }, 2000);
    let miCheckBox = document.getElementById("checkbox");
    if (miCheckBox.checked) {miCheckBox.checked = false;
}
}

let acc = document.getElementById("acc")
let aven = document.getElementById("aven")
let horr = document.getElementById("horr")
let lu = document.getElementById("lu")
let mul = document.getElementById("mul")
let pla = document.getElementById("pla")
let rpg = document.getElementById("rpg")
let tod = document.getElementById("tod")

let acc1 = document.getElementById("acc1")
let aven1 = document.getElementById("aven1")
let horr1 = document.getElementById("horr1")
let lu1 = document.getElementById("lu1")
let mul1 = document.getElementById("mul1")
let pla1 = document.getElementById("pla1")
let rpg1 = document.getElementById("rpg1")
let tod1 = document.getElementById("tod1")

 		

function showCant(name, id) {
    let i = 0
    let j = 0

    while (i < catalogo.length) {
        if (catalogo[i].genero == name) {
            j++
        }
        i++
    }


    switch (id) {
        case "acc":
            acc.innerHTML = j
            break
        case "aven":
            aven.innerHTML = j
            break
        case "horr":
            horr.innerHTML = j
            break
        case "lu":
            lu.innerHTML = j
            break
        case "mul":
            mul.innerHTML = j
            break
        case "pla":
            pla.innerHTML = j
            break
        case "rpg":
            rpg.innerHTML = j
            break
        case "tod":
            tod.innerHTML = i
        default:
            break
    }
}

function showCant1(name, id) {
    let i = 0
    let j = 0

    while (i < catalogo.length) {
        if (catalogo[i].genero == name) {
            j++
        }
        i++
    }


    switch (id) {
        case "acc1":
            acc1.innerHTML = j
            break
        case "aven1":
            aven1.innerHTML = j
            break
        case "horr1":
            horr1.innerHTML = j
            break
        case "lu1":
            lu1.innerHTML = j
            break
        case "mul1":
            mul1.innerHTML = j
            break
        case "pla1":
            pla1.innerHTML = j
            break
        case "rpg1":
            rpg1.innerHTML = j
            break
        case "tod1":
            tod1.innerHTML = i
        default:
            break
    }
}

function accionCard(a) {
    let i = 0
    let load = aleatorio()
    cards.innerHTML = `
        <div class="loading">
        <img src="images/loading-${load}.gif" alt="" id="load">
        </div>
        `;

    setTimeout(function () {
        cards.innerHTML = ""
        while (i < catalogo.length) {
            if (catalogo[i].genero == a) {
                cards.innerHTML += `<div class="card" id="card${i}">
                    <img id="imagen" src="images-upload/${catalogo[i].imgurl}" alt="">
                    <hr>
                    <div class="ti">
                    <p id="titulo">${catalogo[i].titulo}</p>
                    </div>             
                    <hr>
                    <div class="inferior">
                    <p id="precio">$${catalogo[i].precio}</p>
                    <img src="images/anadir-al-carrito (1).png" alt="" id="${catalogo[i].id}" onclick="cantidadCarrito(${catalogo[i].id})">
                    </div>
                    </div>`
            }
            i++
        }
    }, 2000);
    let mCheckBox = document.getElementById("checkbox");
    if (mCheckBox.checked) {
        mCheckBox.checked = false;
}
}

let carrito = document.getElementById("carrito")
let carri = document.getElementById("carri")
function showCarrito() {
    carrito.classList.toggle("showCarrito")
}

function aleatorio() {
    return Math.round(Math.random() * (2 - 1) + 1);
}

let cant = document.getElementById("cantCarrito")

function inicioCarr() {
    let c = 0
    cant.innerHTML = c
}
let ca = 0


function cantidadCarrito(id) {
    ca++
    cant.innerHTML = ca
    let a = `cardCa${id}`
    if (document.getElementById(a)) {
        editarCarrito(id)
        editarCompra(id)
    } else {
        agregarCarrito(id)
        agregarCompra(id)
    }
    sumarCarrito(id)
}

function agregarCompra(id) {
    compra[cJ] = ({idJuego: id, cantidadJuego: document.getElementById(`cantidadCard${id}`).value, idCliente: c1})
    cJ++
    document.getElementById(`idJuego-${id}`).value = id
    document.getElementById(`cantidadJuego-${id}`).value = document.getElementById(`cantidadCard${id}`).value
    document.getElementById("idCliente-txt").value = c1
}

function editarCompra(id) {
    let i = 0
    while(i < compra.length){
        if(compra[i].idJuego == id)
        compra[i].cantidadJuego = document.getElementById(`cantidadCard${id}`).value
        document.getElementById(`cantidadJuego-${id}`).value = document.getElementById(`cantidadCard${id}`).value
        i++
    }
}

function editarCarrito(id) {
    let a = document.getElementById(`cantidadCard${id}`).value
    a++
    document.getElementById(`cantidadCard${id}`).value = a
    let b = document.getElementById(`precio${id}`).innerHTML
    let c = 0
    c = parseInt(b, 10)
    let d = parseInt(catalogo[id - 1].precio, 10)
    c += d
    document.getElementById(`precio${id}`).innerHTML = c
}

let cardsCa = document.getElementById("cardsCa")

function agregarCarrito(id) {
    let i = 0
    while (i < catalogo.length) {
        if (catalogo[i].id == id) {
            /* cardsCa.innerHTML += `<div class="cardCa" id="cardCa${id}">
            <img id="imagen" src="${catalogo[i].imgurl}" alt="">
            <div class="derecha">
                <p id="titulo">${catalogo[i].titulo}</p>
                <hr>
                <div class="inferiorCa">
                    <p id="precio">$<span id="precio${id}">${catalogo[i].precio}</span></p>
                    <span class="material-symbols-outlined" onclick="quitarCard()">
                        cancel
                    </span>
                    <p id="cant">Cantidad: <input type="number" class="inputCard" id="cantidadCard${id}" /></p>
                </div>
            </div>
        </div>` */
            const cardCa = document.createElement("div")
            cardCa.classList.add("cardCa")
            cardCa.setAttribute("id", `cardCa${id}`)
            const img = document.createElement("img")
            img.setAttribute("id", "imagen")
            img.setAttribute("src", `images-upload/${catalogo[i].imgurl}`)
            const derecha = document.createElement("div")
            derecha.classList.add("derecha")
            const parrafo1 = document.createElement("p")
            parrafo1.setAttribute("id", "titulo")
            parrafo1.innerHTML = `${catalogo[i].titulo}`
            const linea = document.createElement("hr")
            const inferiorCa = document.createElement("div")
            inferiorCa.classList.add("inferiorCa")
            const parrafo2 = document.createElement("p")
            parrafo2.setAttribute("id", "precio")
            parrafo2.innerHTML = "$"
            const span1 = document.createElement("span")
            span1.setAttribute("id", `precio${id}`)
            span1.innerHTML = `${catalogo[i].precio}`
            const span2 = document.createElement("span")
            span2.classList.add("material-symbols-outlined")
            span2.setAttribute("onclick", `quitarCard(${i},${id})`)
            span2.innerHTML = "cancel"
            const parrafo3 = document.createElement("p")
            parrafo3.setAttribute("id", "cant")
            parrafo3.innerHTML = "Cantidad: "
            const input = document.createElement("input")
            input.classList.add("inputCard")
            input.setAttribute("type", "number")
            input.setAttribute("onchange", `valorInput(${i},${id})`)
            input.setAttribute("id", `cantidadCard${id}`)
            input.setAttribute("min", "0")
            input.setAttribute("max", "15")
            input.setAttribute("value", "1")
            
            const input1 = document.createElement("input")
            input1.setAttribute("type", "number")
            input1.setAttribute("value", "1")
            input1.setAttribute("id", `idJuego-${id}`)
            input1.setAttribute("name", "idJuego-txt")
            input1.setAttribute("style", "display: none")

            const input2 = document.createElement("input")
            input2.setAttribute("type", "number")
            input2.setAttribute("value", "1")
            input2.setAttribute("id", `cantidadJuego-${id}`)
            input2.setAttribute("name", "cantidadJuego-txt")
            input2.setAttribute("style", "display: none")

            parrafo2.appendChild(span1)
            inferiorCa.appendChild(parrafo2)
            inferiorCa.appendChild(span2)
            parrafo3.appendChild(input)
            inferiorCa.appendChild(parrafo3)

            derecha.appendChild(parrafo1)
            derecha.appendChild(linea)
            derecha.appendChild(inferiorCa)

            cardCa.appendChild(img)
            cardCa.appendChild(derecha)
            cardCa.appendChild(input1)
            cardCa.appendChild(input2)

            cardsCa.appendChild(cardCa)
            
            break
        }
        i++
    }
}

function valorInput(i, id) {
    let a = parseInt(catalogo[i].precio, 10)
    let b = parseInt(document.getElementById(`cantidadCard${id}`).value, 10)
    let d = a * b
    let c = document.getElementById(`precio${id}`).innerHTML
    let e = parseInt(c)
    document.getElementById(`precio${id}`).innerHTML = d

    let q = document.getElementById(`precio${id}`).innerHTML
    let w = parseInt(q, 10)
    console.log(w)
    console.log(e)
    if (w > c) {
        ca++
        cant.innerHTML = ca
        tot += parseInt(catalogo[i].precio, 10)
        total.innerHTML = `$${tot}`
        document.getElementById(`cantidadJuego-${id}`).value = document.getElementById(`cantidadCard${id}`).value
        let j = 0
        while(j < compra.length){
            if(compra[j].idJuego == id)
            compra[j].cantidadJuego = document.getElementById(`cantidadCard${id}`).value
            j++
        }
    } else {
        ca--
        cant.innerHTML = ca
        tot -= parseInt(catalogo[i].precio, 10)
        total.innerHTML = `$${tot}`
        document.getElementById(`cantidadJuego-${id}`).value = document.getElementById(`cantidadCard${id}`).value
        let j = 0
        while(j < compra.length){
            if(compra[j].idJuego == id)
            compra[j].cantidadJuego = document.getElementById(`cantidadCard${id}`).value
            j++
        }
    }

    if (b == "0") {
        quitarCard(i, id)
        let k = 0
        while(k < compra.length){
            if(compra[k].idJuego == id)
            compra.splice(k, 1)
            k++
            cJ = compra.length
        }
    }
}

function quitarCard(i, id) {
    let a = document.getElementById(`cardCa${id}`)
    let b = document.getElementById(`precio${id}`).innerHTML
    let c = document.getElementById(`cantidadCard${id}`).value
    cardsCa.removeChild(a)
    tot -= parseInt(b)
    total.innerHTML = `$${tot}`
    ca -= parseInt(c)
    cant.innerHTML = ca
    let k = 0
        while(k < compra.length){
            if(compra[k].idJuego == id)
            compra.splice(k, 1)
            k++
            cJ = compra.length
        }
}

let total = document.getElementById("total")
let tot = 0
total.innerHTML = tot
function sumarCarrito(id) {
    let i = 0
    while (i < catalogo.length) {
        if (catalogo[i].id == id) {
            tot += parseInt(catalogo[i].precio, 10)
            total.innerHTML = `$${tot}`
            break
        }
        i++
    }
}

let cerrar = document.getElementById("close")

function cerrarCarrito() {
    carrito.classList.toggle("showCarrito")
}

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("boton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let conf = document.getElementById("conf")



/*function addCompra(){
	$.ajax({
   url: AddCompraArray,
   dataType: 'json',
   type: 'post',
   data: { lista: compra},
   success:function(){}
  });
}*/
