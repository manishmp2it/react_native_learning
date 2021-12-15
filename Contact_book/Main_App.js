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

export default function Main_App() {

    const [flexDirection, setflexDirection] = useState("column");

    const [ourdata, setOurdata] = useState();

    // console.log(ourdata);

    useEffect(() => {
        (async () => {

            const { status } = await Contacts.requestPermissionsAsync();

            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.PhoneNumbers],
                });

                if (data.length > 0) {
                    setOurdata(data);
                    data.map((item) => {
                        // console.log(item);
                    })
                }
            }

        })();
    }, []);

    return (
        ourdata != undefined || ourdata != null ?
            <View style={styles.container}>
                {ourdata.map((item)=>{
                    // console.log("your contact");
                    console.log(item.name);
                    item.phoneNumbers!=undefined || item.phoneNumbers!=null ? item.phoneNumbers.map((subitem)=>{
                        console.log(subitem.number);
                    }) : ""
                })}
            </View>
            : <Text></Text>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

