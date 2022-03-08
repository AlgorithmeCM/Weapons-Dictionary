import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from '../../translation/context/LanguageContext';

const ChemicalWeaponryScreen = () => {
  const {ChemicalWeaponry} = useTranslation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Image
              style={styles.image}
              source={require('../../assets/chemicalweaponry.jpg')}
            />
            <Text style={styles.text}>{ChemicalWeaponry}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChemicalWeaponryScreen;
