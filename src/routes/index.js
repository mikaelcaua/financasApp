
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import Home from '../pages/Home'
import Details from "../pages/Details"

export default function Routes(){
  const Stack = createStackNavigator()
  return(
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen 
          options={{title:'', headerShown:false, headerTransparent:true}}
          name="Home" 
          component={Home}
        />

        <Stack.Screen 
          options={{title:'', headerShown:false, headerTransparent:true}}
          name="Details" 
          component={Details}
        />

      </Stack.Navigator>
  </NavigationContainer>

  )
}