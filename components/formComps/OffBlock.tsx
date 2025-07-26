import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

type Props = {
  time1?: Date;
  time2?: Date;
  time3?: Date;
  onChange: (field: 'time1' | 'time2' | 'time3', value: Date) => void;
};

const OffBlock: React.FC<Props> = ({ time1, time2, time3, onChange }) => {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  const [show3, setShow3] = React.useState(false);

  const handleChange = (
    field: 'time1' | 'time2' | 'time3',
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    if (selectedDate) {
      onChange(field, selectedDate);
    }
    if (field === 'time1') setShow1(false);
    if (field === 'time2') setShow2(false);
    if (field === 'time3') setShow3(false);
  };

  const formatTime = (time?: Date) =>
    time ? time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--';

  return (
    <View style={styles.container}>
      <Text style={[styles.label, styles.cell]}>OffBlock</Text>
      <TouchableOpacity style={[styles.timeCell, styles.cell]} onPress={() => setShow1(true)}>
        <Text style={styles.timeText}>{formatTime(time1)}</Text>
      </TouchableOpacity>
      {show1 && time1 && (
        <RNDateTimePicker
          value={time1}
          mode="time"
          display="default"
          onChange={(e, d) => handleChange('time1', e, d)}
        />
      )}

      <Text style={[styles.label, styles.cell]}>T/O TIME</Text>
      <TouchableOpacity style={[styles.timeCell, styles.cell]} onPress={() => setShow2(true)}>
        <Text style={styles.timeText}>{formatTime(time2)}</Text>
      </TouchableOpacity>
      {show2 && time2 && (
        <RNDateTimePicker
          value={time2}
          mode="time"
          display="default"
          onChange={(e, d) => handleChange('time2', e, d)}
        />
      )}

      <Text style={[styles.label, styles.cell]}>LDG TIME</Text>
      <TouchableOpacity style={[styles.timeCell, styles.cell]} onPress={() => setShow3(true)}>
        <Text style={styles.timeText}>{formatTime(time3)}</Text>
      </TouchableOpacity>
      {show3 && time3 && (
        <RNDateTimePicker
          value={time3}
          mode="time"
          display="default"
          onChange={(e, d) => handleChange('time3', e, d)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 4,
    alignItems: 'center',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    backgroundColor: '#e5e7eb',
    fontWeight: 'bold',
  },
  timeCell: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  timeText: {
    textAlign: 'center',
  },
});

export default OffBlock;
