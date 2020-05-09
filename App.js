import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Camara from './screens/Camara';
import WebService from './screens/WebService';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        React Native de Kevin Soto{'\n'}Jose Sandoval
      </Text>
      <Button
        title="Ir a Cámara"
        onPress={() => navigation.navigate('Camara')}
      />

      <Button
        title="Ir a Web Service"
        onPress={() => navigation.navigate('API')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 30,
    color: 'darkblue',
    textAlign: 'center',
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Inicio'}}
        />
        <Stack.Screen
          name="Camara"
          component={Camara}
          options={{title: 'Cámara'}}
        />
        <Stack.Screen
          name="API"
          component={WebService}
          options={{title: 'Consumo de WebService'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
