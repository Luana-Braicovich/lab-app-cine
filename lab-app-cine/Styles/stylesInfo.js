import { StyleSheet} from 'react-native';

const stylesinfo = StyleSheet.create({
    review: {
        flex: 1,
        backgroundColor:'#a5a9ad',
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft:20,
        paddingRight: 20,
        justifyContent: 'space-around'
    },
    card:{
        borderRadius:10,
        marginRight: 5,
        marginLeft:5
    },
    icono:{
        width:30,
        height:30,
    },
    centrado:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal:{
        margin: 20,
        backgroundColor: '#4c565f',
        borderRadius: 20,
        padding: 35,
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
        height: 400,
        width:300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default stylesinfo;