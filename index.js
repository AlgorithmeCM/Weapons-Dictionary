/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {LanguageContextProvider} from './translation/context/LanguageContext';

AppRegistry.registerComponent(appName, () => LanguageContextProvider);
