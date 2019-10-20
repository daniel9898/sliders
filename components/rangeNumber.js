import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const areEqual = (prevProps, nextProps) => true;

export default RangeNumber = React.memo(({min, max, currency}) => {
  return (
    <View style={styles.container}>
      <View  style={styles.min}>
        <Text style={styles.text}>{currency ? `${currency} ${min}` : min}</Text>
      </View> 
      <Text style={styles.text}>{currency ? `${currency} ${max}` : max}</Text>
    </View>
  )
}, areEqual)

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
  },
  min: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Regular' 
  }

});