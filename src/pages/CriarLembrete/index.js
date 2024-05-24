import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./styles"

export function CriarLembrete({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.menu}>

                <View style={styles.menuIcone}>
                    <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
                        <Ionicons name="arrow-back" color={'#3d3d3d'} size={22} />
                    </TouchableOpacity>
                </View>

                <View style={styles.menuTexto}>
                    <Text style={styles.textoPagina}>Criar lembrete</Text>
                </View>
            </View>

            <ScrollView style={styles.conteudo}>

                <View style={styles.rodape}>
                    <Text style={styles.rodapeTexto}>Feito por</Text>

                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://github.com/sophya-ribeiro')}>
                        <Text style={styles.textoGitHub}>Sophya Ribeiro</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );

}