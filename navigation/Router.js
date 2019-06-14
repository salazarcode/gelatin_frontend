import { createStackNavigator, createAppContainer } from "react-navigation";

import PresentacionScreen from '../components/Presentacion'
import AccessoScreen from '../components/Acceso'
import LoginScreen from '../components/Login'
import RegistroScreen from '../components/Registro'
import DashboardScreen from '../components/Dashboard'

const AppNavigator = createStackNavigator({
  Presentacion: PresentacionScreen,
  Acceso: AccessoScreen,
  Login: LoginScreen,
  Registro: RegistroScreen,
  Dashboard: DashboardScreen
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;