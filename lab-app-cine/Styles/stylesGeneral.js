import { StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#121b24',
  },
  flexible: {
    
  },
  tab:{
    tabBarActiveTintColor:'#F26680',
    tabBarStyle:{
      backgroundColor: '#1f2f3f',
    },
    headerStyle: {
      backgroundColor: '#1f2f3f',
      },
    headerTintColor: '#F26680',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontsize: 50
    },
    headerTitleAlign:'center'
  },
  header:{
    headerStyle: {
      backgroundColor: '#1f2f3f',
      },
    headerTintColor: '#F26680',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontsize: 50
    },
    headerTitleAlign:'center'

  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    color:'white',
    fontWeight:'bold',
    fontFamily:'verdana',
    fontSize: 30,
    paddingBottom:30,
  },
  titles: {
    padding: 20,
    textAlign: 'left',
    color:'white',
    fontWeight:'bold',
    fontFamily:'verdana',
    fontSize: 30,
    textShadowColor:'0px 4px 6px -1px rgba(0, 0, 0, 0.5)',
    textShadowRadius:10
  },
  stars: {
    fontWeight:'bold',
    fontFamily:'georgia',
    fontSize: 60
  },
  starsbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign:'center',
  },
  background:{
    flex: 1,
    justifyContent: 'center',
  },
  card:{
    width:180,
    height:260,
    borderRadius:10,
    marginRight: 5,
    marginLeft:5
  },
  margenes:{
    paddingTop:200,
    paddingBottom:50,
  },
  boton: {
    color:"white",
    backgroundColor:"#F26680",
    textAlign: 'center',
    margin:50,
    marginBottom:100,
    fontWeight:'bold',
    fontFamily:'verdana',
    fontSize: 40,
    borderRadius:10,
    boxShadow: '0px 4px 6px -1px rgba(0, 0, 0, 0.5)'
  },
  escena:{
    width:500,
    height:260
  }
});

export default styles;