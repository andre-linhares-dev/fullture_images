
import { TextInput } from 'react-native-paper';
import { Image, Text, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { style } from "./HomeStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home({ navigation }) {
    const [value, setValue] = useState('')

    const onSearch = () => {
        navigation.navigate('Search', {
            text: value
        });
    }
    const logOut = async() => {
        await AsyncStorage.removeItem('isAuth')
        navigation.navigate('Login')
    }

    return (
        <SafeAreaView style={style.container}>
            <Image source={require('../../../assets/logo.png')} style={style.image} />
            <TextInput  

                style={style.input}
                value={value}
                onChangeText={(e) => setValue(e)}
                placeholder="Procurar imagens" placeholderTextColor="#d0d0d0"
                underlineColorAndroid='none' underlineColor='none' activeUnderlineColor='none'
                right={<TextInput.Icon icon="magnify" />}
           
            />
            <TouchableOpacity onPress={() => onSearch()} style={style.button}>
                <Text style={style.text}>
                    Procurar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={style.logout} onPress={()=>logOut()}>
                    Sair da conta
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

