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

const ArtilleryScreen = () => {
  const {Artillery1, Artillery2, Artillery3, Artillery4} = useTranslation();
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
                navigation.navigate('Antiaircraft Gun');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/antiaircraftgun.jpg')}
              />
              <Text style={styles.text}>{Artillery1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Antitank Weapon');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/antitankweapon.jpg')}
              />
              <Text style={styles.text}>{Artillery2}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.links}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Big Bertha');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/bigbertha.jpg')}
              />
              <Text style={styles.text}>{Artillery3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cannon');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/cannon.jpg')}
              />
              <Text style={styles.text}>{Artillery4}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArtilleryScreen;
