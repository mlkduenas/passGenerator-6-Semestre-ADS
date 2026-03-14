import React from "react";
import {View, Text, Image} from "react-native";
import { styles } from "./LogoStyle"
import picLogo from "../../../assets/logo-app.png"

export function Logo(){
    return(
        <View>
            <Text style={styles.title}>PASS GENERATOR</Text>
            <Image
                source={picLogo}
                style={styles.imageSize}
            />
        </View>
    )
}