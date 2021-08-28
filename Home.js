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
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      points: 0,
    };
  }
  static NavigationOptions = {
    title: 'Home',
  };
  tellPointUp = () => {
    this.setState({ points: this.state.points + 1 });
  };
  updatePoints = async () => {
    if (this.state.points !== ' ') {
      let playerPoints = await this.state.points;
      this.props.navigation.navigate('Profile', { playerPoints: playerPoints });
    }
  };
  pointer = async () => {};
  goToHelp = () => {
    this.props.navigation.navigate('Help');
  };
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'azure' }}>
        <Text style={styles.pointText}>Points: {this.state.points}</Text>
        <View style={{ marginTop: -40 }}>
          <Icon
            name="information-circle-outline"
            type="ionicon"
            size={20}
            color="midnightblue"
            onPress={this.goToHelp}
            containerStyle={{ marginLeft: 300 }}
          />
          <Icon
            name="chatbubbles-outline"
            type="ionicon"
            size={60}
            color="aliceblue"
            containerStyle={styles.tellButton}
            onPress={this.tellPointUp}
          />
        </View>
        <View style={{ marginTop: -50 }}></View>
        <Icon
          name="water-outline"
          type="ionicon"
          size={60}
          color="aliceblue"
          containerStyle={styles.waterButton}
          onPress={this.tellPointUp}
        />
        <Icon
          name="water"
          type="ionicon"
          size={60}
          color="aliceblue"
          containerStyle={styles.directButton}
          onPress={this.tellPointUp}
        />
        <Icon
          name="cash-outline"
          type="ionicon"
          size={60}
          color="aliceblue"
          containerStyle={styles.donateButton}
          onPress={this.tellPointUp}
        />
        <Icon
          name="earth-outline"
          type="ionicon"
          size={120}
          color="darkseagreen"
          style={{ marginTop: 100 }}
        />

        <TouchableOpacity
          style={styles.updatePoints}
          onPress={this.updatePoints}>
          <Text style={styles.updatePointsText}>Update Points</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tellButton: {
    justifyContent: 'center',

    borderWidth: 2,
    borderRadius: 15,
    marginTop: 100,
    width: 75,
    marginLeft: 75,
    height: 75,
    backgroundColor: 'paleturquoise',
    borderColor: 'rgba(0,0,0,0.2)',
  },
  waterButton: {
    justifyContent: 'center',
    //alignSelf : 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 100,
    marginLeft: 75,
    width: 75,
    height: 75,
    backgroundColor: 'turquoise',
    borderColor: 'rgba(0,0,0,0.2)',
  },

  donateButton: {
    justifyContent: 'center',
    //alignSelf : 'right',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 75,
    marginLeft: 200,
    height: 75,
    backgroundColor: 'teal',
    borderColor: 'rgba(0,0,0,0.2)',
  },
  directButton: {
    justifyContent: 'center',
    //alignSelf : 'left',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: -200,
    marginLeft: 200,
    width: 75,
    height: 75,
    backgroundColor: 'lightseagreen',
    borderColor: 'rgba(0,0,0,0.2)',
  },
  updatePoints: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: -190,
    width: 120,
    height: 40,
    backgroundColor: 'lightseagreen',
    borderColor: 'rgba(0,0,0,0.2)',
  },
  updatePointsText: {
    fontFamily: 'Comic Sans MS',
    color: 'azure',
    textAlign: 'center',
  },
  pointText: {
    fontSize: 20,
    marginTop: 20,
    fontFamily: 'Comic Sans MS',
  },
});
