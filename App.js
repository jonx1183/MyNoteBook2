import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, FlatList, Button, View, TextInput, Text } from 'react-native';



export default function App() {
  
  const[text, setText] = useState('')
  const notes = [{key:1, name:"Jon"}, {key:2, name:"Testington"}]

  function buttenHandler(){
    alert("You typed: " + text)
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
