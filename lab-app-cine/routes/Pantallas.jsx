import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../Styles/stylesGeneral'
import Home from '../Pages/Home'
import Inicio from '../Pages/Inicio'
import Info from '../Pages/Info'
import Lista from '../Pages/Lista'
import Busqueda from '../Pages/Busqueda';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Image } from 'react-native';
import { Link } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs(){
  return(
    <Tab.Navigator screenOptions={styles.tab}>

      <Tab.Screen name="Home" component={Home} options={{
        headerTitle:"",
        headerLeft: () => (
          <Link screen="Inicio" style={styles.logo}>
            <Image
                source={require('../assets/logo1.png')}
                style={styles.logo}
            />
          </Link> 
        ),
        tabBarIcon:({color,size})=>(
          <MaterialIcons name="home-filled" size={size} color={color} />
        )}}/>

      <Tab.Screen name="Peliculas" component={Lista} initialParams={{contenido:"pelicula"}} options={{
        tabBarIcon:({color,size})=>(
          <MaterialIcons name="movie" size={size} color={color} />),
        headerRight: ({color, size}) => (
          <Link screen="Buscar" params={{contenido:"pelicula"}} style={[styles.logo,{marginTop:20}]}>
            <MaterialIcons name="search" size={30} color={'#F26680'} />
          </Link> 
        )}}/>
      
      <Tab.Screen name="Series" component={Lista} initialParams={{contenido:"serie"}} options={{
        tabBarIcon:({color,size})=>(
          <MaterialIcons name="tv" size={size} color={color} />),
        headerRight: ({color, size}) => (
          <Link screen="Buscar" params={{contenido:"serie"}} style={[styles.logo,{marginTop:20}]}>
            <MaterialIcons name="search" size={30} color={'#F26680'} />
          </Link> 
        )}}/>
        
    </Tab.Navigator>
  )
}


export default function Pantallas(){
  return(
    <Stack.Navigator initialRouteName="Inicio" screenOptions={styles.header} >
      <Stack.Screen name='Inicio' component={Inicio} options={{headerShown:false}}/>
      <Stack.Screen name="HomeTabs" component={HomeTabs} options={{headerShown:false}}/>
      <Stack.Screen name="Info" component={Info}/>
      <Stack.Screen name="Buscar" component={Busqueda}/>
    </Stack.Navigator>  
  );
}