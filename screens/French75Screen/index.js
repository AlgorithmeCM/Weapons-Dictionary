import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from '../../translation/context/LanguageContext';

const French75Screen = () => {
  const {AntiaircraftGun} = useTranslation();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View>
            <Image
              style={styles.image}
              source={require('../../assets/antiaircraftgun.jpg')}
            />
            <Text style={styles.text}>{AntiaircraftGun}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default French75Screen;
