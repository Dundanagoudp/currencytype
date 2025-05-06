import React, { useState } from 'react';
import type { JSX } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Snackbar from 'react-native-snackbar';

// Currency interface
export interface Currency {
  name: string;
  symbol: string;
  flag: string;
  value: number; 
}

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState<string>('');
  const [resultValue, setResultValue] = useState<string>('');
  const [targetCurrency, setTargetCurrency] = useState<string>('');

  const buttonPressed = (targetValue: Currency) => {
    if (!inputValue) {
      Snackbar.show({
        text: 'Please enter a value',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#ea7773',
        textColor: '#000000',
      });
      return;
    }

    const inputAmount = parseFloat(inputValue);
    if (!isNaN(inputAmount)) {
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol}${convertedValue.toFixed(2)}`;
      setResultValue(result);
      setTargetCurrency(targetValue.name);
    } else {
      Snackbar.show({
        text: 'Please enter a valid number',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: '#F4BE20',
        textColor: '#000000',
      });
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
});

export default App;
