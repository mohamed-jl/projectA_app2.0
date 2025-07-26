import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import BG_IMAGE from "../../assets/images/bg-image.png";

import * as SecureStore from 'expo-secure-store';

const logout = async () => {
  await SecureStore.deleteItemAsync('token');
  router.replace('/login');
};


export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground source={BG_IMAGE} style={{flex: 1, justifyContent: "center", width:"100%" }} resizeMode='cover'>
                {/* Background image is set, no additional content needed here */}
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Your personal dashboard</Text>
                </View>

                <View style={styles.buttonRow}>
                    <Link href='/documents' asChild>
                        <TouchableOpacity style={styles.documentsButton}>
                            <Text style={styles.documentsButtonText}>Documents</Text>
                        </TouchableOpacity>
                    </Link>
                    <Link href='/links' asChild>
                        <TouchableOpacity style={styles.linksButton}>
                            <Text style={styles.linksButtonText}>Links</Text>
                        </TouchableOpacity>
                    </Link>
                    <Link href='/form' asChild>
                        <TouchableOpacity style={styles.linksButton}>
                            <Text style={styles.linksButtonText}>Forms</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    headerContainer: {
        alignItems: "center",
        gap: 12,
    },
    title: {
        fontSize: 40,
        fontWeight: "800",
        color: "#4c1d95",
    },
    subtitle: {
        fontSize: 18,
        color: "#7c3aed",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 24,
        marginTop: 40,
    },
    documentsButton: {
        backgroundColor: "#7c3aed",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 16,
        shadowColor: "#7c3aed",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        width: 160,
        justifyContent: "center",
        alignItems: "center",
    },
    documentsButtonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
    },
    linksButton: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#7c3aed",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 16,
        shadowColor: "#7c3aed",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.12,
        shadowRadius: 6,
        width: 160,
        justifyContent: "center",
        alignItems: "center",
    },
    linksButtonText: {
        color: "#7c3aed",
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
    },
});
