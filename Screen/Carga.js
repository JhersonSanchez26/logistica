import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Image } from 'react-native'
//import FileUpload from '../Component/Subir';
//Intente parsar el componente <FileUpload/> en el View de la Function Carga Upload pero genera problemas el código.



export default function CargaUpload({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../Image/cargar.png')}  style={{width: '40%', height: '20%'}} />
        
        <Button
          title="Cargar Maestro."
          onPress={() => navigation.navigate('Descargar')}
        />
      </View>
    );
  }
