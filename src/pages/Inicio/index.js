import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./styles"

export function Inicio({ navigation }) {

    return (

        <View style={styles.container}>

            <View style={styles.menu}>

                <View style={styles.menuTexto}>
                    <Text style={styles.textoPagina}>Meus lembretes</Text>
                </View>

                <View style={styles.menuIcone}>

                <TouchableOpacity onPress={() => navigation.navigate('CriarLembrete')}>
                        <Ionicons name="add-circle" color={'#3d3d3d'} size={22} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Configuracao')}>
                        <Ionicons name="settings-sharp" color={'#3d3d3d'} size={22} />
                    </TouchableOpacity>
                    
                </View>


            </View>

            <ScrollView style={styles.conteudo}>

                <TouchableOpacity style={styles.containerLembrete}>

                    <Text style={styles.lembreteTitulo}>Tomar água dia de semana</Text>

                </TouchableOpacity>

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