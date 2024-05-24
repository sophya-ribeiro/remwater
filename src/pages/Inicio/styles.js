import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
    },
    menu: {
        ...Platform.select({
            ios: {
                paddingTop: 55,
            },
            android: {
                paddingTop: 45,
            },
        }),
        flexDirection: 'row',
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
        width: "100%",
        alignItems: 'center',
        borderBottomWidth: 0.,
        borderColor: "#E0E0E0",
        justifyContent: 'space-between',
        backgroundColor: "#FFF"
    },
    menuTexto: {
        width: "50%",
    },
    textoPagina: {
        fontSize: 16,
        fontFamily: 'Montserrat-VariableFont_wght',
        fontWeight: '800',
        color: "#000",
    },
    textoSubpagina: {
        fontSize: 12,
        color: "#000",
    },
    menuIcone: {
        width: "10%",
    },
    conteudo:{
        padding: 20,
    },
    lembrete:{
        flexDirection: 'row',
    },
    lembreteTexto:{
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    rodape: {
        opacity: 1,
        flexDirection: 'row',
        marginTop: 550,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    rodapeTexto: {
        fontSize: 11,
        fontFamily: 'Poppins-Regular'
    },
    textoGitHub: {
        color: "#eff9ff",
        fontSize: 11,
        fontFamily: 'Poppins-Medium'
    },
});

