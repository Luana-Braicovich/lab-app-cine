import { Text, View, Image} from 'react-native';
import stylesinfo from '../Styles/stylesInfo'
import {SafeAreaView} from 'react-native-safe-area-context';
import icono from '../assets/user-icon.png';

const Review=({review})=> {
    if(review?.length>0){

    return(
        <View style={stylesinfo.review}>
            {review.map((item,index)=>(
            <View key={index}> 
                <View style={stylesinfo.header}> 
                <Image source={icono}
                style={stylesinfo.icono}/>
                <Text>{item.usuario}</Text>
                <Text>Calificacion: {item.calificacion} ★</Text>
                </View>
                <Text>{item.comentario}</Text>
            </View>
            ))}
            
        </View>
    )  
    }
}

export default Review