import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../Styles/stylesGeneral'
import Home from '../Pages/Home'
import Inicio from '../Pages/Inicio'
import Info from '../Pages/Info'
import Lista from '../Pages/Lista'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs(){
  return(
    <Tab.Navigator screenOptions={styles.tab}>
      <Tab.Screen name="CineFai" component={Home} options={{tabBarIcon:({color,size})=>(<MaterialIcons name="home-filled" size={size} color={color} />)}}/>
      <Tab.Screen name="Peliculas" component={Lista} initialParams={{contenido:"pelicula"}} options={{tabBarIcon:({color,size})=>(<MaterialIcons name="movie" size={size} color={color} />)}}/>
      <Tab.Screen name="Series" component={Lista} initialParams={{contenido:"serie"}} options={{tabBarIcon:({color,size})=>(<MaterialIcons name="tv" size={size} color={color} />)}}/>
    </Tab.Navigator>
  )
}


export default function Pantallas(){
  return(
    <Stack.Navigator initialRouteName="Inicio" screenOptions={styles.header} >
      <Stack.Screen name='Inicio' component={Inicio} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={HomeTabs} options={{headerShown:false}}/>
      <Stack.Screen name="Info" component={Info}/>
    </Stack.Navigator>  
  );
}