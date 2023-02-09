
import { StyleSheet } from "react-native"

export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 100
    },
    input:{
        borderColor: '#d0d0d0',
        borderWidth: 1,
        borderRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: '#fff', 
        height: 50,
        width: '80%',
        paddingLeft: 20,
        fontSize: 20,
        marginVertical: 30,
        textDecorationLine:'none',
    },


    button: {
        backgroundColor: '#e6e4e4',
        height: 40,
        width: 150,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#000"
    },
    search: {
        fontSize: 20, 
        color:'gray',
        padding: 20
      },
      logout: {
        color: 'blue',
        marginTop: 150
    }

}) 

