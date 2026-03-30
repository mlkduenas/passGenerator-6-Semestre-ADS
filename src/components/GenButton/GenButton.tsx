import React, { useState } from "react";
import { View, Button, Text, Pressable } from 'react-native'
import { styles }  from './GenButtonStyles'

import { InputPass } from "../InputPass/InputPass";
import generatePass from "../../services/passwordService";
import * as Clipboard from 'expo-clipboard';

export function GenButton(){
    const [pass, setPass] = useState('')

    function handleGeneratePassword(){
        let token = generatePass()
        setPass(token)
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(pass)
    }

    return(
        //<View style={{borderWidth:2, borderColor:'red'}}>
        <>
        
            {/*<Button
                title="Clique aqui!"
                onPress={handleGeneratePassword}
            />*/}

            <InputPass pass={pass}/>

            <Pressable style={styles.button} onPress={handleGeneratePassword}>
                <Text style={styles.texto}>🔐 GERAR SENHA 🔐</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleCopyButton}>
                <Text style={styles.texto}>🗒️ COPIAR 🗒️</Text>
            </Pressable>
        </>
        //</View>
    )
}