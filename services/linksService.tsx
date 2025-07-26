import axios from 'axios';
import Constants from 'expo-constants';

const API_URL = Constants.expoConfig?.extra?.EXPO_PUBLIC_API_URL || 'http://10.0.2.2:5000/api';

export const getLinks = async () => {
  const res = await axios.get(`${API_URL}/links`);
  return res.data;
};
