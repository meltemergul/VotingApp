import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Heading, Input } from 'native-base'
import auth from '../auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = () => {
        if (!email || !password) {
            return;

        }
        auth
            .createUserWithEmailAndPassword(email, password).then((userCredentials) => {
                const user = userCredentials.user;
                console.log("user", user);
            })
            .catch((error) => alert(error.message));
    };
    return (
        <Box p={6}>
            <Box mb={2}>
                <Heading mb={2}>
                    E-mail
                </Heading>
                <Input placeholder='Please enter your E-mail'
                    fontSize={20} borderColor="#686565"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize={false}
                />

            </Box>
            <Box my={2}>
                <Heading mb={2}>
                    Password
                </Heading>
                <Input placeholder='Enter your Password'
                    fontSize={20} borderColor="#686565"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                /></Box>
            <Box mt={4}>
                <Button colorScheme={"blue"} size={"lg"}> Login </Button>
                <Button mt={4} colorScheme={"blue"} variant={"outline"} size={"lg"} onPress={handleSignUp}> Register </Button>
            </Box>
        </Box>


    )
}

export default Login

const styles = StyleSheet.create({})