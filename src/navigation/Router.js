import { createStackNavigator, createAppContainer } from "react-navigation";

//Pantallas externas ___________________________________________
import Presentacion from '../pantallas/externas/Portada'
import Opciones  from '../pantallas/externas/Opciones'
import Login  from '../pantallas/externas/Login'
import Registro from '../pantallas/externas/Registro'

import DatosPersonales from "../pantallas/externas/Detalles/DatosPersonales";
import CualEsTuObjetivo from "../pantallas/externas/Detalles/CualEsTuObjetivo";
/*import Peso from "../pantallas/externas/Detalles/Peso";
import Actividad from "../pantallas/externas/Detalles/Actividad";*/


//Pantallas internas ____________________________________________
import Entrenamiento from '../pantallas/internas/Entrenamiento'
import Mensajes from '../pantallas/internas/Entrenamiento/Mensajes'
import Dashboard from '../pantallas/internas/Dashboard'
import Desafios from '../pantallas/internas/Desafios'
import Recetas from '../pantallas/internas/Recetas'



const AppNavigator = createStackNavigator({
  //Pantallas externas
  Presentacion: Presentacion,
  Opciones: Opciones,
  Login: Login,
  Registro: Registro,  

  DatosPersonales: DatosPersonales,
  CualEsTuObjetivo: CualEsTuObjetivo,
  /*Peso: Peso,
  Actividad:Actividad,*/

  //Pantallas internas
  Entrenamiento: Entrenamiento,
  Dashboard: Dashboard,
  Desafios: Desafios,
  Recetas: Recetas,
  Mensajes: Mensajes
},
{
  initialRouteName: "CualEsTuObjetivo"
  //initialRouteName: "DatosPersonales"
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;