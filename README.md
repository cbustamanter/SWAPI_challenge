# TCS Challenge
Repositorio para el reto técnico de TCS.

REST API Publicado:
https://8yx5v00jg4.execute-api.us-east-1.amazonaws.com/production/

**Leer Documentación de rutas**
## Tecnologías usadas
    - NodeJS 14.x
    - AWS-Serverless
    - Serverless (as DEV Dependency)
    - Axios
    - RDS MySQL

## Documentación de rutas
#### *People API*
 - ```GET api/v1/people/:id``` obtiene *people* por id
 - ```GETapi/v1/people/``` obtiene lista de *people*

#### *Planets API*
 - ```GET api/v1/planets/:id``` obtiene *planet* por id
 - ```GET api/v1/planets/``` obtiene lista de *planets*

#### *Starships API*
Este es un API personalizado para poder crear y listar, teniendo en cuenta los atributos de SWAPI/starships
 - ```GET api/v1/starships/:id``` obtiene *starships* por id
 - ```GET api/v1/starships/``` obtiene lista de *starships*
 - 
 ```json
 POST api/v1/starships/add crea un nuevo starship
 - "creacion": DateTime (opcional)
 - "edicion": DateTime (opcional)
    {
            "nombre": "new ship",
            "modelo": "6666",
            "fabricante": "Corellian Engineering Corporation",
            "costo_en_creditos": "3500000",
            "longitud": "150",
            "velocidad_maxima_atmosfera": "950",
            "tripulacion": "30-165",
            "pasajeros": "600",
            "capacidad_carga": "3000000",
            "consumibles": "1 year",
            "calificacion_hiperimpulsor": "2.0",
            "MGLT": "60",
            "clase_nave": "new",
            "pilotos": [],
            "peliculas": [],            
            "url": "https://swapi.py4e.com/api/starships/2/"
    }
 ```