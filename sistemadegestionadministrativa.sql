-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-03-2024 a las 14:49:49
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sistemadegestionadministrativa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `nombre` varchar(25) NOT NULL,
  `tipo` varchar(25) NOT NULL,
  `semana` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`nombre`, `tipo`, `semana`, `id`) VALUES
('Encuentro 1 ', 'Encuentro Presencial', 0, 2),
('Evaluacion e-2', 'Examen presencial', 2, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `nombre` varchar(25) NOT NULL,
  `tipo` varchar(25) NOT NULL,
  `fecha` date NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`nombre`, `tipo`, `fecha`, `id`) VALUES
('Dia del Trabajador', 'Feriado', '2024-05-01', 1),
('Introduccion a JavaScript', 'Conferencia ', '2024-03-20', 2),
('Navidad', 'Feriado', '2024-12-25', 3),
('Presentacion de la realid', 'Conferencia', '2024-03-20', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `nombre` varchar(25) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`nombre`, `id`) VALUES
('Ingles', 3),
('Programacion', 4),
('Fronted', 5),
('backend', 6),
('Electricidad', 10),
('Fisica', 11);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `nombre` varchar(25) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`nombre`, `apellido`, `id`) VALUES
('Angel', 'Herrera', 2),
('Daniela', 'Miranda', 4),
('Maria', 'Perez', 5),
('Jesus', 'Fernandez', 9),
('Juan', 'Hernandez', 10),
('Rafael', 'Caldera', 15),
('Kevin', 'Pineda', 16),
('Rafael', 'Pineda', 17),
('Flor', 'Fuentes', 19),
('Flor', 'Fuentes', 20),
('Merida', 'Caceres', 21),
('Merida', 'Caceres', 22),
('Kevin ', 'Ramirez', 23),
('Maria', 'Valenzuela', 24),
('Josefa', 'Sanchez', 26),
('Maria ', 'Sanchez', 35),
('Maria ', 'Sanchez', 36);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `relaciones`
--

CREATE TABLE `relaciones` (
  `id_profesor` int(11) NOT NULL,
  `id_materia` int(11) NOT NULL,
  `id_seccion` int(11) NOT NULL,
  `id_actividades` int(11) NOT NULL,
  `id_eventos` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `relaciones`
--

INSERT INTO `relaciones` (`id_profesor`, `id_materia`, `id_seccion`, `id_actividades`, `id_eventos`, `id`) VALUES
(2, 6, 2, 2, 1, 4),
(4, 3, 2, 2, 1, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--

CREATE TABLE `secciones` (
  `nombre` varchar(25) NOT NULL,
  `periodoAcademico` date NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`nombre`, `periodoAcademico`, `id`) VALUES
('VII', '2024-01-16', 2),
('VIII', '2024-01-16', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `nombre` varchar(25) NOT NULL,
  `user_name` varchar(25) NOT NULL,
  `password` varchar(100) NOT NULL,
  `tipo` varchar(25) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`nombre`, `user_name`, `password`, `tipo`, `id`) VALUES
('Rafael', 'Rafael048', '1234', 'Profesor', 1),
('Maria ', 'Maria123', '$2a$08$JnNnAmHMRx3Q.UB6UiNeSuP63xre48iXlYXQSn7YOedzZBIv2PYRa', 'Profesor', 3),
('Mayra', 'Maya323', '$2a$08$4WwYRCJ1556D4TWx9GHzWOG55VGM.C/c2ldruXDDPg8qkx3zq7Wre', 'undefined', 6),
('Jesus', 'Yisus0410', '$2a$08$5chG3Ne4KP6l9Jwryzdp0enHH.fTEH9fgPA/4zKgR2LKzL7JwSY82', 'director', 7),
('Juan', 'Juan1234', '$2a$08$i/d.mosbBJOpqKnPXO/TYeYBB/MeYIDGjGW7IeFQNIccNXw.8EefO', 'profesor', 8),
('mayra', 'mayra', '$2a$08$iNp1bpfHTEGPLFxL6Ik6f.SGGejhM2VSH8T1M6DZMIq7Ibo9tki0K', 'profesor', 12),
('Eileen', 'Eli1234', '$2a$08$6jyaUB.A6IF3L745a/Ays.dvx/3dWUJuMN6dAODvzzIihTMjOaFIW', 'director', 14);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `relaciones`
--
ALTER TABLE `relaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_materia` (`id_materia`),
  ADD KEY `id_seccion` (`id_seccion`),
  ADD KEY `id_actividades` (`id_actividades`),
  ADD KEY `id_eventos` (`id_eventos`),
  ADD KEY `id_actividades_2` (`id_actividades`),
  ADD KEY `id_profesor` (`id_profesor`) USING BTREE;

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_name` (`user_name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `materias`
--
ALTER TABLE `materias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `relaciones`
--
ALTER TABLE `relaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `secciones`
--
ALTER TABLE `secciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `relaciones`
--
ALTER TABLE `relaciones`
  ADD CONSTRAINT `relaciones_ibfk_1` FOREIGN KEY (`id_profesor`) REFERENCES `profesores` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `relaciones_ibfk_2` FOREIGN KEY (`id_eventos`) REFERENCES `eventos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `relaciones_ibfk_3` FOREIGN KEY (`id_materia`) REFERENCES `materias` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `relaciones_ibfk_4` FOREIGN KEY (`id_actividades`) REFERENCES `actividades` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `relaciones_ibfk_5` FOREIGN KEY (`id_seccion`) REFERENCES `secciones` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
