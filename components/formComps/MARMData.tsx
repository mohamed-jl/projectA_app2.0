import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

type MARMDataProps = {
    onChange: (value: any) => void;
};



const MARMData: React.FC<MARMDataProps> = ({onChange}) => {

    const [data, setData] = React.useState({
        n11: '',
        n12: '',
        n21: '',
        n22: '',
    });

    React.useEffect(() => {
        // Emit data to parent whenever any field changes
        onChange(data);
    }, [data]);

    return (
        <View style={styles.row}>
            <Text style={[styles.header, styles.cell]}>MARM'S Data</Text>
            <Text style={[styles.cell, styles.label]}>N1.1</Text>
            <TextInput style={styles.cell} onChangeText={(text) => setData({ ...data, n11: text })} />
            <Text style={[styles.cell, styles.label]}>N1.2</Text>
            <TextInput style={styles.cell} onChangeText={(text) => setData({ ...data, n12: text })} />
            <Text style={[styles.cell, styles.label]}>N2.1</Text>
            <TextInput style={styles.cell} onChangeText={(text) => setData({ ...data, n21: text })} />
            <Text style={[styles.cell, styles.label]}>N2.2</Text>
            <TextInput style={styles.cell} onChangeText={(text) => setData({ ...data, n22: text })} />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    cell: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 8,
        flex: 1,
    },
    header: {
        backgroundColor: "#e5e7eb",
        flex: 0,
    },
    label: {
        fontWeight: "bold",
    },
});

export default MARMData;
