import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../components/Home'
import DetailsScreen from '../components/Details'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
},
{
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;