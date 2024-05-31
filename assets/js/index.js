import { obtenerAutos } from './Operaciones/obtenerAutos.js';
import { crearTarjeta } from './Operaciones/creacionTarjeta.js';

obtenerAutos ()
.then ( autos => crearTarjeta(autos))
.catch (error => console.log(error));

