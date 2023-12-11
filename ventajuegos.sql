-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-12-2023 a las 01:50:40
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ventajuegos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compra`
--

CREATE TABLE `compra` (
  `idCompra` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compra`
--

INSERT INTO `compra` (`idCompra`, `idCliente`) VALUES
(11, 2),
(12, 2),
(13, 2),
(14, 2),
(16, 7),
(17, 7),
(18, 7),
(19, 9),
(20, 6),
(21, 2),
(22, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` int(11) NOT NULL,
  `idCompra` int(11) NOT NULL,
  `idJuego` int(11) NOT NULL,
  `cantidadJuego` int(11) NOT NULL,
  `idCliente` int(11) NOT NULL,
  `fechaCompras` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `compras`
--

INSERT INTO `compras` (`id`, `idCompra`, `idJuego`, `cantidadJuego`, `idCliente`, `fechaCompras`) VALUES
(21, 11, 1, 1, 2, '2023-11-22 14:29:18'),
(22, 11, 7, 1, 2, '2023-11-22 14:29:18'),
(23, 12, 3, 1, 2, '2023-11-22 15:56:58'),
(24, 12, 6, 2, 2, '2023-11-22 15:56:58'),
(25, 13, 11, 1, 2, '2023-11-22 15:57:59'),
(26, 14, 3, 1, 2, '2023-11-27 17:47:37'),
(27, 14, 9, 1, 2, '2023-11-27 17:47:37'),
(28, 14, 8, 1, 2, '2023-11-27 17:47:37'),
(29, 14, 7, 1, 2, '2023-11-27 17:47:37'),
(30, 14, 2, 1, 2, '2023-11-27 17:47:37'),
(34, 16, 4, 1, 7, '2023-12-04 17:40:48'),
(35, 17, 18, 1, 7, '2023-12-04 17:42:29'),
(36, 17, 17, 1, 7, '2023-12-04 17:42:29'),
(37, 18, 18, 1, 7, '2023-12-04 17:44:10'),
(38, 18, 16, 1, 7, '2023-12-04 17:44:10'),
(39, 19, 5, 1, 9, '2023-12-04 17:45:43'),
(40, 19, 6, 1, 9, '2023-12-04 17:45:43'),
(41, 20, 9, 1, 6, '2023-12-04 17:53:05'),
(42, 21, 4, 2, 2, '2023-12-06 13:48:25'),
(43, 21, 5, 2, 2, '2023-12-06 13:48:25'),
(44, 21, 2, 1, 2, '2023-12-06 13:48:25'),
(45, 21, 11, 1, 2, '2023-12-06 13:48:25'),
(46, 21, 18, 1, 2, '2023-12-06 13:48:25'),
(47, 22, 16, 1, 12, '2023-12-06 13:50:21'),
(48, 22, 15, 1, 12, '2023-12-06 13:50:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `juegos`
--

CREATE TABLE `juegos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `genero` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio` int(11) NOT NULL,
  `imgUrl` varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `juegos`
--

INSERT INTO `juegos` (`id`, `titulo`, `genero`, `precio`, `imgUrl`) VALUES
(1, 'Alan Wake 2', 'Acción', 2000, 'alan.jpg'),
(2, 'Brave', 'Aventuras', 1500, 'brave.jpg'),
(3, 'Call of Duty: Black Ops II', 'Multijugador', 3000, 'duty.jpeg'),
(4, 'Fallout 4 (GOTY)', 'RPG', 2500, 'fallout.jpg'),
(5, 'Lightning Returns: Final Fantasy XIII', 'RPG', 3500, 'final.jpg'),
(6, 'LEGO: Marvel Super Heroes', 'Plataformas', 1500, 'lego.jpg'),
(7, 'Lies of P', 'Acción', 2500, 'lies.jpg'),
(8, 'Metro Exodus', 'Aventuras', 4000, 'metro.jpeg'),
(9, 'Minecraft: Java Edition', 'Multijugador', 3000, 'minecraft.jpeg'),
(10, 'Mortal Kombat X', 'Plataformas', 3500, 'mortal.jpg'),
(11, 'No Man\'s Sky', 'Multijugador', 3000, 'no_man.jpg'),
(12, 'Party Animals', 'Acción', 1000, 'party.jpg'),
(13, 'Persona 5 Royal', 'Aventuras', 5000, 'persona.jpg'),
(14, 'A Plague Tale: Innocence', 'Horror', 3000, 'plague.jpeg'),
(15, 'Resident Evil 4 (2005)', 'Horror', 1500, 'resident.jpeg'),
(16, 'Resident Evil 6', 'Horror', 6000, 'resident6.jpeg'),
(17, 'Street Fighter 6', 'Lucha', 4000, 'street.jpg'),
(18, 'The Witcher 3: Wild Hunt', 'RPG', 4500, 'witcher.jpg'),
(21, 'Dark Souls 3', 'RPG', 3500, 'DarkSouls3.jpg'),
(23, 'Biomutant', 'Acción', 2000, 'Biomutant.jpeg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `email` varchar(60) NOT NULL,
  `rol` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`, `email`, `rol`) VALUES
(1, 'admin', '12345', 'admin@algo.com', 'admin'),
(2, 'Leandro', '0000', 'leandro@algo.com', 'user'),
(3, 'Pablo', '1234', 'plablo@algo.com', 'user'),
(6, 'Matias', 'Matias1234', 'matias@algo.com', 'user'),
(7, 'Juan', 'Juan1234', 'juan@algo.com', 'user'),
(8, 'Sofia', 'Sofia1234', 'sofia@algo.com', 'user'),
(9, 'Maria', 'Maria1234', 'maria@algo.com', 'user'),
(10, 'Luis', 'Luis1234', 'luis@algo.com', 'user'),
(12, 'Martin', 'Martin1234', 'martin@algo.com', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `compra`
--
ALTER TABLE `compra`
  ADD PRIMARY KEY (`idCompra`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCompra` (`idCompra`),
  ADD KEY `idJuego` (`idJuego`);

--
-- Indices de la tabla `juegos`
--
ALTER TABLE `juegos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `compra`
--
ALTER TABLE `compra`
  MODIFY `idCompra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `juegos`
--
ALTER TABLE `juegos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`idJuego`) REFERENCES `juegos` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
