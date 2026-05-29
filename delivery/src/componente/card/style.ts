import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    card: {
        backgroundColor: '#111827',

        width: '90%',
        maxWidth: 400,

        borderRadius: 28,

        padding: 26,

        borderWidth: 2,
        borderColor: '#facc15',

        elevation: 12,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.35,
        shadowRadius: 10,

        position: 'relative',

        overflow: 'hidden',
    },

    title: {
        fontSize: 32,

        fontWeight: '900',

        color: '#facc15',

        textTransform: 'uppercase',

        letterSpacing: 3,

        textAlign: 'center',

        marginBottom: 6,

        textShadowColor: 'rgba(0,0,0,0.5)',

        textShadowOffset: {
            width: 2,
            height: 2,
        },

        textShadowRadius: 6,
    },

    subtitle: {
        fontSize: 13,

        fontWeight: '700',

        color: '#d1d5db',

        textAlign: 'center',

        marginBottom: 24,

        textTransform: 'uppercase',

        letterSpacing: 1.5,
    },

    backgroundNumber10: {
        position: 'absolute',

        right: -15,
        bottom: -45,

        fontSize: 150,

        fontWeight: '900',

        color: 'rgba(250, 204, 21, 0.08)',

        fontStyle: 'italic',

        transform: [{ rotate: '-12deg' }],
    },

    easterEggText: {
        fontSize: 14,

        color: '#facc15',

        fontWeight: '800',

        textAlign: 'center',

        marginTop: 18,

        backgroundColor: '#1f2937',

        paddingVertical: 10,
        paddingHorizontal: 14,

        borderRadius: 14,

        borderWidth: 1,
        borderColor: '#374151',

        overflow: 'hidden',
    }

});