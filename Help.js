import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Help extends React.Component {
  static NavigationOptions = {
    title: 'Help',
  };
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'azure' }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Comic Sans MS',
            textAlign: 'center',
          }}>
          Help
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Comic Sans MS',
            fontSize: 20,
            marginTop: 20,
          }}>
          How it Works:
        </Text>
        <Text style={styles.howitworks}>
          The way you use this app is that you perform a certain action, that
          helps in the effort to save the oceans. If you need examples of these
          actions, then go to the Actions page that you will find when you slide
          to the right.{' '}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Comic Sans MS',
            marginTop: 20,
          }}>
          Go to the Home page to look at your Profile, which includes your name
          and stats. This is also where you find the buttons to log certain
          actions. The Actions page tells you which button to press for which
          action. There are different buttons for different types of acitons
          because some actions are more effective than others.
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Comic Sans MS',
            marginTop: 20,
          }}>
          Find the Help page that you are currently reading there, or click on
          the "i" in the top right corner of any page to come back to the Help
          screen. There is also a screen that shows you interesting facts about
          the ocean.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  howitworks: {
    textAlign: 'center',
    fontFamily: 'Comic Sans MS',
    marginTop: 10,
  },
});
