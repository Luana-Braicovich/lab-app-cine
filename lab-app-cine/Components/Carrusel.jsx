import {Text, ScrollView, View, Pressable, FlatList} from 'react-native';
import styles from '../Styles/stylesGeneral'
import Posters from './Posters';

export default function Carrusel({datos, genero, tipo, isPressable, isAlternative}){
    return (
    <View>
        {!isAlternative && (<Text style={styles.titles}>{genero}</Text>)}
        {isPressable?
            <FlatList
                data={datos}
                horizontal={true}
                pagingEnabled={isAlternative}
                renderItem={({item})=>(
                    <Posters elem={item} tipo={tipo} isPressable={isPressable} isAlternative={isAlternative} />
                )}
            />: 
            <ScrollView horizontal={true} pagingEnabled={isAlternative} showsHorizontalScrollIndicator={true}>
                {datos?.map((elem)=>(
                    <View key={elem.titulo}>
                        <Posters elem={elem} tipo={tipo} isPressable={isPressable} isAlternative={isAlternative}/>
                    </View>
                ))}  
            </ScrollView> 
        }   
    </View>
    );
}



