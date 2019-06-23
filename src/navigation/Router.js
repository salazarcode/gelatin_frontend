import { createStackNavigator, createAppContainer } from "react-navigation";

import PresentacionScreen from '../pantallas/externas/Portada'
import OpcionesScreen from '../pantallas/externas/Opciones'
import LoginScreen from '../pantallas/externas/Login'
import HomeWrapper from '../pantallas/internas/HomeWrapper'
import Register from '../pantallas/externas/Registro'

import RegisterDatosPersonales from '../pantallas/externas/RegistroDatosPersonales'

const AppNavigator = createStackNavigator({
  Presentacion: PresentacionScreen,
  Opciones: OpcionesScreen,
  Login: LoginScreen,
  Register: Register,
  HomeWrapper: HomeWrapper,

  RegisterDatosPersonales, RegisterDatosPersonales
},
{
  initialRouteName: "HomeWrapper"
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;