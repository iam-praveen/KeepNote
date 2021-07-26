import { auto } from 'async';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DisplayNote = (props) => {

    function handleClick() {
        props.onDelete(props.id);
    }

  return (
    <View style={styles.notes}>
      <Text style={styles.heading}>{ props.title }</Text>
      <Text style={styles.note}>{ props.content }</Text>
      <Text style={styles.deleteBtn} onPress={handleClick}>Delete</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notes: {
    height: 200,
    width: 350,
    backgroundColor: 'yellow',
    display: 'flex',
    padding: 20,
  },
  heading: {
      fontSize: 40,
  },
  note: {
      fontSize: 20,
  },
  deleteBtn: {
      alignSelf: 'flex-end',
  },
});

export default DisplayNote;