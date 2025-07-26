import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";

type Props = {
  onChange: ( value: any) => void;
};

const waypoints = ["SFAX", "GOLF", "FIR", "MISKAR", " "];

const WayPoints: React.FC<Props> = ({ onChange }) => {
  const [values, setValues] = useState<string[][]>(
    Array(waypoints.length).fill(null).map(() => Array(10).fill(""))
  );

  const handleChange = (rowIndex: number, colIndex: number, text: string) => {
    const updated = [...values];
    updated[rowIndex][colIndex] = text;
    setValues(updated);
    onChange( updated);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.headerRow]}>
        <Text style={styles.headerCell}>WayPoints</Text>
        <Text style={styles.headerCell}>M.C</Text>
        <Text style={styles.headerCell}>DIST</Text>
        <Text style={styles.headerCell}>E.T.E</Text>
        <Text style={styles.headerCell}>E.T.A</Text>
        <Text style={styles.headerCell}>R.T.A</Text>
        <Text style={styles.headerCell}>FUEL CON</Text>
        <Text style={styles.headerCell}>RM. FUEL</Text>
        <Text style={styles.headerCell}>AC. FUEL</Text>
        <Text style={styles.headerCell}>ALT</Text>
        <Text style={styles.headerCell}>MSA</Text>
      </View>
      {waypoints.map((wp, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          <Text style={styles.cell}>{wp}</Text>
          {Array.from({ length: 10 }).map((_, colIndex) => (
            <TextInput
              key={colIndex}
              style={styles.inputCell}
              value={values[rowIndex][colIndex]}
              onChangeText={(text) => handleChange(rowIndex, colIndex, text)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
  },
  headerRow: {
    backgroundColor: "#e5e7eb",
  },
  headerCell: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    padding: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    fontWeight: "bold",
    textAlign: "center",
  },
  cell: {
    flex: 1,
    backgroundColor: "#e5e7eb",
    padding: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    textAlign: "center",
  },
  inputCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 8,
    backgroundColor: "#fff",
    textAlign: "center",
  },
});

export default WayPoints;
