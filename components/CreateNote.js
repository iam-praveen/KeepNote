import { auto } from 'async';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const CreateNote = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    }
    )

    function addNote(event) {
       const {name, value} = event.target;

       setNote(prevNote => {
           return {
               ...prevNote,
               [name]: value
           }
       })
    }
    
    function submitNote(event) {
        (props.onAdd(note))
        setNote({title: "",content: ""});
    }


  return (
    <View style={styles.notes}>
        <TextInput placeholder='Heading' style={styles.heading} onChangeText={addNote} name="title" value={note.title} />
        <TextInput placeholder='Start taking notes..' style={styles.note} onChangeText={addNote} name="content" value={note.content} />
        <TouchableOpacity onPress={submitNote}>
            <Text style={styles.deleteBtn}>Add</Text>
        </TouchableOpacity>
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
    marginBottom: 30,
  },
  heading: {
      fontSize: 40,
      marginBottom: 20,
  },
  note: {
      fontSize: 20,
      marginBottom: 20,
  },
  deleteBtn: {
      alignSelf: 'flex-end',
  },
});

export default CreateNote;