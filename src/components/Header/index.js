import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
  const { mainContainer, headerText } = styles;
  return (
    <View style={mainContainer}>
      <Text style={headerText}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6e8ed',
    height: 60,
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 4 },
    //shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 30,
    color: '#000'
  }
});

export default Header;
