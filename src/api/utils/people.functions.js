exports.transformKey = (data) => {
  const {
    name: nombre,
    height: altura,
    mass: masa,
    hair_color: color_cabello,
    skin_color: color_piel,
    eye_color: color_ojos,
    birth_year: fecha_nacimiento,
    gender: genero,
    homeworld: mundo_natal,
    films: peliculas,
    species: especies,
    vehicles: vehiculos,
    starships: naves_espaciales,
    created: creacion,
    edited: edicion,
    url: url,
  } = { ...data };
  return Object.assign(
    {},
    {
      nombre,
      altura,
      masa,
      color_cabello,
      color_piel,
      color_ojos,
      fecha_nacimiento,
      genero,
      mundo_natal,
      peliculas,
      especies,
      vehiculos,
      naves_espaciales,
      creacion,
      edicion,
      url,
    }
  );
};


exports.transformKeyFromList = (data) => {    
    data.results = data.results.map(result => this.transformKey(result));
    return data;
  };
  