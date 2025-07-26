import { View, Text, TextInput, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState, useEffect } from "react";

type TODataProps = {
  onChange?: (data: {
    runway: string | null;
    wind: string;
    visibility: string;
    tempDewPoint: string;
    qnh: string;
  }) => void;
};

const TOData = ({ onChange }: TODataProps) => {
  const [runway, setRunway] = useState<null | string>(null); // "33" or "15"
  const [wind, setWind] = useState("");
  const [visi, setVisi] = useState("");
  const [temp, setTemp] = useState("");
  const [qnh, setQnh] = useState("");

  // Emit data to parent whenever any field changes
  useEffect(() => {
    onChange?.({
      runway,
      wind,
      visibility: visi,
      tempDewPoint: temp,
      qnh,
    });
  }, [runway, wind, visi, temp, qnh]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>T/O Data</Text>
      <View style={styles.labelsCol}>
        <Text style={styles.label}>RWY IN USE</Text>
        <Text style={styles.label}>CIELING</Text>
      </View>
      <View style={styles.inputsCol}>
        <View style={styles.row}>
          <View style={styles.rwyRow}>
            <Text style={styles.rwyText}>33</Text>
            <Checkbox
              value={runway === "33"}
              onValueChange={() => setRunway("33")}
            />
            <Text style={styles.rwyText}>15</Text>
            <Checkbox
              value={runway === "15"}
              onValueChange={() => setRunway("15")}
            />
          </View>
          <Text style={styles.inputLabel}>WIND</Text>
          <TextInput style={styles.input} value={wind} onChangeText={setWind} />
          <Text style={styles.inputLabel}>VISI</Text>
          <TextInput style={styles.input} value={visi} onChangeText={setVisi} />
        </View>
        <View style={styles.row}>
          <TextInput style={styles.input} value={temp} onChangeText={setTemp} />
          <Text style={styles.inputLabel}>T /DP</Text>
          <TextInput style={styles.input} value={qnh} onChangeText={setQnh} />
          <Text style={styles.inputLabel}>QNH</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "100%",
  },
  header: {
    padding: 8,
    backgroundColor: "#d1d5db",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#ccc",
    textAlignVertical: "center",
  },
  labelsCol: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
  },
  label: {
    borderWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    padding: 8,
    textAlignVertical: "center",
  },
  inputsCol: {
    flexDirection: "column",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    minHeight: 40,
  },
  rwyRow: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 4,
  },
  rwyText: {
    padding: 8,
  },
  inputLabel: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    textAlignVertical: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    flex: 1,
    padding: 8,
    minWidth: 41,
  },
});

export default TOData;
