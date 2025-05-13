import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const SignIn = ({ Login }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      Alert.alert('Please add correct email.');
      return;
    }

    if (!password || password.length < 8) {
      Alert.alert('Password should be at least 8 characters.');
      return;
    }

    Alert.alert('Login successful!');
    Login();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <SafeAreaView style={styles.main}>
        <Text style={styles.headText}>Sign In</Text>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="grey"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="grey"
          value={password}
          style={styles.input}
          onChangeText={setPassword}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Button
          title="Sign In"
          color="blue"
          onPress={handleLogin}
          disabled={!email || !password}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 45,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 9,
    marginVertical: 10,
    paddingHorizontal: 10,
    color:'black'
  },
  headText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    paddingVertical: 50,
  },
});
