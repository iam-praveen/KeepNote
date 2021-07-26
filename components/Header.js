import { bold, white } from 'ansi-colors';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.h1}>KEEP NOTE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'yellow',
    height: 70,
    padding: 15,
    marginTop: 25,
  },
  h1: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;