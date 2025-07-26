import axios from 'axios';
import Constants from 'expo-constants';

type Document = {
  _id: string;
  name: string;
  mimetype: string;
  size: number;
  createdAt?: string;
  updatedAt?: string;
};

const API_URL = Constants.expoConfig?.extra?.EXPO_PUBLIC_API_URL || 'http://10.0.2.2:5000/api';
const BASE_URL = `${API_URL}/files`;

export const fetchDocuments = async (): Promise<Document[]> => {
  const res = await axios.get<Document[]>(BASE_URL);
  return res.data;
};

export const getDownloadUrl = (id: string): string => {
  return `${BASE_URL}/${id}/download`;
};

export const deleteDocument = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};
