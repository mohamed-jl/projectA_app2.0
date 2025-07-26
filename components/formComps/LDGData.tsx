import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const LDGData = ({ onChange }: { onChange: (data: any) => void }) => {
  const [selectedCP, setSelectedCP] = useState<string | null>(null);
  const [form, setForm] = useState({
    ldgPerfo: '',
    ldp: '',
    v1: '',
    vtos: '',
  });

  const handleCPChange = (value: string) => {
    const newValue = value === selectedCP ? null : value;
    setSelectedCP(newValue);
    onChange({ ...form, cp: newValue });
  };

  const handleInputChange = (field: string, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    onChange({ ...updated, cp: selectedCP });
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header}>LDG Data</Text>
        <View style={styles.col}>
          <Text style={styles.label}>WIND</Text>
          <Text style={styles.label}>CIELING</Text>
        </View>
        <View style={styles.flex1Col}>
          <View style={styles.inputRow}>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>VISI</Text>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>T/DP</Text>
            <TextInput style={styles.input} />
            <Text style={styles.inputLabel}>QNH</Text>
            <TextInput style={styles.input} />
          </View>
          <TextInput style={styles.input} />
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.header1}>LDG PERFO</Text>
        <View style={styles.checkboxRow}>
          <Text style={styles.checkboxLabel}>CP1</Text>
          <Checkbox
            value={selectedCP === "CP1"}
            onValueChange={() => handleCPChange("CP1")}
          />
          <Text style={styles.checkboxLabel}>CP2</Text>
          <Checkbox
            value={selectedCP === "CP2"}
            onValueChange={() => handleCPChange("CP2")}
          />
        </View>
        <Text style={styles.centerLabel}>LDP</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => handleInputChange("ldp", val)}
        />
        <Text style={styles.centerLabel}>V1</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => handleInputChange("v1", val)}
        />
        <Text style={styles.centerLabel}>VTOS</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => handleInputChange("vtos", val)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "100%",
  },
  row: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  header: {
    backgroundColor: "#d1d5db",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    minWidth: 40,
    textAlign: "center",
    height: 75,
  },
  col: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  label: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    minWidth: 60,
  },
  flex1Col: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    minWidth: 40,
    padding: 8,
  },
  inputLabel: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    minWidth: 40,
    textAlign: "center",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    paddingHorizontal: 4,
  },
  checkboxLabel: {
    padding: 8,
  },
  centerLabel: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    textAlign: "center",
    minWidth: 40,
  },
  header1: {
    backgroundColor: "#d1d5db",
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    minWidth: 40,
    textAlign: "center",
    height: 37,
  },
});

export default LDGData;
