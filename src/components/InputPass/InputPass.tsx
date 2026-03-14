import React from "react";
import { TextInput } from 'react-native'
import { styles } from './InputPassStyle'

export function InputPass(){
    return(
        <TextInput
            placeholder="password"
            style={styles.inputer}
        />
    )
}