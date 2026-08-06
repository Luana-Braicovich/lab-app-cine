import {useState} from 'react';
import {Text,  TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from '../Styles/stylesGeneral'

const DATA = [
  {
    id: 1,
    title: '★',
  },
  {
    id: 2,
    title: '★',
  },
  {
    id: 3,
    title: '★',
  },
  {
    id: 4,
    title: '★',
  },
  {
    id: 5,
    title: '★',
  },
];

export const Item = ({item, onPress, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.stars]}>
    <Text style={[styles.stars, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const Estrellas = () => {
  const [rating, setRating] = useState(null);

  return (
    <SafeAreaView style={styles.starsbar}>
            {DATA.map((item)=>(
                <Item
                  key={item.id}
                  item={item}
                  onPress={()=> setRating(item.id)}
                  textColor={item.id<=rating ?  '#F26680' : 'white'}
                />
                
            ))}
    </SafeAreaView>
  );
};

export default Estrellas;