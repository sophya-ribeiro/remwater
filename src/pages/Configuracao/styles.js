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
                paddingTop: 40,
            },
        }),
        flexDirection: 'row',
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        width: "100%",
        alignItems: 'center',
        borderBottomWidth: 0.,
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
    conteudo: {
        paddingTop: 5,
    },
    lembrete: {
        flexDirection: 'row',
    },
    lembreteTexto: {
        fontFamily: 'Poppins-Regular',
        fontSize: 14,
    },
    containerConfig:{
        gap: 10,
        backgroundColor: "#FFF",
        paddingTop: 14,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        borderRadius: 8,
        shadowColor: 'rgba(0,0,0, 0.2)',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        elevation: 8,
        shadowOpacity: 0.28,
    },
    configTitulo:{
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
    },
    exibicaoOp:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rodape: {
        opacity: 0.3,
        flexDirection: 'row',
        marginTop: 350,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    rodapeTexto: {
        fontSize: 11,
        fontFamily: 'Poppins-Regular'
    },
    textoGitHub: {
        fontSize: 11,
        fontFamily: 'Poppins-Medium'
    },
});

