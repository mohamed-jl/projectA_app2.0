import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const pickerStyle = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        color: "#333",
        backgroundColor: "#fff",
        marginBottom: 16,
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        color: "#333",
        backgroundColor: "#fff",
        marginBottom: 16,
    },
    placeholder: {
        color: "#888",
    },
};

interface Props {
    setDestination: (value: string) => void;
    setPlane: (value: string) => void;
}   

const BeforeForm = ({setDestination, setPlane}:Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Destination</Text>
            <RNPickerSelect
                placeholder={{ label: "select a destination", value: null }}
                onValueChange={(value) => setDestination(value)}
                items={[
                    { label: "MISKAR", value: "MISKAR" },
                    { label: "HASDRUBAL", value: "HASDRUBAL" },
                    { label: "ASHTART ", value: "ASHTART" },
                ]}
                style={pickerStyle}
                useNativeAndroidPickerStyle={false}
            />
            <Text style={styles.label}>Plane</Text>
            <RNPickerSelect
                placeholder={{ label: "select a plane", value: null }}
                onValueChange={(value) => setPlane(value)}
                items={[
                    { label: "TS-HSJ", value: "TS-HSJ" },
                    { label: "TS-HSI", value: "TS-HSI" },
                ]}
                style={pickerStyle}
                useNativeAndroidPickerStyle={false}
            />
        </SafeAreaView>
    );
};

export default BeforeForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#f7f7f7",
        justifyContent: "center",
    },
    label: {
        fontSize: 14,
        color: "#555",
        marginBottom: 4,
        marginLeft: 2,
    },
});
