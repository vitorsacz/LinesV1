import { getReactNativePersistence} from 'firebase/auth'; 
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyBbPLir9jjxKMCOssLWsgg_pD6STHaP44E",
  authDomain: "lines-22bea.firebaseapp.com",
  projectId: "lines-22bea",
  storageBucket: "lines-22bea.appspot.com",
  messagingSenderId: "1039105570228",
  appId: "1:1039105570228:web:bbca3648167580185aeee1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  persistence: getReactNativePersistence(AsyncStorage)

}

export { firebase };
