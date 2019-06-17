import { createStackNavigator, createAppContainer } from "react-navigation";

import PresentacionScreen from '../components/Presentacion'
import OpcionesScreen from '../components/Opciones'
import LoginScreen from '../components/Login'
import HomeWrapper from '../components/HomeWrapper'
import Paso1 from '../components/Registro/Paso1'
import Paso2 from '../components/Registro/Paso2'
import Paso3 from '../components/Registro/Paso3'
import Paso4 from '../components/Registro/Paso4'
import Paso5 from '../components/Registro/Paso5'

import Profile from '../components/HomeWrapper/Profile'

const AppNavigator = createStackNavigator({
  Presentacion: PresentacionScreen,
  Opciones: OpcionesScreen,
  Login: LoginScreen,
  HomeWrapper: HomeWrapper,
  Paso1: Paso1,
  Paso2: Paso2,
  Paso3: Paso3,
  Paso4: Paso4,
  Paso5: Paso5
},
{
  initialRouteName: "Presentacion"
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;