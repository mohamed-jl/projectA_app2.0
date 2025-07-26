import { useState } from 'react';
import { View, TextInput, Button, Text, Alert, Platform, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const storeUser = async (user: any) => {
    const data = JSON.stringify(user);
    if (Platform.OS === 'web') {
      localStorage.setItem('user', data);
    } else {
      await SecureStore.setItemAsync('user', data);
    }
  };

  const handleRegister = async () => {
    if (!username || !fullName || !email || !phone || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        username,
        fullName,
        email,
        phone,
        password,
      });

      Alert.alert('Success', 'Account created. Please log in.');
      router.replace('/login');
    } catch (err: any) {
      console.log('Register error:', err.message);
      Alert.alert('Registration failed', err?.response?.data?.message || 'Unexpected error');
      setLoading(false);
    }
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 24,
      backgroundColor: '#fff', width: '60%',
      alignSelf: 'center'
    }}>
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Register</Text>

        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={inputStyle}
        />
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}
          style={inputStyle}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={inputStyle}
        />
        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          style={inputStyle}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={inputStyle}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#000" />
        ) : (
          <Button title="Register" onPress={handleRegister} />
        )}

        <Text
          onPress={() => router.push('/login')}
          style={{ color: 'blue', marginTop: 12, textAlign: 'center' }}
        >
          Already have an account? Login
        </Text>
      </View>
    </View>
  );
}

const inputStyle = {
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 12,
  borderRadius: 6,
  backgroundColor: '#fff'
};
