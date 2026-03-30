import React from "react";
import {View, Text} from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Menu } from "../components/Menu/Menu";
import { Logo } from "../components/Logo/Logo";
import { InputPass } from "../components/InputPass/InputPass";
import { GenButton } from "../components/GenButton/GenButton";
import { styles} from './HomeStyles'

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            <View style={styles.inputContainer}>
                <GenButton/>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}