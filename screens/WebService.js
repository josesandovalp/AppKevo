import React, {PureComponent} from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isPhoto: false,
    };
  }
  render() {
    return (
      <View>
        <View>
          <Button
            onPress={this.getImage.bind(this)}
            title="Obtener imagen aleatoria"
          />
        </View>
        {this.state.isPhoto ? (
          <View>
            <Image
              style={{width: 300, height: 300}}
              source={{uri: this.state.data[0].urls.raw}}
            />
          </View>
        ) : (
          <View>
            <Text style={{textAlign: 'center'}}>No hay imagen</Text>
          </View>
        )}
      </View>
    );
  }

  getImage() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://api.unsplash.com/photos/random?count=1&client_id=8hDeMeRHVKgXAtzpblXa4REiqOQTEauwM6D0mvxpHnQ',
      requestOptions,
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json,
          isPhoto: true,
        });
      })
      .catch(error => console.log('error', error));
  }
}

export default App;
