import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

export default class App extends React.Component  {

    saveData = async ()=> {
        let obj = {
            name: 'John Doe',
            city: 'Bern'
        }
        AsyncStorage.setItem('user', JSON.stringify(obj));
    }

    displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('user')
            let parsed = JSON.parse(user)
            alert(parsed.name)
        } catch {
            alert(error)
        }
    }

    render() {
      return (
          <View style={styles.container}>
              <TouchableOpacity onPress={this.saveData}>
                  <Text>Click me to save data!</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.displayData()}>
                  <Text>Click me to display data!</Text>
              </TouchableOpacity>
          </View>
      );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
