
import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';
import MySlider from './components/mySlider';
import MyButton from './components/myButton';

const App = () => {
  const [totalAmount, onChangeTotalAmount] = useState(5000);
  const [period, onChangePeriod] = useState(3);
  
  calculateFixedFee = () => {
    return (totalAmount / period).toFixed(2);
  }

  onValueRangechange = useCallback((value, label) => {
    let currentValue = Math.round(value);
    label == 'PLAZO' ? onChangePeriod(currentValue) : onChangeTotalAmount(currentValue);
  },[])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Simulá tu crédito</Text>
        </View>
        <MySlider 
          label='MONTO TOTAL'
          min={5000}
          max={50000}
          currency='$'
          value={totalAmount}
          onValueChange={onValueRangechange}
        />
        <MySlider
          label='PLAZO'
          min={3}
          max={24}
          value={period}
          onValueChange={onValueRangechange} 
        />
        <View style={{flex:1}}>
            <View style={styles.resultTextContainer}>
              <Text style={styles.resultLabel}>CUOTA FIJA POR MES</Text>
              <Text style={styles.resultValue}>$ {calculateFixedFee()}</Text>
            </View>
            <MyButton
              color='#1BA98A'
              text='OBTENÉ CRÉDITO'
            />
            <MyButton
              color='#21466A'
              text='VER DETALLE DE CUOTAS'
            />
        </View>
      </View>
    </ScrollView>

   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#094F83',
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  content: {
    flex: 1,
    backgroundColor: '#003B65',
    alignItems: 'center',
    paddingVertical: 25,
  },
  titleContainer: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold'

  },
  resultTextContainer: {
    backgroundColor: '#00365C',
    alignItems: 'center',
    paddingVertical: 15,
    marginBottom: 15,
  },
  resultLabel: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold'
  },
  resultValue: {
    fontSize: 28,
    color: '#FFFFFF',
    fontFamily: 'Montserrat-Bold'
  },

});

export default App;
