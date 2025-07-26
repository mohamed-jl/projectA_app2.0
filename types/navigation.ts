import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation as useReactNavigation } from '@react-navigation/native';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Documents: undefined;
  Links: undefined;
  Form: undefined;
  // Add other screens here
};

// 👇 Type-safe navigation hook
export function useNavigation<T extends keyof RootStackParamList>() {
  return useReactNavigation<StackNavigationProp<RootStackParamList, T>>();
}

// 👇 Direct programmatic navigation helpers (optional)
export const goToLogin = (navigation: StackNavigationProp<any>) => {
  navigation.replace('Login');
};

export const goToHome = (navigation: StackNavigationProp<any>) => {
  navigation.replace('Home');
};

export const goToDocuments = (navigation: StackNavigationProp<any>) => {
  navigation.navigate('Documents');
};

export const goToLinks = (navigation: StackNavigationProp<any>) => {
  navigation.navigate('Links');
};

export const goToForm = (navigation: StackNavigationProp<any>) => {
  navigation.navigate('Form');
};
