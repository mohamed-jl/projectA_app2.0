import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

export const storeUser = async (user: any) => {
  if (Platform.OS === 'web') {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    await SecureStore.setItemAsync('user', JSON.stringify(user));
  }
};

export const getStoredUser = async () => {
  if (Platform.OS === 'web') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  } else {
    const user = await SecureStore.getItemAsync('user');
    return user ? JSON.parse(user) : null;
  }
};

export const clearStoredUser = async () => {
  if (Platform.OS === 'web') {
    localStorage.removeItem('user');
  } else {
    await SecureStore.deleteItemAsync('user');
  }
};
