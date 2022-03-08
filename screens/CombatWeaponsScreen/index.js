import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from '../../translation/context/LanguageContext';

const CombatWeaponsScreen = () => {
  const {CombatWeapons} = useTranslation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Image
              style={styles.image}
              source={require('../../assets/combatweapons.png')}
            />
            <Text style={styles.text}>{CombatWeapons}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CombatWeaponsScreen;
