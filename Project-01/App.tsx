import React from 'react'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import ElevatedCards from './ElevatedCards';
import FancyCards from './FancyCards';
import FlatCards from './FlatCards';
import ActionCards from './ActionCards';
import ContactList from './ContactList';


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCards />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  )
}