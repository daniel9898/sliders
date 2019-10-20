import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Slider from '@react-native-community/slider';
import MyInput from './myInput';
import RangeNumber from './rangeNumber';

export default MySlider = React.memo(props => {
  return (
    <View style={styles.container}>
      
      <MyInput 
        {...props}
      />
      
      <Slider
        style={{width: 300, height: 40}}
        minimumValue={props.min}
        maximumValue={props.max}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        onValueChange={v => props.onValueChange(v, props.label)}
      />

      <RangeNumber 
        {...props}
      />

    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },

});