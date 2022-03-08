import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ArtilleryScreen from '../screens/ArtilleryScreen';
import BiologicalWeaponryScreen from '../screens/BiologicalWeaponryScreen';
import ChemicalWeaponryScreen from '../screens/ChemicalWeaponryScreen';
import CombatWeaponsScreen from '../screens/CombatWeaponsScreen';
import ExplosivesScreen from '../screens/ExplosivesScreen';
import FirearmsScreen from '../screens/FirearmsScreen';
import NuclearWeaponsScreen from '../screens/NuclearWeaponsScreen';
import SiegeWeaponsScreen from '../screens/SiegeWeaponsScreen';
import AntiaircraftGunScreen from '../screens/AntiaircraftGunScreen';
import AntitankWeaponScreen from '../screens/AntitankWeaponScreen';
import BigBerthaScreen from '../screens/BigBerthaScreen';
import CannonScreen from '../screens/CannonScreen';
import French75Screen from '../screens/French75Screen';
import VulcanAutomaticCannonScreen from '../screens/VulcanAutomaticCannonScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Weapons Dictionary"
      screenOptions={{
        headerStyle: {backgroundColor: '#343b12'},
        headerTintColor: '#9c8f6f',
        // headerShown: false,
      }}>
      <Stack.Screen name="Weapons Dictionary" component={HomeScreen} />
      <Stack.Screen name="Artillery" component={ArtilleryScreen} />
      <Stack.Screen
        name="Biological Weaponry"
        component={BiologicalWeaponryScreen}
      />
      <Stack.Screen
        name="Chemical Weaponry"
        component={ChemicalWeaponryScreen}
      />
      <Stack.Screen name="Combat Weapons" component={CombatWeaponsScreen} />
      <Stack.Screen name="Explosives" component={ExplosivesScreen} />
      <Stack.Screen name="Firearms" component={FirearmsScreen} />
      <Stack.Screen name="Nuclear Weapons" component={NuclearWeaponsScreen} />
      <Stack.Screen name="Siege Weapons" component={SiegeWeaponsScreen} />
      <Stack.Screen name="Antiaircraft Gun" component={AntiaircraftGunScreen} />
      <Stack.Screen name="Antitank Weapon" component={AntitankWeaponScreen} />
      <Stack.Screen name="Big Bertha" component={BigBerthaScreen} />
      <Stack.Screen name="Cannon" component={CannonScreen} />
      <Stack.Screen name="French 75" component={French75Screen} />
      <Stack.Screen
        name="Vulcan automatic cannon"
        component={VulcanAutomaticCannonScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
