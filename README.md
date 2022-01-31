# Microservices SuperFlights
  
Proyecto creado en base a curso de Nest.js con microservicios, RabbitMQ y Docker.

## Microservicios
  
- api-gateway
- microservice-flights
- microservice-passengers
- microservice-users
  
## Correr el proyecto con Docker
  
- Eliminar .env.development de cada microservicio si es requerido.
- Configurar AMQP_URL en .env (creado en CloudAMQP).
- Configurar JWT_SECRET, EXPIRES_IN, PORT y URI_MONGODB si es requerido.
- Correr docker-compose up --build -d desde directorio base.
  
Proyecto se levantará en http://localhost:4000 (dependiendo puerto configurado).
  
## Endpoints
  
api/user POST - Crea usuario  
api/user GET - Obtiene todos los usuarios  
api/user/:id GET - Obtiene usuario por id  
api/user/:id PUT - Actualiza usuario por id  
api/user/:id DELETE - Elimina usuario por id  
api/passenger POST - Crea pasajero  
api/passenger GET - Obtiene todos los pasajeros  
api/passenger/:id GET - Obtiene pasajero por id  
api/passenger/:id PUT - Actualiza pasajero por id  
api/passenger/:id DELETE - Elimina pasajero por id  
api/flight POST - Crea vuelo  
api/flight GET - Obtiene todos los vuelos  
api/flight/:id GET - Obtiene vuelo por id  
api/flight/:id PUT - Actualiza vuelo por id  
api/flight/:id DELETE - Elimina vuelo por id  
api/flight/:flightId/passenger/:passengerId POST - Agrega pasajero a vuelo  
api/auth/signin POST - Login  
api/auth/signup POST - Registro
  
## Backlog
  
- Revisión de módulo auth de Api gateway y función validateUser de controller de microservicio Users.
- Revisión de Docker compose, si cada contenedor se levanta correctamente y si la sintaxis concuerda con la versión del archivo yml.
- Pruebas de API y pruebas unitarias para correcto funcionamiento de la aplicación.
- Features, fixes y refactorización no considerada en curso (control de return null y timeouts desde microservicios, try catch y logs, timeout de servicios externos, análisis de uso realmente necesario de delete (cascada) o usar softdelete, comandos de seguridad en Dockerfile, porqué de uso de RabbitMQ ante otra alternativa, eliminación de usuario actualmente logueado, manejo de created_at y updated_at, seeder de usuarios iniciales, mejora de Jwt guards, deploy con Kubernetes, etc.).