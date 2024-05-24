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
        width: "75%",
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
        width: "20%",
        flexDirection: 'row',
        gap: 25,
    },
    conteudo: {
        padding: 20,
    },
    lembrete: {
        flexDirection: 'row',
    },
    lembreteTipo: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
    },
    containerLembrete: {
        marginTop: 10,
        padding: 20,
        borderRadius: 5,
        backgroundColor: "#0081ce",
    },
    lembreteTitulo: {
        color: "#FFF",
        fontFamily: 'Questrial-Regular',
        fontSize: 15,
    } ,
    rodape: {
        flexDirection: 'row',
        marginTop: 400,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    rodapeTexto: {
        fontSize: 11,
        fontFamily: 'Poppins-Regular'
    },
    textoGitHub: {
        color: "#0081ce",
        fontSize: 11,
        fontFamily: 'Poppins-Medium'
    },
});

