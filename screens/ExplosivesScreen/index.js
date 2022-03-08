import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from '../../translation/context/LanguageContext';

const ExplosivesScreen = () => {
  const {Explosives} = useTranslation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Image
              style={styles.image}
              source={require('../../assets/explosives.jpg')}
            />
            <Text style={styles.text}>{Explosives}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExplosivesScreen;
