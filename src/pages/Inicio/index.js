import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./styles"

export function Inicio({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.menu}>

                <View style={styles.menuTexto}>
                    <Text style={styles.textoPagina}>Início</Text>
                </View>

                <View style={styles.menuIcone}>
                    <TouchableOpacity onPress={() => navigation.navigate('Configuracao')}>
                        <Ionicons name="settings-sharp" color={'#3d3d3d'} size={25} />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={styles.conteudo}>
                <View style={styles.lembrete}>
                    <Text style={styles.lembreteTexto}>Lembretes ativos</Text>
                    <View>
                        <Text></Text>
                    </View>
                </View>

                <View>

                </View>

            </View>
        </View>
    );

}