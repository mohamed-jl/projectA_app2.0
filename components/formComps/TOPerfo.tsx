import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import Checkbox from 'expo-checkbox';

interface TOPerfoProps {
  onChange: (value: { cp1Cp2: string | null }) => void;
  data: any;
}

const TOPerfo = ({ onChange, data }: TOPerfoProps) => {
  const [selected, setSelected] = useState<string | null>(null);

  const [data1, setData1] = useState({
    tdp: data.tdp || '20',
    v1: data.v1 || '70',
    vToss: data.vToss || '',
  });

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
      <Text style={{borderRightWidth: 1,borderLeftWidth: 1,borderColor: '#ccc', padding: 8, flex:1, fontWeight: 'bold' }}>T.D.P</Text>
      <TextInput style={{borderRightWidth: 1,borderColor: '#ccc', padding: 8, flex:1 }} value={data1.tdp}/>
      <Text style={{borderRightWidth: 1,borderColor: '#ccc', padding: 8, flex:1 , fontWeight: 'bold'}}>V1</Text>
      <TextInput style={{borderRightWidth: 1,borderColor: '#ccc', padding: 8, flex:1 }} value={data1.v1}/>
      <Text style={{borderRightWidth: 1,borderColor: '#ccc', padding: 8, flex:1 , fontWeight: 'bold'}}>V.TOSS</Text>
      <TextInput style={{borderRightWidth: 1,borderColor: '#ccc', padding: 8, flex:1 }} value={data1.v1}/>
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
