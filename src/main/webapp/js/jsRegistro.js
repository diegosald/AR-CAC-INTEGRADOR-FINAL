// valida que el usuario tenga un @ y tenga el dominio codoACodo.edu.ar
let sub = document.getElementById("sub")
let form = document.getElementById("form")
let boton = document.createElement("button")
boton.setAttribute("type","submit")
boton.setAttribute("id","submit")
boton.innerHTML = "Registrarse"

function validarUser() {
    console.log("ingreso a validarUser")

    // DOM: documento object model
    // console.log(document)
    // console.log(document.body)
    // console.log(document.body.children)

    // // funciones js para buscar en dom
    // console.log(document.getElementById("user"))
    // console.log(document.getElementsByClassName("btn"))
    // console.log(document.getElementsByTagName("div"))   
    
    
    //obtendo lo que ingreso el usuario en el input luego lo pongo en la variable user
    let user=document.getElementById("email").value 
    console.log(`user= ${user}`)

    // console.log(user.includes("@"))
    user.includes("")

    if (!user.includes("@")) {
        // console.log("El usuario debe contener un @")
        document.getElementById("mensaje").innerHTML="El usuario debe contener un @"
        document.getElementById("mensaje").className="bg-danger  m-1 p-1 border rounded "
    } else{
        document.getElementById("mensaje").innerHTML=""
        document.getElementById("mensaje").className=""
    }  
}




// muestra la fortaleza de seguridad de las pass
function mostrarFortCant() {
    console.log("mostrarfor")
    let pass=document.getElementById("password").value

    if (pass.length<=4) {
        document.getElementById("mensaje1").innerHTML="Fortaleza Baja"
        document.getElementById("mensaje1").className="bg-danger  m-1 p-1 border rounded text-center "        
    } else if(pass.length<=8) {
        document.getElementById("mensaje1").innerHTML="Fortaleza Media"
        document.getElementById("mensaje1").className="bg-info m-1 p-1 border rounded text-center "        
    } else {
        document.getElementById("mensaje1").innerHTML="Fortaleza Alta"
        document.getElementById("mensaje1").className="bg-success m-1 p-1 border rounded text-center "        

    }
    
    if(pass == ""){
		document.getElementById("mensaje1").innerHTML=""
  
	}
    
}

function validarPass() {
    let pass=document.getElementById("password").value

    let regExp=new RegExp("(?=.*[a-z])(?=.*[A-Z]).{8,}")
    
    if (!regExp.test(pass)) {
        document.getElementById("mensaje").innerHTML="La contraseña debe tener una minúscula, una mayúscula y ser mayor a 8 caracteres"
        
        
    } else {
        document.getElementById("mensaje").innerHTML=""
      
        
    }
    
    if(pass == ""){
		document.getElementById("mensaje").innerHTML=""
  
	}
    
}


function validarPassDiscriminada() {
    let pass=document.getElementById("password").value

    let regExpMin=new RegExp("(?=.*[a-z])")
    let regExpMay=new RegExp("(?=.*[A-Z])")
    let regExpNum=new RegExp("(?=.*[0-9])")
    let regExpCantChar=new RegExp(".{8,}")
    
    if (!regExpMin.test(pass)) {
        document.getElementById("mensaje1").innerHTML="La contraseña debe tener al menos una minúscula"
          
        
    } else if (!regExpMay.test(pass)) {
        document.getElementById("mensaje1").innerHTML="La contraseña debe tener al menos una mayúscula"
      
            
    } else if (!regExpNum.test(pass)) {
        document.getElementById("mensaje1").innerHTML="La contraseña debe tener al menos un número"
     
    } else if (!regExpCantChar.test(pass)) {
        document.getElementById("mensaje1").innerHTML="La contraseña debe tener más de 8 caracteres"
   
    }else {
        document.getElementById("mensaje1").innerHTML=""          
    }
    
    if(pass == ""){
		document.getElementById("mensaje1").innerHTML=""
  
	}
	
    passIgual()
    
}
    

function passIguales(){
    let pass=document.getElementById("password").value
    let pass1=document.getElementById("confirm-password").value

    if(pass != pass1){
        document.getElementById("mensaje2").innerHTML="Las contraseñas no coinciden"
        
        if(document.getElementById("submit")){
			form.removeChild(boton)
        	form.appendChild(sub)
		}
    }else{
        document.getElementById("mensaje2").innerHTML=""
        
        if(document.getElementById("sub")){
			form.removeChild(sub)
        	form.appendChild(boton)
		}
    }

}

function passIgual(){
	let pass=document.getElementById("password").value
    let pass1=document.getElementById("confirm-password").value

    if(pass != pass1){
		if(pass1 != ""){
			document.getElementById("mensaje2").innerHTML="Las contraseñas no coinciden"
		}
		if(document.getElementById("submit")){
			form.removeChild(boton)
        	form.appendChild(sub)
		}
        
    }else{
		document.getElementById("mensaje2").innerHTML=""
		if(document.getElementById("sub")){
			form.removeChild(sub)
        	form.appendChild(boton)
		}
        
	}
}

function mostrarPass() {
    document.getElementById("password").setAttribute("type","text")
    document.getElementById("icono").setAttribute("class", "bi bi-eye-fill")
    document.getElementById("icono").setAttribute("onclick","ocultarPass()")
}

function ocultarPass() {
    document.getElementById("password").setAttribute("type","password")
    document.getElementById("icono").setAttribute("class", "bi bi-eye-slash-fill")
    document.getElementById("icono").setAttribute("onclick","mostrarPass()")
}

function mostrarPass1() {
    document.getElementById("confirm-password").setAttribute("type","text")
    document.getElementById("icono1").setAttribute("class", "bi bi-eye-fill")
    document.getElementById("icono1").setAttribute("onclick","ocultarPass1()")
}

function ocultarPass1() {
    document.getElementById("confirm-password").setAttribute("type","password")
    document.getElementById("icono1").setAttribute("class", "bi bi-eye-slash-fill")
    document.getElementById("icono1").setAttribute("onclick","mostrarPass1()")
}


//todo: verificar que las pass sean iguales