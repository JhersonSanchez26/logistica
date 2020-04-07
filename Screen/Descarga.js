import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';


export default function DescargaUpload({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../Image/cargar.png')}  style={{width: '40%', height: '20%'}} />
     
        
        <Button
          title="Descargar informe"
          onPress={() => navigation.push('Descarga')}
        />
        </View>
    );
  }