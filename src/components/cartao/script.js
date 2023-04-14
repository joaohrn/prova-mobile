import { Button, Image, Text, View } from "react-native";
import { styles } from "./styles";


function Cartao(props) {
    return(
        <View style={styles.cartao}>
            <Image
                source={props.imagem}
                style={styles.imagem}></Image>
            <View style={styles.informacoes}>
                <Text style={styles.texto}>{props.nome} lv. {props.nivel}</Text>
                <Text style={styles.texto}>stats:</Text>
                <Text style={styles.texto}>força: {props.forca}</Text>
                <Text style={styles.texto}>destreza: {props.destreza}</Text>
                <Text style={styles.texto}>valor: {props.valor}g</Text>
            </View>
            <View style={styles.comprar}>
                <Button title="comprar"></Button>
            </View>
        </View>
    )
}

export {Cartao}