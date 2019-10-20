import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

const areEqual = (prevProps, nextProps) => prevProps.value == nextProps.value

export default MyInput = React.memo(({label,value}) => {
  return (
    <View style={styles.container}>
      <View  style={styles.textContainer}>
        <Text style={styles.text}>{label}</Text>
      </View> 
      <TextInput 
        style={styles.input}
        value={label == 'PLAZO' ? `${value}` : `$ ${value}`}
        editable={false}
      />
    </View>
  )
},areEqual)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    paddingVertical: 2,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular' 
  },

  input: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 0.7,
    borderColor: '#FFFFFF',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold'
  },

});