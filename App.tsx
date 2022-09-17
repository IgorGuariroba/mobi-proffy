import { StatusBar } from 'expo-status-bar';
import Landing from './src/pages/Landing';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_600SemiBold,
  });

  return (
    <>
      <Landing />
      <StatusBar style='auto' />
    </>

  );
}