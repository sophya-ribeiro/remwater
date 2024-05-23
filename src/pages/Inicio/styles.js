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
        paddingBottom: 15,
        paddingRight: 20,
        paddingLeft: 20,
        width: "100%",
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderColor: "#E0E0E0"
    },
    menuIcone: {
        width: "14%",
    },
    icone: {
        width: 30,
        height: 30,
    },
    menuTexto: {
        width: "50%",
    },
    textoPagina: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: "#000",
    },
    textoSubpagina: {
        fontSize: 12,
        color: "#000",
    },
    menuLogo: {
        width: "10%",
        paddingLeft: 60,
    },
    logo: {
        width: 45,
        height: 30,
    },
});

