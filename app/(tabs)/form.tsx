import { ScrollView, StyleSheet, View, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import TOData from "@/components/formComps/TOData";
import TOPerfo from "@/components/formComps/TOPerfo";
import OffBlock from "@/components/formComps/OffBlock";
import WayPoints from "@/components/formComps/WayPoints";
import LDGData from "@/components/formComps/LDGData";
import ONBlock from "@/components/formComps/ONBlock";
import MARMData from "@/components/formComps/MARMData";
import BeforeForm from "@/components/BeforeForm";
import Weight from "@/components/formComps/Weight";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { MISKAR_J, ASHTART_I, HASDRUBAL_J, HASDRUBAL_I, MISKAR_I, ASHTART_J } from "@/constants/data";
import FormHeader from "@/components/formComps/FormHeader";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const FlightPlanForm = () => {

  const [prefilledData, setPrefilledData] = useState<any>({})
  const [destination, setDestination] = useState<string | null>(null);
  const [plane, setPlane] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);

  // Sample data placeholders
  const [toData1, setTOData1] = useState({});
  const [weightData1, setWeightData1] = useState({});
  const [toperfoData1, setTOPerfoData1] = useState({});
  const [offBlock1, setOffBlock1] = useState({});
  const [wayPoints1, setWayPoints1] = useState<any>({});
  const [ldgData1, setLDGData1] = useState({});
  const [onBlock1, setOnBlock1] = useState({});
  const [marmData1, setMARMData1] = useState({});
  // Additional data placeholders for the second set of inputs
  const [toData2, setTOData2] = useState({});
  const [toperfoData2, setTOPerfoData2] = useState({});
  const [offBlock2, setOffBlock2] = useState({});
  const [wayPoints2, setWayPoints2] = useState<any>({});
  const [ldgData2, setLDGData2] = useState({});
  const [onBlock2, setOnBlock2] = useState({});
  const [marmData2, setMARMData2] = useState({});

  useEffect(() => {
    if (destination && plane) {
      setShowForm(true);
      // Prefill data based on destination and plane
      if(destination == 'MISKAR' && plane == 'TS-HSJ'){
        setPrefilledData(MISKAR_J);
      }else if(destination == 'ASHTART' && plane == 'TS-HSJ'){
        setPrefilledData(ASHTART_J);
      } else if(destination == 'HASDRUBAL' && plane == 'TS-HSJ'){
        setPrefilledData(HASDRUBAL_J);
      }else if(destination == 'MISKAR' && plane == 'TS-HSI'){
        setPrefilledData(MISKAR_I); 
      } else if(destination == 'ASHTART' && plane == 'TS-HSI'){
        setPrefilledData(ASHTART_I);
      } else if(destination == 'HASDRUBAL' && plane == 'TS-HSI'){
        setPrefilledData(HASDRUBAL_I);
      }
    }
    console.log("Destination:", destination, "Plane:", plane);
    
  }, [destination, plane]);

  useEffect(()=> {
    if (prefilledData) {
      setWayPoints1(prefilledData.WayPoints1);
      setWeightData1(prefilledData.weight);
      setWayPoints2(prefilledData.WayPoints2);

      console.log('pre filled data',prefilledData)
    }
  }, [prefilledData])


const handleSubmit = async () => {
  const payload = {
    destination,
    plane,
    takeoff: toData1,
    weight: weightData1,
    performance: toperfoData1,
    offBlock1,
    waypoints: wayPoints1,
    landing: ldgData1,
    onBlock1,
    marmData1,
  };

  try {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      Alert.alert("Erreur", "Token manquant. Veuillez vous reconnecter.");
      return;
    }

    await axios.post(`${API_URL}/flights`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    Alert.alert("Success", "Flight data submitted.");
  } catch (err) {
    console.error("Submission error:", err);
    Alert.alert("Error", "Failed to submit flight data.");
  }
};


  if (!showForm)
    return (
      <BeforeForm
        setDestination={setDestination}
        setPlane={setPlane}
      />
    );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <FormHeader onChange={() => {}} data={MISKAR_J} />
        <TOData onChange={setTOData1}  />
        <TOPerfo onChange={setTOPerfoData1} data={MISKAR_J}/>
        <OffBlock onChange={setOffBlock1} />
        <WayPoints key="waypoints-1" onChange={setWayPoints1} data={MISKAR_J.WayPoints1}/>
        <LDGData onChange={setLDGData1} data={MISKAR_J}/>
        <ONBlock onChange={setOnBlock1} />
        <MARMData onChange={setMARMData1} />
        <Weight onChange={setWeightData1} data={weightData1} />
        <TOData onChange={setTOData2} />
        <TOPerfo onChange={setTOPerfoData2} data={MISKAR_J}/>
        <OffBlock onChange={setOffBlock2} />
        <WayPoints key="waypoints-2" onChange={setWayPoints2} data={MISKAR_J.WayPoints2}/>
        <LDGData onChange={setLDGData2} data={MISKAR_J}/>
        <ONBlock onChange={setOnBlock2} />
        <MARMData onChange={setMARMData2} />
        <View style={{ marginTop: 20 }}>
          <Button title="Submit Flight" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 10,
  },
});

export default FlightPlanForm;
