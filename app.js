var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv').config();
let usersRouter = require('./routes/AutenticationRoutes');
let profesoresRouter = require('./routes/ProfessorsRoutes')
let materiasRouter = require('./routes/SubjectsRoutes')
let seccionesRouter = require('./routes/SectionsRoutes')
let actividadesRouter = require('./routes/ActivitiesRoutes')

var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', usersRouter);
app.use('/profesores',profesoresRouter)
app.use('/materias',materiasRouter)
app.use('/secciones', seccionesRouter)
app.use('/actividades', actividadesRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


module.exports = app;
