/**
 * 
 */
var datos;
var datosCompras;
var idCompras;
var usuarios;
//let imgUs = aleatorio1();
//document.getElementById("imgUsuario").setAttribute(src, `images/icono${imgUs}.png`)
function aleatorio1() {
    return Math.round(Math.random() * (5 - 4) + 1);
}

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

function ajax2() {
  // De esta forma se obtiene la instancia del objeto XMLHttpRequest
    connection = new XMLHttpRequest();
  
  // Preparando la funciÃ³n de respuesta
  connection.onreadystatechange = response2;
   // Realizando la peticiÃ³n HTTP con mÃ©todo POST
  connection.open('GET', 'ListaidCompraJson', false);
  connection.send()
}
 
function response2() {
  if(connection.readyState == 4) {
    idCompras =  JSON.parse(connection.responseText)
    //alert(connection.responseText)
 /*  for (i = 0 ; i < datos.length ; i++){
	     alert(datos[i]["id"] + " " + datos[i]["titulo"])  
   } */
   
  }
 
}

function ajax3() {
  // De esta forma se obtiene la instancia del objeto XMLHttpRequest
    connection = new XMLHttpRequest();
  
  // Preparando la funciÃ³n de respuesta
  connection.onreadystatechange = response3;
   // Realizando la peticiÃ³n HTTP con mÃ©todo POST
  connection.open('GET', 'ListaUsuarioJson', false);
  connection.send()
}
 
function response3() {
  if(connection.readyState == 4) {
    usuarios =  JSON.parse(connection.responseText)
    //alert(connection.responseText)
 /*  for (i = 0 ; i < datos.length ; i++){
	     alert(datos[i]["id"] + " " + datos[i]["titulo"])  
   } */
   
  }
 
}
   
ajax();
ajax1();
ajax2();
ajax3();


let catalogo = datos

let compras = datosCompras

let idCompra = idCompras

let clientes = usuarios

function listCompras(){
	document.getElementById("listaInci").innerHTML=` `
	document.getElementById("section").innerHTML=`
	<div class="d-flex">
<a class="btn btn-primary mt-3 mb-3 ms-3 fw-bolder" href="administracion.jsp">VOLVER AL MENU</a>
</div>
	
	<div class="d-flex justify-content-center mt-3">
		<h1 class="fw-bolder">LISTA DE COMPRAS</h1>
	</div>

	<div class="container d-flex flex-column" >
	
	<table class="table">
  <thead>
    <tr>
      <th scope="col">ID de Compra</th>
      <th scope="col">ID de cliente</th>
    </tr>
  </thead>
  <tbody id="body"></tbody>
  </table>

	</div>
	
	</div>`	
  
  for(let i = 0; i < idCompra.length; i++){
  document.getElementById("body").innerHTML+=`
  			
				<tr>
					<th scope="row">${idCompra[i].idCompra} <a class="btn btn-primary ms-2" onclick="verCompra(${idCompra[i].idCompra})" href="#listaInci">Ver</a></th>
					<td>${idCompra[i].idCliente} <a class="btn btn-primary ms-2" onclick="verCliente(${idCompra[i].idCliente})" href="#listaInci">Ver</a></td>
					</td>	
				</tr>`}
		
}

listCompras();

function verCompra(a){
	 
	document.getElementById("listaInci").innerHTML=`
	<div class="d-flex justify-content-center">
		<h1 class="fw-bolder">LISTA DE COMPRA CON ID ${a}</h1>
	</div>

	<div class="container d-flex flex-column" >
	
	<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">ID DE COMPRA</th>
      <th scope="col">JUEGO</th>
      <th scope="col">CANTIDAD</th>
    </tr>
  </thead>
  <tbody id="body1"></tbody>
  </table>
	</div>`	
 document.getElementById("body1").innerHTML=` `
  let cont = 0
  for(let i = 0; i < compras.length; i++){
	  
	  
	  if(compras[i].idCompra == a){
		  let j = catalogo1(compras[i].idJuego)
		  console.log(compras[i].idJuego)
		  document.getElementById("body1").innerHTML+=`
  			
				<tr>
					<th scope="row">${compras[i].id}</th>
					<td>${compras[i].idCompra}</td>
					<td>${catalogo[j].titulo}</td>
					<td>${compras[i].cantidadJuego}</td>
				</tr>`
				cont++
				}
	  }
  	if(cont == 0){	
		  document.getElementById("listaInci").innerHTML=` <div class="d-flex justify-content-center"><h2>No hay compras registradas</h2></div> `
	  }
	  
document.getElementById("listaInci").innerHTML+=`
<div class="d-flex justify-content-center">
<a class="btn btn-primary mt-3 mb-3" href="#section">VOLVER ARRIBA</a>
</div>
`
		
}

function catalogo1(x){
	for(let i=0;i<catalogo.length;i++){
		if(catalogo[i].id == x){
			return i
		}
		
	}
	
}

function verCliente(a){
	 
	document.getElementById("listaInci").innerHTML=`
	<div class="d-flex justify-content-center">
		<h1 class="fw-bolder">INFORMACIÓN DEL USUARIO CON ID ${a}</h1>
	</div>

	<div class="container d-flex flex-column" >
	
	<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">USUARIO</th>
      <th scope="col">EMAIL</th>
    </tr>
  </thead>
  <tbody id="body1"></tbody>
  </table>
	</div>`	
 document.getElementById("body1").innerHTML=` `
 
  for(let i = 0; i < clientes.length; i++){
	  
	  
	  if(clientes[i].id == a){
		  let j = cliente1(a)
		  console.log(compras[i].idJuego)
		  document.getElementById("body1").innerHTML+=`
  			
				<tr>
					<th scope="row">${clientes[j].id}</th>
					<td>${clientes[j].user}</td>
					<td>${clientes[j].email}</td>
				</tr>`
		
				}
	  }
document.getElementById("listaInci").innerHTML+=`
<div class="d-flex justify-content-center">
<a class="btn btn-primary mt-3 mb-3" href="#section">VOLVER ARRIBA</a>
</div>
`
}

function cliente1(x){
	for(let i=0;i<catalogo.length;i++){
		if(clientes[i].id == x){
			return i
		}
		
	}
	
}
