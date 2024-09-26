// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import {initializeAuth,getReactNativePersistence,getAuth} from 'firebase/auth'
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD06Jo5_Tgxgr-f6l106c6vS6GV6hu63Lk",
  authDomain: "products-9bde6.firebaseapp.com",
  projectId: "products-9bde6",
  storageBucket: "products-9bde6.appspot.com",
  messagingSenderId: "33865889208",
  appId: "1:33865889208:web:61716b21bbc7fb1f4acb4d"
};
let auth;
if (getApps().length ==0){
    const app = initializeApp(firebaseConfig);
    auth = initializeAuth(app,{
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
}else{
    auth=getAuth();

}
// Initialize Firebase



export default auth;