exports.transformKey = (data) => {

    const {
        name: nombre,
        rotation_period: periodo_rotacion,
        orbital_period: periodo_orbita,
        diameter: diametro,
        climate: clima,
        gravity: gravedad,
        terrain: terreno,
        surface_water: superficie_agua,
        population: poblacion,
        residents: residentes,
        films: peliculas,
        created: creacion,
        edited: edicion,
        url: url
    } = { ...data };
    return Object.assign(
      {},
      {
        nombre,
        periodo_rotacion,
        periodo_orbita,
        diametro,
        clima,
        gravedad,
        terreno,
        superficie_agua,
        poblacion,
        residentes,
        peliculas,
        creacion,
        edicion,
        url
      }
    );
  };
  
  
  exports.transformKeyFromList = (data) => {    
      data.results = data.results.map(result => this.transformKey(result));
      return data;
    };
    