import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";

type WeightSection = {
    oew: string;
    fuel: string;
    load: string;
    tWeight: string;
};

type WeightData = {
    to: WeightSection;
    ldg: WeightSection;
    to2: WeightSection;
    ldg2: WeightSection;
};

type Props = {
    onChange: (data: WeightData) => void;
    data: any;
};

const Weight: React.FC<Props> = ({ onChange, data }) => {
    const [weightData, setWeightData] = useState<WeightData>({
        to: { oew: "3045", fuel: "460", load: "", tWeight: "" },
        ldg: { oew: "3045", fuel: "", load: "", tWeight: "" },
        to2: { oew: "3045", fuel: "290", load: "", tWeight: "" },
        ldg2: { oew: "3045", fuel: "", load: "", tWeight: "" },
    });


    useEffect(() => {
        onChange(weightData);
    }, [weightData]);

    const handleChange = (section: keyof WeightData, field: keyof WeightSection, value: string) => {
        setWeightData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };

    const renderRow = (label: string, section: keyof WeightData) => (
        <View style={styles.row}>
            <Text style={styles.textCell}>{label}</Text>
            <TextInput style={styles.inputCell} value={weightData[section].oew} onChangeText={(val) => handleChange(section, "oew", val)} keyboardType='numeric' />
            <TextInput style={styles.inputCell} value={weightData[section].fuel} onChangeText={(val) => handleChange(section, "fuel", val)} keyboardType='numeric' />
            <TextInput style={styles.inputCell} value={weightData[section].load} onChangeText={(val) => handleChange(section, "load", val)} keyboardType='numeric' />
            <TextInput style={styles.inputCell} value={weightData[section].tWeight} onChangeText={(val) => handleChange(section, "tWeight", val)} keyboardType='numeric' />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ ...styles.row, ...styles.bgGray }}>
                <Text style={styles.textCell}>.</Text>
                <Text style={styles.textCell}>O.E.W</Text>
                <Text style={styles.textCell}>Fuel</Text>
                <Text style={styles.textCell}>Load</Text>
                <Text style={styles.textCell}>T. Weight</Text>
            </View>

            {renderRow("T/O (kg)", "to")}
            {renderRow("LDG (kg)", "ldg")}

            <View style={styles.seperator} />

            {renderRow("T/O (kg)", "to2")}
            {renderRow("LDG (kg)", "ldg2")}
        </View>
    );
};

export default Weight;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
    },
    row: {
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
    },
    textCell: {
        padding: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        textAlign: "center",
        flex: 1,
        width: "100%",
    },
    inputCell: {
        padding: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        textAlign: "center",
        flex: 1,
        width: "100%",
    },
    seperator: {
        width: 40,
        backgroundColor: "#ccc",
    },
    bgGray: {
        backgroundColor: "#e5e7eb",
    },
});
