import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setIsLoggedIn(false);
      setErrorMessage('Usuário ou senha incorretos.');
    }
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        <>
          <Text style={styles.title}>Faça o seu Login</Text>
          
          <TextInput 
            placeholder="Usuário" 
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#999"
          />
          
          <TextInput 
            placeholder="Senha" 
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#999"
          />

          {errorMessage ? (
            <Text style={styles.errorText}>{errorMessage}</Text>
          ) : null}
          
          <TouchableOpacity 
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.welcomeTitle}>Bem-vindo!</Text>
          <Text style={styles.welcomeMessage}>Você está logado como: {username}</Text>
          <TouchableOpacity 
            style={styles.logoutButton}
            onPress={() => {
              setIsLoggedIn(false);
              setUsername('');
              setPassword('');
            }}
          >
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </>
      )}
      
      <StatusBar style="auto" />
    </View>
  );
}
