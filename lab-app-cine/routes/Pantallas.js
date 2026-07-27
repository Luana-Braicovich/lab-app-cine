import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from '../Styles/stylesGeneral'
import Home from '../Pages/Home'
import Inicio from '../Pages/Inicio'
import Info from '../Pages/Info'



const Stack = createNativeStackNavigator();


export default function Pantallas(){
  return(
    <Stack.Navigator initialRouteName="Inicio"
    screenOptions={{
          headerStyle: {
            backgroundColor: '#1f2f3f',
            
          },
          headerTintColor: '#F26680',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontsize: 50

          },
          headerTitleAlign:'center'
    }}>
      <Stack.Screen name='Inicio' component={Inicio} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Info" component={Info}/>
    </Stack.Navigator>  
  );
}