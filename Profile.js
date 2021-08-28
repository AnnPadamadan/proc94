import * as React from 'react';

import {
  View,
  Text,
  Button,
  CheckBox,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  FlatList,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }
  goToHelp = () => {
    this.props.navigation.navigate('Help');
  };
  render() {
    let emailID = this.props.navigation.getParam('emailID', 'empty');

    let playerPoints = this.props.navigation.getParam('playerPoints', 'empty');
    return (
      <ScrollView style={styles.container}>
        <Icon
          name="information-circle-outline"
          type="ionicon"
          size={20}
          color="midnightblue"
          onPress={this.goToHelp}
          containerStyle={{ marginLeft: 300, marginTop: 110 }}
        />

        <Text
          style={{
            fontFamily: 'Comic Sans MS',
            fontSize: 30,
            textAlign: 'center',
          }}>
          Profile
        </Text>

        <Text
          style={{ marginTop: 30, fontFamily: 'Comic Sans MS', fontSize: 20 }}>
          Username: {emailID}
        </Text>

        <Text style={{ fontFamily: 'Comic Sans MS', fontSize: 20 }}>
          Points: {playerPoints}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -500,
  },
});

//take data that we have collected and then instead of putting it in text, put it in async storgare, and take the text form the async strogae and display THAT. BE VERY CAREFUL, feels like you're on teh brink of a discovery :P ;D
