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

const CannonScreen = () => {
  const {Cannon1, Cannon2} = useTranslation();
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
                navigation.navigate('French 75');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/french75.jpg')}
              />
              <Text style={styles.text}>{Cannon2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Vulcan automatic cannon');
              }}>
              <Image
                style={styles.categoriesImage}
                source={require('../../assets/vulcanautomaticcannon.jpg')}
              />
              <Text style={styles.text}>{Cannon2}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CannonScreen;
