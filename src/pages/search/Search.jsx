import { useState, useEffect } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { api } from "../../../assets/api/req";
import { style } from "../search/SearchStyle";
import { TextInput } from 'react-native-paper';


export function Search({ route, navigation }) {
    const [value, setValue] = useState(route.params.text)
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function start() {
        var result = await api.get(
            `${value}&per_page=35&format=json&nojsoncallback=1`
        );
        setImages(result.data.photos.photo)
    }

    const onSearch = () => {
        navigation.navigate('Home', {
            text: value
        });
    }

    useEffect(() => {
        start()
    }, [value])

    useEffect(() => {
        start();
    }, []);

    return (
        <SafeAreaView style={style.container}>
            
            <TouchableOpacity onPress={() => onSearch()} style={style.button}>
                <Text style={style.text}>
                    Voltar
                </Text>
            </TouchableOpacity>
            
            <TextInput
         
         style={style.input}
         value={value}
         onChangeText={(e) => setValue(e)}
         placeholder="Procurar imagens" placeholderTextColor="#d0d0d0"
         underlineColorAndroid='none' underlineColor='none' activeUnderlineColor='none'
         right={<TextInput.Icon icon="magnify" />}
                />
            <FlatList
                data={images}
                keyExtractor={(item, index) => item.id}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <Image
                        style={style.image}
                        source={{
                            uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`
                        }}
                    />
                )}
            />
        </SafeAreaView>
    );
}
