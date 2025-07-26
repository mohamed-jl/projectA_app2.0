import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

const LoginScreen: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleLogin = async () => {
        try {
            const res = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/auth/login`, {
                username,
                password,
            });

            const { token, user } = res.data;
            await AsyncStorage.setItem("token", token);
            await AsyncStorage.setItem("user", JSON.stringify(user));

            router.replace("/(tabs)"); // or Dashboard, depending on your app
        } catch (err: any) {
            console.error("Login error:", err);
            const message = err?.response?.data?.message || "Erreur serveur";
            Alert.alert("Échec de connexion", message);
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={styles.container}>
            <Text style={styles.title}>Connexion</Text>

            <TextInput placeholder="Nom d'utilisateur" value={username} onChangeText={setUsername} autoCapitalize='none' style={styles.input} />

            <TextInput placeholder='Mot de passe' value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />

            <Button title='Se connecter' onPress={handleLogin} />
            <TouchableOpacity onPress={() => router.push("/register")}>
                <Text style={{ textAlign: "center", marginTop: 20, color: "blue" }}>Créer un compte</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 24,
        backgroundColor: "#fff",
        width: "50%",
        alignSelf: "center",
    },
    title: {
        fontSize: 28,
        marginBottom: 32,
        textAlign: "center",
        fontWeight: "bold",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
    },
});

export default LoginScreen;
