import { Text, View} from 'react-native';
import stylesinfo from '../Styles/stylesInfo';

export default function Calificacion({reviews}){
    let calificacionTotal=0;
    let cantidad=0;
    reviews?.map((item)=>{
        calificacionTotal= calificacionTotal + item.calificacion;
        cantidad=cantidad+1;
    })
    let promedio=0;
    if (cantidad > 0) { promedio = Math.round(calificacionTotal / cantidad) }

    return promedio;
}
