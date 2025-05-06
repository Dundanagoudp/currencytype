
import { Text, View,StyleSheet } from 'react-native'
import type { PropsWithChildren } from 'react'
import React from 'react'


type CurrencyButtonProps = PropsWithChildren<{
    title: string;
    flag: string;
}>

const currencyButton = ( props:CurrencyButtonProps): React.JSX.Element => {
  
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{props.flag} {props.title}</Text>
        </View>
    )
}

export default currencyButton


const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
