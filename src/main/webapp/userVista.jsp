<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.Statement"%>
<%@page import="ar.cac.abm.clases.Conexion"%>
<%@page import="ar.cac.abm.clases.Usuario"%>
<%@page import="com.fasterxml.jackson.databind.ObjectMapper"%>
<%@page import="java.io.PrintWriter"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.lang.Iterable"%>


<html>
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AlcoholSoft</title>
    <link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css" rel="stylesheet"
        crossorigin="anonymous">
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/index.css">
</head>
<body>

	<%
	String id=request.getParameter("id");
	
	int id1 = Integer.parseInt(id);
	Conexion con;

	con = new Conexion("prueba","12345","ventajuegos") ;
	Usuario user = new Usuario();
				
	user = con.listarUsuario(id1);
	String nombre = user.getUser();						
	%>
	
	

	<header class="header">
        <p>AlcoholSoft</p>
        <div class="usuario">
            <img src="" alt="" id="imgUsuario">
            <span id="nombreUsuario"></span>
            <span class="material-symbols-outlined" id="arrow" onclick="mostrarCerrar()">
                arrow_drop_down
                </span>
        </div>
        <div id="conf" class="m conf">
            <ul>
                <li><a href="index.html">Cerrar sesion</a></li>
            </ul>
        </div>
    </header>
<div class="topCarrus">
    <div class="swiffy-slider slider-item-ratio slider-item-ratio-32x9 slider-nav-chevron slider-nav-autoplay slider-nav-animation slider-nav-animation-fadein"
        id="carousel1" data-slider-nav-autoplay-interval="4000">
        <ul class="slider-container" id="contenedor">
            <li class="slide-visible">
                <div id="slide1"><img class="imgCar" src="images/carrusel1-1.jpg" style="max-width: auto;height: auto;">
                </div>
            </li>
            <li class="">
                <div id="slide2"><img class="imgCar" src="images/carrusel1-2.jpg" style="max-width: 100%;height: auto;">
                </div>
            </li>
            <li class="">
                <div id="slide3"><img class="imgCar" src="images/carrusel1-3.png" style="max-width: 100%;height: auto;">
                </div>
            </li>
            <li class="">
                <div id="slide4"><img class="imgCar" src="images/carrusel1-4.png" style="max-width: 100%;height: auto;">
                </div>
            </li>
            <li class="">
                <div id="slide5"><img class="imgCar" src="images/carrusel1-5.jpeg"
                        style="max-width: 100%;height: auto;"></div>
            </li>
        </ul>

        <button type="button" class="slider-nav"></button>
        <button type="button" class="slider-nav slider-nav-next"></button>

        <ul class="slider-indicators">
            <li class="active"></li>
            <li class=""></li>
            <li class=""></li>
            <li class=""></li>
            <li class=""></li>
        </ul>
    </div>
</div>
    <nav class="menu">
    	<label class="nav__label" for="checkbox">
            <i class="fa-solid fa-bars fa-2xl"></i>
        </label>
          <input type="checkbox" id="checkbox"/>

        <div class="dropdown">

            <button class="dropbtn">Géneros</button>
            <ul class="dropdown-content generos">
                <li class="nav__item" onclick="todosCard()"><span>Todos&nbsp</span><span id="tod1"></span></li>
                <li class="nav__item" onclick="accionCard('Acción')"><span>Acción&nbsp</span><span id="acc1"></span></li>
                <li class="nav__item" onclick="accionCard('Aventuras')"><span>Aventuras&nbsp</span><span id="aven1"></span></li>
                <li class="nav__item" onclick="accionCard('Horror')"><span>Horror&nbsp</span><span id="horr1"></span></li>
                <li class="nav__item" onclick="accionCard('Lucha')"><span>Lucha&nbsp</span><span id="lu1"></span></li>
                <li class="nav__item" onclick="accionCard('Multijugador')"><span>Multijugador&nbsp</span><span id="mul1"></span></li>
                <li class="nav__item" onclick="accionCard('Plataformas')"><span>Plataformas&nbsp</span><span id="pla1"></span></li>
                <li class="nav__item" onclick="accionCard('RPG')"><span>RPG&nbsp</span><span id="rpg1"></span></li>
            </ul>
        </div>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        
        <div class="carS">
            <img src="images/carrito-de-compras.png" alt="" id="carri" onclick="showCarrito()"><sup
                id="cantCarrito"></sup>
        </div>
    </nav>

    <main>

        <aside class="aside">
            <ul>
                <h3>Generos</h3>
                <li onclick="todosCard()"><span>Todos</span><span id="tod"></span></li>
                <li onclick="accionCard('Acción')"><span>Acción</span><span id="acc"></span></li>
                <li onclick="accionCard('Aventuras')"><span>Aventuras</span><span id="aven"></span></li>
                <li onclick="accionCard('Horror')"><span>Horror</span><span id="horr"></span></li>
                <li onclick="accionCard('Lucha')"><span>Lucha</span><span id="lu"></span></li>
                <li onclick="accionCard('Multijugador')"><span>Multijugador</span><span id="mul"></span></li>
                <li onclick="accionCard('Plataformas')"><span>Plataformas</span><span id="pla"></span></li>
                <li onclick="accionCard('RPG')"><span>RPG</span><span id="rpg"></span></li>
            </ul>

            <!-- <div class="swiffy-slider slider-nav-chevron slider-nav-autoplay slider-nav-animation slider-nav-animation-fadein"
                id="carousel2" data-slider-nav-autoplay-interval="4000">
                <ul class="slider-container">
                    <li class="slide-visible">
                        <div id="slide1"><img src="images/carrusel2-1.jpeg" style="max-width: 100%;height: auto;">
                        </div>
                    </li>
                    <li class="">
                        <div id="slide2"><img src="images/carrusel2-2.png" style="max-width: 100%;height: auto;">
                        </div>
                    </li>

                    <li class="">
                        <div id="slide3"><img src="images/carrusel2-3.png" style="max-width: 100%;height: auto;">
                        </div>
                    </li>

                </ul>

                <button type="button" class="slider-nav"></button>
                <button type="button" class="slider-nav slider-nav-next"></button>

                <div class="slider-indicators">
                    <button class="active"></button>
                    <button class=""></button>
                    <button class=""></button>
                </div>
            </div> -->

            <div class="swiffy-slider slider-nav-chevron slider-nav-autoplay slider-nav-animation slider-nav-animation-fadein" data-slider-nav-autoplay-interval="4000" id="carousel2">
                <ul class="slider-container">
                    <li class="slide-visible">
                        <div id="slide1"><img src="images/carrusel2-1.jpeg" style="max-width: 100%;height: auto;"></div>
                    </li>
                    <li class="">
                        <div id="slide2"><img src="images/carrusel2-2.png" style="max-width: 100%;height: auto;"></div>
                    </li>
                    <li class="">
                        <div id="slide3"><img src="images/carrusel2-3.png" style="max-width: 100%;height: auto;"></div>
                    </li>

                    </li>
                </ul>
            
                <button type="button" class="slider-nav"></button>
                <button type="button" class="slider-nav slider-nav-next"></button>
            
                <ul class="slider-indicators">
                    <li class="active"></li>
                    <li class=""></li>
                    <li class=""></li>
                </ul>
            </div>

        </aside>

        <section>
            <div class="cards" id="cards">
                <!-- <div class="card">
                    <img id="imagen" src="images/alan.jpg" alt="">
                    <div class="ti">
                        <p id="titulo">alan wake 2</p>
                    </div>             
                    <hr>
                    <div class="inferior">
                        <p id="precio">$20.000</p>
                        <img src="images/anadir-al-carrito (1).png" alt="">
                    </div>
                </div> -->
            </div>
        </section>
    </main>
    
    
   <!-- <input type="text" style="display: none;" id="idJuego-txt" name="idJuego-txt">
    <input type="text" style="display: none;" id="cantidadJuego-txt" name="cantidadJuego-txt"> -->
  
     <form method="post" action="">
    <div class="carrito" id="carrito">
        <span class="material-symbols-outlined" id="close" onclick="cerrarCarrito()">
            close
        </span>
        <p>Carrito de compras</p>
       
			<input type="number" style="display: none;" id="idCliente-txt" value="1" name="idCliente-txt">
        	<div class="cardsCa" id="cardsCa">

        	</div>
        	
        	<div class="total">
            	<div class="precio">
                	<p>Total a pagar: </p>
                	<span id="total"></span>
            	</div>
            	<button formaction="AddCompra" formenctype="application/x-www-form-urlencoded" id="boton">Comprar</button>
        	</div>
       
    </div>
     </form>
     
    
    <!-- footer -->

    <footer id="contacto">
        <div class="contenedor footer-content">
            <div class="contact-us">
                <h2 class="brand">AlcoholSoft</h2>
                <p>Somos expertos en la venta de juegos</p>
                <ul class="nav__foot">
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div class="social-media">
                <a href="./" class="social-media-icon">
                    <i class='bx bxl-facebook'></i>
                </a>
                <a href="./" class="social-media-icon">
                    <i class='bx bxl-twitter'></i>
                </a>
                <a href="./" class="social-media-icon">
                    <i class='bx bxl-instagram'></i>
                </a>
            </div>
        </div>
        <div class="line"></div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" crossorigin="anonymous"
        defer></script>  
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script type="text/javascript">
        let id1 = parseInt(<%= id %>)
        document.getElementById("nombreUsuario").innerHTML = "<%= nombre %>"
	</script>
	<script src="js/userVista.js"></script>
    <script>
        AOS.init();
        inicioCarr()
        showCard()
        showCant('Todos', 'tod')
        showCant('Acción', 'acc')
        showCant('Aventuras', 'aven')
        showCant('Horror', 'horr')
        showCant('Lucha', 'lu')
        showCant('Multijugador', 'mul')
        showCant('Plataformas', 'pla')
        showCant('RPG', 'rpg')
        showCant1('Todos', 'tod1')
        showCant1('Acción', 'acc1')
        showCant1('Aventuras', 'aven1')
        showCant1('Horror', 'horr1')
        showCant1('Lucha', 'lu1')
        showCant1('Multijugador', 'mul1')
        showCant1('Plataformas', 'pla1')
        showCant1('RPG', 'rpg1')
    </script>
</body>
</html>