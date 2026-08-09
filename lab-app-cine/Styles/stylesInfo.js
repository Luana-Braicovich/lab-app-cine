import { StyleSheet} from 'react-native';

const stylesinfo = StyleSheet.create({
    box:{
        backgroundColor:'#1f2f3f',
        borderRadius:30,
        padding:20,
        gap:10
    },
    principal:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        margin:20
    },
    card:{
        alignItems:'center',
        width:110,
        height:190,
        borderRadius:10,
    },
    info:{
        gap:10
    },
    botones:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    boton:{
        justifyContent: 'center',
        borderRadius:50,
        height:100,
        width:100,
        alignItems: 'center',
        paddingBottom: 10,
    },
    boton2:{
        justifyContent: 'center',
        //borderRadius:50
        alignSelf: 'center',
        padding: 1,
        
    },
    textBoton:{
        textAlign:'center',
        //justifyContent: 'center',
        color:'white',
        fontWeight:'bold',
        fontFamily:'verdana',
        fontSize: 20,
    },
    text:{
        color:'white',
        fontFamily:'verdana',
        fontSize: 15,
    },
    titles:{
        color:'white',
        fontWeight:'bold',
        fontFamily:'verdana',
        fontSize: 15,
    },
    textModal:{
        textAlign: 'center',
        justifyContent: 'center',
        color:'black',
        fontWeight:'bold',
        fontFamily:'verdana',
        borderRadius:15,
        fontSize: 30,
    },
    reviews:{
        gap:10
    },
    headerReviews:{
        flex: 1,
        flexDirection: 'row',
        paddingLeft:20,
        paddingRight: 20,
        gap:20,
        alignItems: 'center',
    },
    centrado:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal:{
        margin: 20,
        backgroundColor: '#fefeff',
        borderRadius: 30,
        paddingTop: 10,
        paddingBottom:20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        height: 150,
        width:300,
        margin: 12,
        borderWidth: 1.25,
        borderRadius:15,
        padding: 10,
        backgroundColor:'white',
        textAlignVertical:'top'
    }
});

export default stylesinfo;