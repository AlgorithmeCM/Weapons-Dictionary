import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from '../../translation/context/LanguageContext';

const AntitankWeaponScreen = () => {
  const {AntitankWeapon} = useTranslation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Image
              style={styles.image}
              source={require('../../assets/antitankweapon.jpg')}
            />
            <Text style={styles.text}>{AntitankWeapon}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AntitankWeaponScreen;
