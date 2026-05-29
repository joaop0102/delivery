import { TextInput, TextInputProps, StyleProp, TextStyle, View, Text } from "react-native"; 
import { styles } from '@/componente/input/styles'; 

type Props = TextInputProps & {
    placeholder: string;
    style?: StyleProp<TextStyle>; 
    errorMessage?: string; 
};

export default function Input({ style, errorMessage, ...rest }: Props) {
    return (
        <View style={{ marginBottom: 15 }}> 
            <TextInput
                style={[styles.input, style]} 
                {...rest}
            />
            
            {errorMessage && (
                <Text style={styles.erroText}> 
                    {errorMessage}
                </Text>
            )}
        </View>
    );
}