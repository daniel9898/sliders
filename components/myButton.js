import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

const areEqual = (prevProps, nextProps) => true;

export default Mybutton = React.memo(({color, text}) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: color,
      paddingVertical: 10,
      paddingHorizontal: 25,
      marginBottom: 15,
    }}> 
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}, areEqual)

const styles = StyleSheet.create({
  textButton: {
    color: '#FFFFFF',
    fontSize: 20,
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular' 
  },
});