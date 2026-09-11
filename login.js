import { StyleSheet } from 'react-native'
import { useState } from 'react'
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
  
}

export default Login

const styles = StyleSheet.create({})