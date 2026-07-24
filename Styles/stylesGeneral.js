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
    padding: 20,
    textAlign: 'center',
    justifyContent: 'center',
    color:'white',
    fontWeight:'bold',
    fontFamily:'verdana',
    fontSize: 30,
    paddingBottom:200,
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
    textAlign: 'center',
    justifyContent: 'center',
    color:'white',
    fontWeight:'bold',
    fontFamily:'georgia',
    fontSize: 60
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
    paddingBottom:200,
  },
});

export default styles;