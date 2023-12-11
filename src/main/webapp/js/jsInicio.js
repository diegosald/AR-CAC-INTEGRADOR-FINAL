
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