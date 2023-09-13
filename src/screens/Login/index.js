import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Heading, Input, Image } from 'native-base'
//import auth from "../auth";
import { useNavigation } from '@react-navigation/native'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    const handleSignUp = () => {
        if (!email || !password) {
            return;

        }
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log('user', user);
            })
            .catch((error) => alert(error.message));
    };
    return (

        <Box p={6} backgroundColor={"white"} height={"100%"}>
            <Box>
                <Image source={require('../../enter.png')} alignSelf={"center"} mb={5} mt={5} style={{
                    width: 100,
                    height: 100,

                }} />
            </Box>

            <Box mb={2}>

                <Input placeholder='Email'
                    fontSize={20}
                    value={email}
                    shadow={"5"}
                    onChangeText={setEmail}
                    variant={"filled"}


                />

            </Box>
            <Box my={2}>

                <Input placeholder='Password'
                    fontSize={20}
                    value={password}
                    onChangeText={setPassword}
                    shadow={5}
                    secureTextEntry
                    variant={"filled"}
                /></Box>
            <Box mt={4}>
                <Button shadow={5} colorScheme={"blue"} size={"lg"} onPress={() => navigation.navigate("Home")} >Login </Button>
                <Button shadow={5} mt={4} colorScheme={"blue"} variant={"subtle"} size={"lg"} onPress={handleSignUp}
                > Register </Button>
            </Box>
        </Box>


    )
}

export default Login

const styles = StyleSheet.create({})