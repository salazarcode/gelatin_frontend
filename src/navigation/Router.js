import { createStackNavigator, createAppContainer } from "react-navigation";

//Pantallas externas ___________________________________________
import PresentacionScreen from '../pantallas/externas/Portada'
import OpcionesScreen from '../pantallas/externas/Opciones'
import LoginScreen from '../pantallas/externas/Login'
import HomeWrapper from '../pantallas/internas/HomeWrapper'
import Registro from '../pantallas/externas/Registro'


//Pantallas internas ____________________________________________




const AppNavigator = createStackNavigator({
  Presentacion: PresentacionScreen,
  Opciones: OpcionesScreen,
  Login: LoginScreen,
  Registro: Registro,
  HomeWrapper: HomeWrapper
},
{
  initialRouteName: "Registro"
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;