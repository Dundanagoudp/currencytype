import React, { useState } from 'react';
import type { JSX } from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { CurrencyByRupee, Currency } from './constants';

const CurrencyButton = (props: Currency) => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.country}>{props.name}</Text>
    </View>
  );
};

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
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`;
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
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              maxLength={14}
              value={inputValue}
              onChangeText={setInputValue}
              clearButtonMode="always"
              placeholder="Enter amount in Rupees"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              style={styles.inputAmountField}
            />
          </View>
          {resultValue && (
            <Text style={styles.resultText}>
              {resultValue}
            </Text>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <FlatList
            numColumns={3}
            data={CurrencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.button,
                  targetCurrency === item.name && styles.selected
                ]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#515151',
    paddingTop: 20,
  },
  mainContainer: {
    flex: 1,  
    padding: 20,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4BE20',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rupee: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  inputAmountField: {
    height: 50,
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 20,
    color: '#000',
  },
  resultText: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
    color: '#000',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    backgroundColor: '#F4BE20',
    padding: 15,
    borderRadius: 8,
    margin: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 90,
  },
  selected: {
    backgroundColor: '#ea7773',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    marginBottom: 6,
  },
  country: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
});

export default App;