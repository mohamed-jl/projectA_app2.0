import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function FormHeader({ onChange, data }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.cellb}>D.O.F</Text>
                <TextInput style={styles.cell} />
                <Text style={styles.cellb}>CAPT</Text>
                <TextInput style={styles.cell} />
                <Text style={styles.cellb}>F.O</Text>
                <TextInput style={styles.cell} />
            </View>
            <View style={styles.row}>
                <Text style={styles.cellb}>A/C TYPE</Text>
                <TextInput style={styles.cell} value={data.aircraft_type}/>
                <Text style={styles.cellb}>A/C TAIL</Text>
                <TextInput style={styles.cell} value={data.aircraft_tail}/>
                <Text style={styles.cellb}>FIELD</Text>
                <TextInput style={styles.cell} value={data.field}/>
            </View>
            <View style={styles.row}>
                <Text style={styles.cellb}>CUSTOMER</Text>
                <TextInput style={styles.cell} />
                <Text style={styles.cellb}>RIG.IDENT</Text>
                <TextInput style={styles.cell} />
                <Text style={styles.cellb}>POSITION</Text>
                <TextInput style={styles.cell} value="N34°22’ - E011°5"/>
            </View>
            <View style={styles.row}>
                <Text style={{...styles.cellb, padding:0 , justifyContent: 'center', alignItems: 'center'}}>FREQUENCY</Text>
                <View style={{flex:2}}>
                    <Text style={styles.cell}>VHF marine: {data.frequencies.vhf_marine}</Text>
                    <Text style={styles.cell}>APP (SFAX) : {data.frequencies.app} Mhz</Text>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.cell}>HLO: {data.frequencies.hlo} Mhz</Text>
                    <Text style={styles.cell}>TWR (SFAX): {data.frequencies.twr} Mhz </Text>
                </View>
                 <View style={{flex:1}}>
                    <Text style={styles.cell}>NDB: {data.frequencies.ndb} Mhz</Text>
                    <Text style={styles.cell}>VOR(SFX): {data.frequencies.vor}  Mhz</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        marginBottom: 16,
    },
    row: {
        flexDirection: "row",
    },
    cell: {
        flex: 1,
        padding: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        textAlign: "center",
    },
    cellb:{
         flex: 1,
        padding: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        textAlign: "center",
        fontWeight: "bold",
    }
});
