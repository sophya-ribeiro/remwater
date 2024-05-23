import { StyleSheet, Platform } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        flex: 1,
        backgroundColor: "#f2f1f2",

    },
    menu: {
        ...Platform.select({
            ios: {
                paddingTop: 55,
            },
            android: {
                paddingTop: 40,
            },
        }),
        backgroundColor: "#FFF",
        flexDirection: 'row',       
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        justifyContent: 'space-between',
        width: "100%",
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: "#E0E0E0"
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
    }
});

