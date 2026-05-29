import { View, Text } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';

import Button from '../button/index';
import Input from '@/componente/input/index';

import { styles } from '@/componente/card/style';

export const Card = () => {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [erroEmail, setErroEmail] = useState('');
    const [erroSenha, setErroSenha] = useState('');

    function handleLogin() {

        let possuiErro = false;

        const usuarioDigitado = email.trim().toLowerCase();
        const senhaDigitada = password.trim();

        if (!email) {
            setErroEmail('O treinador é obrigatório!');
            possuiErro = true;
        } else if (usuarioDigitado !== 'neyma') {
            setErroEmail('Treinador inválido!');
            possuiErro = true;
        } else {
            setErroEmail('');
        }

        if (!password) {
            setErroSenha('A senha é obrigatória!');
            possuiErro = true;
        } else if (senhaDigitada !== 'vaibrasil') {
            setErroSenha('Senha incorreta!');
            possuiErro = true;
        } else {
            setErroSenha('');
        }

        if (!possuiErro) {
            console.log('Login efetuado!');
            router.replace('/pokedex');
        }
    }

    return (
        <View
            style={[
                styles.card,
                {
                    backgroundColor: '#ff1c1c',
                    borderWidth: 4,
                    borderColor: '#000',
                }
            ]}
        >

            <Text
                style={[
                    styles.backgroundNumber10,
                    {
                        color: 'rgba(255,255,255,0.15)',
                    }
                ]}
            >
                ⚡
            </Text>

            <Text
                style={[
                    styles.title,
                    {
                        color: '#ffcb05',
                        textTransform: 'uppercase',
                    }
                ]}
            >
                Pokédex
            </Text>

            <Text
                style={[
                    styles.subtitle,
                    {
                        color: '#fff',
                    }
                ]}
            >
                Entre para capturar Pokémons
            </Text>

            <Input
                placeholder='Digite seu treinador'
                placeholderTextColor="rgba(255,255,255,0.6)"
                onChangeText={(texto) => {
                    setEmail(texto);

                    if (erroEmail) {
                        setErroEmail('');
                    }
                }}
                value={email}
                errorMessage={erroEmail}
                style={{
                    backgroundColor: '#fff',
                    color: '#333',
                    borderWidth: 2,
                    borderColor: '#000',
                }}
            />

            <Input
                placeholder='Digite sua senha'
                placeholderTextColor="rgba(255,255,255,0.6)"
                onChangeText={(texto) => {
                    setPassword(texto);

                    if (erroSenha) {
                        setErroSenha('');
                    }
                }}
                value={password}
                errorMessage={erroSenha}
                secureTextEntry={true}
                style={{
                    backgroundColor: '#fff',
                    color: '#333',
                    borderWidth: 2,
                    borderColor: '#000',
                }}
            />

            <Button
                title="ENTRAR NA POKÉDEX"
                onPress={handleLogin}
            />

            {email.trim().toLowerCase() === 'neyma' && (
                <Text
                    style={[
                        styles.easterEggText,
                        {
                            color: '#ffcb05',
                        }
                    ]}
                >
                    ⚡ Pikachu, eu escolho você!
                </Text>
            )}

        </View>
    );
};