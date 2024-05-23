import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./styles"

export function Configuracao({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.menu}>

                <View style={styles.menuIcone}>
                    <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                        <Ionicons name="arrow-back" color={'#3d3d3d'} size={22} />
                    </TouchableOpacity>
                </View>

                <View style={styles.menuTexto}>
                    <Text style={styles.textoPagina}>Configurações</Text>
                </View>
            </View>

            <View style={styles.conteudo}>

                <View>

                </View>

            </View>
        </View>
    );

}