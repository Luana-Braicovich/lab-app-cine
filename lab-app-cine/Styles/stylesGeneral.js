import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#121b24',
  },
  flexible: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft:20,
    paddingRight: 20,
    justifyContent: 'space-around'
    
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
    fontSize: 30
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
  }
});

export default styles;