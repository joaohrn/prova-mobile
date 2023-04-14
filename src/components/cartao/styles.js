import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cartao: {
        display: "flex",
        flexDirection: "row",
        minHeight: '72px',
        minWidth: '100%',
        backgroundColor: 'black',
        paddingRight: 'auto',
        margin:'10px',
        alignItems: 'center',

    },
    imagem: {
        minHeight: '100%',
        minWidth: '20%'
    },
    informacoes: {
       flex: '2 1 auto',
    },
    texto: {
        color: 'white',
    },
    comprar: {
        minHeight: '100%',
        minWidth: '20%',
        marginLeft: '50px',
        justifyContent:'center',
        flex: '0 1 auto'
    },
    
})

export {styles}