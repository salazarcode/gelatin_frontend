import { createStackNavigator, createAppContainer } from "react-navigation";

import PresentacionScreen from '../components/Presentacion'
import OpcionesScreen from '../components/Opciones'
import LoginScreen from '../components/Login'
import RegistroScreen from '../components/Registro'
import DashboardScreen from '../components/Dashboard'

const AppNavigator = createStackNavigator({
  Presentacion: PresentacionScreen,
  Opciones: OpcionesScreen,
  Login: LoginScreen,
  Registro: RegistroScreen,
  Dashboard: DashboardScreen
},
{
  initialRouteName: "Login"
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;