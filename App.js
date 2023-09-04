import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';



export default function App() {
  
  const[text, setText] = useState('')

  function buttenHandler(){
    alert("You typed: " + text)
    }
  return (
    <View style={styles.container}>
      <TextInput onChangeText={(txt) => setText(txt)} />
      <button title='pressMe' onClick={buttenHandler}>Press</button>
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
  },
});
