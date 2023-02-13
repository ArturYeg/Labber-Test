import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

// import styles from './styles';

const CELL_COUNT = 6;

const CodeInput = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.root}>

            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFiledRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                    <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                )}
            />
        </SafeAreaView>
    );
};

export default CodeInput;

const styles = StyleSheet.create({
    root: {
        marginBottom: 60
        // padding: 20,
        //  minHeight: 300
    },
    title: {
        // textAlign: 'center', 
        // fontSize: 30
    },
    codeFiledRoot: {
        // marginTop: 20
    }
    ,
    cell: {       
        width: 43,
        height: 56,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#B8B8C9',
        textAlign: 'center',        
        borderRadius: 4,
        padding:16,
    },
    focusCell: {
        borderColor: '#000',
    },
})