const axios = require("axios").default;
const functions = require("../utils/planets.functions");
const constants = require("../../constants");
const conn = require("../../database/config");

exports.add = (req, res, next) => {
  try {
    const values = [
      req.body.nombre,
      req.body.modelo,
      req.body.fabricante,
      req.body.costo_en_creditos,
      req.body.longitud,
      req.body.velocidad_maxima_atmosfera,
      req.body.tripulacion,
      req.body.pasajeros,
      req.body.capacidad_carga,
      req.body.consumibles,
      req.body.calificacion_hiperimpulsor,
      req.body.MGLT,
      req.body.clase_nave,
      JSON.stringify(req.body.pilotos),
      JSON.stringify(req.body.peliculas),
      req.body.creacion || new Date(),
      req.body.edicion || new Date(),
      req.body.url,
    ];
    const mysql =
      "INSERT INTO starships (nombre,modelo,fabricante,costo_en_creditos,longitud,velocidad_maxima_atmosfera,tripulacion,pasajeros,capacidad_carga,consumibles,calificacion_hiperimpulsor,MGLT,nave_clase,pilotos,peliculas,creacion,edicion,url) VALUES (?)";
    conn.query(mysql, [values], function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (e) {
    next(e);
  }
};

exports.all = (req, res, next) => {
  try {
    const mysql = "SELECT nombre,modelo,fabricante,costo_en_creditos,longitud,velocidad_maxima_atmosfera,tripulacion,pasajeros,capacidad_carga,consumibles,calificacion_hiperimpulsor,MGLT,nave_clase,pilotos,peliculas,creacion,edicion,url FROM starships";
    conn.query(mysql, function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (e) {
    next(e);
  }
};

exports.ById = (req, res, next) => {
  const id = req.params.id;
  try {
    const mysql = "SELECT nombre,modelo,fabricante,costo_en_creditos,longitud,velocidad_maxima_atmosfera,tripulacion,pasajeros,capacidad_carga,consumibles,calificacion_hiperimpulsor,MGLT,nave_clase,pilotos,peliculas,creacion,edicion,url FROM starships where id = ?";
    conn.query(mysql, [id], function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
  } catch (e) {
    next(e);
  }
};
