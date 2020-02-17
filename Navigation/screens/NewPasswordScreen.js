import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class NewPasswordScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SavedPassword')}
        >
          <View>
            <Text>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default NewPasswordScreen;
