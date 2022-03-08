import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {carrousel} from '../../data/carrousel';
import useInterval from '../../hooks/useInterval';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';

import {useTranslation} from '../../translation/context/LanguageContext';

const HomeScreen = () => {
  const {
    WeaponsDictionary1,
    WeaponsDictionary2,
    WeaponsDictionary3,
    WeaponsDictionary4,
    WeaponsDictionary5,
    WeaponsDictionary6,
    WeaponsDictionary7,
    WeaponsDictionary8,
  } = useTranslation();
  const navigation = useNavigation();

  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);
  useInterval(() => handleAnimation(), 4000);

  const handleAnimation = () => {
    let newCurrentImage = currentImage + 1;

    if (newCurrentImage >= carrousel.length) {
      newCurrentImage = 0;
    }

    Animated.spring(animation.current, {
      toValue: -(Dimensions.get('screen').width * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animated.View
          style={[
            styles.carrousel,
            {
              transform: [{translateX: animation.current}],
            },
          ]}>
          {carrousel.map(image => (
            <Image key={image} source={{uri: image}} style={styles.image} />
          ))}
        </Animated.View>
        <View style={styles.carrouselIndicator}>
          {carrousel.map((image, index) => (
            <View
              key={`${image}_${index}`}
              style={[
                styles.indicator,
                index === currentImage ? styles.activeIndicator : undefined,
              ]}
            />
          ))}
        </View>
        <View>
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Artillery');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/artillery.jpg')}
              />
              <Text style={styles.text}>{WeaponsDictionary1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Biological Weaponry');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/biologicalweaponry.jpg')}
              />
              <Text style={styles.text}>{WeaponsDictionary2}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chemical Weaponry');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/chemicalweaponry.jpg')}
              />
              <Text style={styles.text}>{WeaponsDictionary3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Combat Weapons');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/combatweapons.png')}
              />
              <Text style={styles.text}>{WeaponsDictionary4}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Explosives');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/explosives.jpg')}
              />
              <Text style={styles.text}>{WeaponsDictionary5}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Firearms');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/firearms.jpg')}
              />
              <Text style={styles.text}>{WeaponsDictionary6}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Nuclear Weapons');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/nuclearweapons.jpg')}
              />
              <Text style={styles.text}>{WeaponsDictionary7}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Siege Weapons');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/siegeweapons.jpg')}
              />
              <Text style={styles.text}>{WeaponsDictionary8}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
