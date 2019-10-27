-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-10-2019 a las 05:56:43
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyector`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `codigoactivacion`
--

CREATE TABLE `codigoactivacion` (
  `Usuario` text NOT NULL,
  `Email` text NOT NULL,
  `Codigo` int(11) NOT NULL,
  `Fecha` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gustos`
--

CREATE TABLE `gustos` (
  `Usuario` text NOT NULL,
  `gusto1` text NOT NULL,
  `gusto2` text NOT NULL,
  `gusto3` text NOT NULL,
  `gusto4` text NOT NULL,
  `gusto5` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publicaciones`
--

CREATE TABLE `publicaciones` (
  `Id` int(11) NOT NULL,
  `Usuario` text NOT NULL,
  `Ubicacion` text NOT NULL,
  `Coordendas` text NOT NULL,
  `RecursoAudioVisual` mediumblob NOT NULL,
  `Puntaje` int(11) NOT NULL,
  `Descripcion` text NOT NULL,
  `Etiqueta1` text NOT NULL,
  `Etiqueta2` text NOT NULL,
  `Etiqueta3` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `Usuario` text NOT NULL,
  `Contraseña` varchar(30) NOT NULL,
  `Nombre` text NOT NULL,
  `Apellido` text NOT NULL,
  `Email` text NOT NULL,
  `Genero` text NOT NULL,
  `Ubicacion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `codigoactivacion`
--
ALTER TABLE `codigoactivacion`
  ADD UNIQUE KEY `Usuario` (`Usuario`(30)),
  ADD UNIQUE KEY `Email` (`Email`(30));

--
-- Indices de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD UNIQUE KEY `Usuario` (`Usuario`(30));

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `publicaciones`
--
ALTER TABLE `publicaciones`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
