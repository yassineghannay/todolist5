import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  return (
    <MainLayout>
      <Text style={styles.text}>App Name: To-Do App</Text>
      <TouchableOpacity onPress={() => alert('Easter Egg!')}>
        <Text style={styles.text}>Developer: Your Name</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Date: {new Date().toLocaleDateString()}
      </Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default AboutScreen;
