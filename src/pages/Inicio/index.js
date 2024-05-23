import { Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./styles"

export function Inicio() {

    return (

        <View style={styles.container}>
            <View style={styles.menu}>

                <View style={styles.menuIcone}>
                    <Ionicons name="home-outline" color={'#F48E28'} size={25} />
                </View>

                <View style={styles.menuTexto}>
                    <Text style={styles.textoPagina}>Início</Text>
                </View>

                <View style={styles.menuLogo}>
                    {/* <Image
                        source={require("../../assets/images/logo.png")}
                        style={styles.logo}
                    /> */}
                </View>
            </View>

            <View style={styles.conteudo}>
            </View>
        </View>
    );

}