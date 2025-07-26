import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import RNDateTimePicker from '@react-native-community/datetimepicker';

type Props = {
    onChange: (value: any) => void;
};

const ONBlock: React.FC<Props> = ({onChange}) => {
    const [time1, setTime1] = useState(new Date());
    const [show1, setShow1] = useState(false);

    const [data, setData] = useState({
        time1: new Date(),
        time2: new Date(),
        time3: new Date(),
        ldgs: '',
    });

    useEffect(() => {
        onChange(data);
    }, [data]);

    

    const onChange1 = (event: any, selectedDate?: Date) => {
        setShow1(false);
        if (selectedDate) {
            setTime1(selectedDate);
        }
    };
    const [time2, setTime2] = useState(new Date());
    const [show2, setShow2] = useState(false);

    const onChange2 = (event: any, selectedDate?: Date) => {
        setShow2(false);
        if (selectedDate) {
            setTime2(selectedDate);
        }
    };
    const [time3, setTime3] = useState(new Date());
    const [show3, setShow3] = useState(false);

    const onChange3 = (event: any, selectedDate?: Date) => {
        setShow3(false);
        if (selectedDate) {
            setTime3(selectedDate);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={[styles.cell, styles.header]}>ONBlock</Text>
            <Text style={[styles.cell, styles.timeCell]} onPress={() => setShow1(true)}>
                {time1.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
            {show1 && (
                <RNDateTimePicker
                    value={time1}
                    mode="time"
                    display="default"
                    onChange={onChange1}
                />
            )}
            <Text style={styles.cell}>BLOCK TIME</Text>
            <Text style={[styles.cell, styles.timeCell]} onPress={() => setShow2(true)}>
                {time2.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
            {show2 && (
                <RNDateTimePicker
                    value={time2}
                    mode="time"
                    display="default"
                    onChange={onChange2}
                />
            )}
            <Text style={styles.cell}>FLT TIME</Text>
            <Text style={[styles.cell, styles.timeCell]} onPress={() => setShow3(true)}>
                {time3.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
            {show3 && (
                <RNDateTimePicker
                    value={time3}
                    mode="time"
                    display="default"
                    onChange={onChange3}
                />
            )}
            <Text style={styles.cell}>LDGS </Text>
            <TextInput
                style={[styles.cell, styles.inputCell]}
                onChangeText={(text) => setData({ ...data, ldgs: text })}
                value={data.ldgs}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    cell: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        textAlign: 'center',
    },
    header: {
        backgroundColor: '#e5e7eb',
    },
    timeCell: {
        flex: 1,
    },
    inputCell: {
        flex: 1,
        height: 40,
    },
});

export default ONBlock