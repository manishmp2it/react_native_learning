import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Contacts from 'expo-contacts';
// import {Contact} from "expo"
import * as SMS from 'expo-sms';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
// import {Main_App} from "./Contact_book/Main_App"
import Main_App from './Contact_book/Main_App';

export default function App() {

  const [flexDirection, setflexDirection] = useState("column");
 
  const [ourdata, setOurdata] = useState([]);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  console.log(ourdata);

  useEffect(() => {
    
  }, []);

  
  return (
    <View>
    <Main_App/>
    </View>

   
  );
}

