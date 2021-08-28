import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Actions extends React.Component {
  static NavigationOptions = {
    title: 'Actions',
  };

  goToHelp = () => {
    this.props.navigation.navigate('Help');
  };
  renderSeparator = () => {
    return (
      <SafeAreaView
        style={{
          height: 2,
          width: '100%',
          backgroundColor: 'midnightblue',
        }}
      />
    );
  };
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'azure' }}>
        <Icon
          name="information-circle-outline"
          type="ionicon"
          size={25}
          color="midnightblue"
          style={{ marginLeft: 300 }}
          containerStyle={styles.tellButton}
          onPress={this.goToHelp}
        />
        <Text
          style={{
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'Comic Sans MS',
          }}>
          Actions
        </Text>
        <FlatList
          style={{ marginTop: 30 }}
          data={[
            { key: 'Take a shorter shower (5 minutes is good)' },
            { key: 'Turn off the tap when you brush your teeth' },
            { key: 'Put more clothes in the washer at a time' },
            { key: "Don't prewash your dishes" },
            {
              key:
                'Choose non-toxic when you pick out fertilizers, herbicides, pesticides, cleaning products and other chemicals of the sort. Prevent any leakage.',
            },
            { key: 'Pick up litter.' },
            { key: 'Bring a reusable bag when you go shopping' },
            { key: 'Buy less plastic items' },
            {
              key:
                'Reuse materials that you would throw away. These can end up in landfills ',
            },
          ]}
          renderItem={({ item }) => <Text style={styles.txt}>{item.key}</Text>}
          ItemSeparatorComponent={this.renderSeparator}
        />{' '}
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
