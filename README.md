### Heroku tiene una funconalidad que hace que las aplicaciones deployeadas ahí se pongan en modo "asleep" después de un tiempo, en caso de no poder revisar la aplicación es por este motivo, por eso al final de este README se incluyen imágenes de como funciona la aplicación.   
#### La API de APOD suele ser muy recurrida por lo que es posible que al momento de querer usar la aplicación salga un mensaje de que el servicio no está disponible (a continuación se puede ver una imagen referencial). En caso de que esto ocurra esperar unos minutos antes de volver a intentarlo. 
# Proyecto con React
## Datos:
#### Alumno: Sebastián Aliaga
#### Materia: Ingeniería Web 

## Lineamientos
* Uso de Componentes
* Lectura de webservices (puede ser online, JSON local, Firebase, etc)

## Material utilizado
- React
- NASA API. Específicamente la API APOD (Astronomy Picture of the Day)
- Deploy en Heroku

## Componentes utilizados en el proyecto 
### APOD
Se llama, utilizando fetch a la API por defecto de APOD. Se trae la imagen correspondiente al día de hoy. 

### ApodByDate
Se tiene un pequeño formulario donde se debe ingresar un año, un mes y un día para poder buscar el APOD correspondiente a esa fecha. 

### RandomApod 
Se usa la funcionalidad de la API donde se le pasa un número entero y se devuelven X APODs aleatorios. 

### ApodInfo 
Se le pasa como props la data que se trae de la API (en el caso de RandomApod se hace un map a los resultados y se renderizan N componentes ApodInfo debido a que se deveuvle un arreglo utilizando ese endpoint). 

### Navbar 
Maneja la navegación dentro de la aplicación. 

### Home 
Se tiene la lógica utilizando React Router Dom para manejar qué componentes se renderizan de acuerdo a la ruta en la que nos encontramos. 

## Imágenes 
### APOD 
![APOD Image](https://github.com/SebasAB/nasa-api-app/blob/main/images/apod.png)

### APOD By Date

![APOD By Date Image](https://github.com/SebasAB/nasa-api-app/blob/main/images/apod-by-date.png)

### Error
![Error Image](https://github.com/SebasAB/nasa-api-app/blob/main/images/error-img.png)
