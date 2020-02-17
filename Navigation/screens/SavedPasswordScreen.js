import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class SavedPasswordScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NewPassword')}
        >
          <View>
            <Text>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default SavedPasswordScreen;
