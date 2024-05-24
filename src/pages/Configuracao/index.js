import { Text, View, TouchableOpacity, Linking, ScrollView, Switch } from 'react-native'
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'
import { styles } from "./styles"

export function Configuracao({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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

            <ScrollView style={styles.conteudo}>

                <View style={[styles.containerConfig, {paddingBottom:5, gap: 0}]}>
                    <Text style={styles.configTitulo}>Exibição</Text>
                    <View style={styles.exibicaoOp}>
                        <Text>Modo escuro</Text>
                        <Switch
                            trackColor={{ false: '#b0afb1', true: '#31bbff' }}
                            thumbColor={isEnabled ? '#eff9ff' : '#f4f3f4'}
                            ios_backgroundColor="#b0afb1"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>

                <View style={styles.containerConfig}>
                    <Text style={styles.configTitulo}>Notificação</Text>
                    <View style={styles.exibicaoOp}>
                        <Text>Som</Text>
                    </View>
                </View>

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