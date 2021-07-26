import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import CreateNote from './components/CreateNote';
import DisplayNote from './components/DisplayNote';

const App = () => {

  const [notes, setNotes] = useState([])

  function addNote(note) {
    setNotes(prevNote => {
      return [...prevNote, note]
    })
  }

  function deleteNote (id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.con}>
        <CreateNote onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return <DisplayNote key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  con: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 30,
  }
});

export default App;