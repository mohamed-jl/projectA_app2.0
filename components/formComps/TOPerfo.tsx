import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

interface TOPerfoProps {
  onChange: (value: { cp1Cp2: string | null }) => void;
}

const TOPerfo = ({ onChange }: TOPerfoProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    const newValue = selected === value ? null : value;
    setSelected(newValue);
    onChange({ cp1Cp2: newValue });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>T/O PERFO</Text>
      <View style={styles.row}>
        <Text style={styles.text}>CP1</Text>
        <Checkbox
          value={selected === 'CP1'}
          onValueChange={() => handleSelect('CP1')}
        />
        <Text style={styles.text}>CP2</Text>
        <Checkbox
          value={selected === 'CP2'}
          onValueChange={() => handleSelect('CP2')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  label: {
    backgroundColor: '#d1d5db',
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    padding: 8,
  },
});

export default TOPerfo;
