import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    button: {
        backgroundColor: '#facc15',

        borderRadius: 18,

        paddingVertical: 16,
        paddingHorizontal: 24,

        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 2,
        borderColor: '#1e3a8a',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,

        elevation: 8,

        marginTop: 14,

        overflow: 'hidden',
    },

    buttonText: {
        color: '#111827',

        fontSize: 17,

        fontWeight: '900',

        textTransform: 'uppercase',

        letterSpacing: 1.5,
    },

});