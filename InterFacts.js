import * as React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

export default class InterFacts extends React.Component {
  static NavigationOptions = {
    title: 'Facts',
  };
  renderSeparator = () => {
    return (
      <SafeAreaView
        style={{
          height: 1,
          width: '100%',
          backgroundColor: 'midnightblue',
        }}
      />
    );
  };
  goToHelp = () => {
    this.props.navigation.navigate('Help');
  };
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'azure' }}>
        <Icon
          name="information-circle-outline"
          type="ionicon"
          size={20}
          color="midnightblue"
          onPress={this.goToHelp}
          containerStyle={{ marginLeft: 300 }}
        />
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'Comic Sans MS',
            textAlign: 'center',
          }}>
          Facts
        </Text>

        <FlatList
          style={{ marginTop: 30 }}
          data={[
            {
              key:
                'More than 8 million (8,000,000) tons of plastic enter the ocean annually',
            },
            { key: 'The ocean covers more than 70% of the earth ' },
            { key: '94% of species live in the ocean' },
            { key: 'Less than 5% of the ocean has been explored.' },
            {
              key:
                'The longest chain of mountains on earth is located under water; the Mid-Ocean Ridge',
            },
            {
              key:
                "There are more historic artifacts underwater than in all of the (land) world's museums combined.",
            },
            { key: 'The Pacific has over 25,000 islands in it.' },
            {
              key:
                'The biggest waves in the ocean are found underwater. (internal waves)',
            },
            {
              key:
                'The water that is near hydrothermal vents at the bottom of the ocean is really really hot, at around 400 degrees Celcius. The pressure at the bottom of the deep blue is what keeps this water from boiling.',
            },
          ]}
          renderItem={({ item }) => <Text style={styles.txt}>{item.key}</Text>}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 17,
    fontFamily: 'Comic Sans MS',
    textAlign: 'center',
  },
});
