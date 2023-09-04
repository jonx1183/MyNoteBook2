import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, FlatList, Button, View, TextInput, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function App() {
  
  const[text, setText] = useState('')
  const[notes, setNotes] = useState([])
  const stack = createNativeStackNavigator()

  function buttenHandler(){
    //alert("You typed: " + text)
    setNotes(
      [...notes, {key:notes.length, name:text} ]
    )
    }
  return (
    <View style={styles.container}>
      <TextInput style={styles.TextInput} onChangeText={(txt) => setText(txt)} />
      <button title='pressMe' onClick={buttenHandler}>Press</button>
      <FlatList 
       data={notes}
       renderItem={(note) => <Text>{note.item.name}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 120
  },
  TextInput:{
    backgroundColor: 'lightblue',
    minWidth: 200
  }
});
