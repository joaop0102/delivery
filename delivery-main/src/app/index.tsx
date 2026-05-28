import { View, StyleSheet } from 'react-native';
import { Card } from '../componente/card';

export default function Index() {
    return (
        <View style={styles.container}>
            <Card />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#002776', 
        flex: 1,
        padding: 24,
        justifyContent: 'center', 
        alignItems: 'center', 
    }
});