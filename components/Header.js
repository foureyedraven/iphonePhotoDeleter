import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => (
  <View
    style={styles.background}>
    <Text style={styles.text}>iPhoto Deleter</Text>
  </View>
);

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: '#eee',
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
});

export default Header;
